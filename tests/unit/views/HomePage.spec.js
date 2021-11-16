import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import HomePage from '@/views/HomePage.vue'
import store from '@/store'
import { __createMocks as createStoreMocks } from '@/__mocks__/storeMocks'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('HomePage view', () => {
  let wrapper

  let storeMocks
  
  beforeEach(async () => {
    storeMocks = createStoreMocks();
    
    await Vue.nextTick();

    wrapper = mount(HomePage, {
        localVue,
        router,
        stubs: {
            RouterLink: RouterLinkStub
        },
        store: storeMocks.store
    })
  })

  it('renders the view', () => {
    expect(wrapper.vm.$options.name).toMatch('Home')
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('dispatches "addFruit" correctly', async () => {
    await wrapper.setData({ showModal: true })
  
    await wrapper.find('form').trigger('submit.prevent')

    expect(storeMocks.actions.addFruit).toHaveBeenCalled()
  })

  it('commit "SET_ONE_FRUIT" and changes the state', () => {
    const fruit = {
        isFruit: true,
        name: "banana",
        image: "https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/banana.jpg",
        price: "866.00",
        color: "#797e4a",
        description: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.",
        taste: "Ergonomic",
        expires: "2022-04-19T19:57:31.521Z",
        id: 3
    }

    expect(store.state.Fruits.fruits).toEqual([])

    store.commit('SET_ONE_FRUIT', fruit)

    expect(store.state.Fruits.fruits).toEqual([fruit])
  })
})