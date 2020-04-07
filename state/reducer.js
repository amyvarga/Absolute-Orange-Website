import {} from "./types";

export const initialState = {};

const handlers = {};

const rootReducer = (state = initialState, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : { ...state };

export default rootReducer;
