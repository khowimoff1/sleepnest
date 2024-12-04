const intialState = {
  card: [],
};

export const ReducerCounter = (state = intialState, action) => {
  switch (action.type) {
    case "add_car":
      return {
        ...state,
        card: state.card.some((card) => card.id === action.payload.id)
          ? state.card
          : [...state.card, action.payload],
      };
    case "remove_car":
      return {
        ...state,
        card: state.card.filter((card) => card.id !== action.payload),
      };

    default:
      return state;
  }
};
