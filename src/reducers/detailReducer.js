const initState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoding: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoding: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoding: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
