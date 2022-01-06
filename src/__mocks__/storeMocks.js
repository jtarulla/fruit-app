import Vuex from 'vuex';
import { mutations } from '@/store/modules/fruits'

export const state = {
  fruits: [
      {
          isFruit: true,
          name: 'pineapple',
          image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/pineapple.jpg',
          price: '828.00',
          color: '#1b3148',
          description: 'The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae.',
          taste: 'Incredible',
          expires: '2022-01-25T06:55:57.979Z',
          id: 1
      },
      {
          isFruit: true,
          name: 'orange',
          image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/orange.jpg',
          price: '911.00',
          color: '#1d7220',
          description: 'The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.',
          taste: 'Awesome',
          expires: '2021-01-27T02:42:38.684Z',
          id: 2
      }
  ],
};

export const getters = {
  getFruits: jest.fn().mockReturnValue([
      {
        isFruit: true,
        name: 'pineapple',
        image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/pineapple.jpg',
        price: '828.00',
        color: '#1b3148',
        description: 'The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae.',
        taste: 'Incredible',
        expires: '2022-01-25T06:55:57.979Z',
        id: 1
      },
      {
        isFruit: true,
        name: 'orange',
        image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/orange.jpg',
        price: '911.00',
        color: '#1d7220',
        description: 'The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.',
        taste: 'Awesome',
        expires: '2021-01-27T02:42:38.684Z',
        id: 2
      }
  ]),
  getLoadingStatus: jest.fn().mockReturnValue()
};

export const actions = {
    fetchAllFruits: jest.fn(),
    addFruit: jest.fn(),
    deleteFruit: jest.fn(),
};

export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
  const mockGetters = Object.assign({}, getters, custom.getters);
  const mockMutations = Object.assign({}, mutations, custom.mutations);
  const mockActions = Object.assign({}, actions, custom.actions);
  const mockState = Object.assign({}, state, custom.state);

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
    }),
  };
}

export const store = __createMocks().store;