import shortid from 'shortid';

//Selectors

export const getAllColumns = ({ columns }) => columns;

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

export const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};
