import Vue from 'vue'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueRouter from 'vue-router'
import router from '@/router'
import FruitCard from '@/components/FruitCard.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('FruitCard component', () => {
  const fruit = {
    color: '',
    description: '',
    expires: '',
    id: 1,
    image: '',
    isFruit: true,
    name: '',
    price: '',
    taste: ''
  }
  
  let wrapper = null
  
  beforeEach(async () => {
    await router.push({
      name: 'Fruit',
      params: {id: fruit.id}
    }).catch(() => ({}));

    
    wrapper = mount(FruitCard, {
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {fruit}
    })
  })

  afterEach(async() => {
    jest.resetModules();
    jest.resetAllMocks();
  })

  it('renders the component', () => {
    expect(wrapper.vm.$options.name).toMatch('FruitCard')
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('processes valid props data', async () => {
    wrapper.setProps({
      fruit: {
        id: 4,
      }
    })

    await Vue.nextTick();

    expect(wrapper.vm.fruit.id).toBe(4);
  })

  it('links to the right URL', async () => {
    wrapper.setProps({
      fruit: {
        id: 2,
      }
    })

    await Vue.nextTick();

    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('fruit/2')
  })
})