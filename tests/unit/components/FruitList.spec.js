import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import FruitList from '@/components/FruitList.vue'
import store from '@/store'
import { __createMocks as createStoreMocks } from '@/__mocks__/storeMocks'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('FruitList component', () => {
  let wrapper
  
  let storeMocks
  window.confirm = jest.fn(() => true)
  
  beforeEach(async () => {
    storeMocks = createStoreMocks();
    
    await Vue.nextTick();

    wrapper = mount(FruitList, {
        localVue,
        router,
        stubs: {
            RouterLink: RouterLinkStub
        },
        store: storeMocks.store
    })
  })

  it('renders the component', () => {
    expect(wrapper.vm.$options.name).toMatch('FruitList')
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('dispatches "fetchAllFruits" when component is mounted', () => {
    const fruitTitle = wrapper.findAll('.fruit-card--title-text').at(1)

    expect(fruitTitle.text()).toBe('orange')
    expect(storeMocks.actions.fetchAllFruits).toHaveBeenCalled()
  })

  it('commit "SET_FRUITS" and changes the state', () => {
    const fruits = [{
        isFruit: true,
        name: "banana",
        image: "https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/banana.jpg",
        price: "866.00",
        color: "#797e4a",
        description: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.",
        taste: "Ergonomic",
        expires: "2022-04-19T19:57:31.521Z",
        id: 3
    }]

    store.commit('SET_FRUITS', fruits)

    expect(store.state.Fruits.fruits).toEqual(fruits)
  })

  it('dispatches "deleteFruit" and deletes the item', () => {
    const deleteButton = wrapper.findAll('.fruit-card--title-delete').at(0)

    deleteButton.trigger('click');

    expect(storeMocks.actions.deleteFruit).toHaveBeenCalled()
  })

  it('commit "DELETE_FRUIT" and changes the state', () => {
    store.commit('DELETE_FRUIT', 3)

    expect(store.state.Fruits.fruits).toEqual([])
  })

  it('it renders a message if no fruits available', () => {
    const fruits = []

    store.commit('SET_FRUITS', fruits)

    wrapper = mount(FruitList, {
        localVue,
        router,
        stubs: {
            RouterLink: RouterLinkStub
        },
        store
    })

    const title = wrapper.find('.fruit-list--no-content')
    
    expect(title.text()).toBe('No fruits were found. Try adding one!')
  })
})