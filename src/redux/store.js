import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';
// Selector
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  //data destructuring, extracting values ​​to const...
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = (state) => state.columns;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ typ: 'ADD_CARD', payload });

export const searchString = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN': {
      return {
        ...state,
        columns: [
          ...state.columns,
          { id: shortid.generate(), ...action.payload },
        ],
      };
    }
    case 'ADD_CARD': {
      return {
        ...state,
        cards: [...state.cards, { id: shortid.generate(), ...action.payload }],
      };
    }
    case 'UPDATE_SEARCHSTRING': {
      return { ...state, searchString: action.payload };
    }
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
