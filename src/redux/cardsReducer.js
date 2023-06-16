import shortid from 'shortid';
import { strContains } from '../utils/strContains';
// Selector
export const getAllCards = (state) => state.cards;
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  //data destructuring, extracting values ​​to const...
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite === true);

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

// action creators

export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = (payload) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload,
});

export const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    default:
      return statePart;
  }
};