const initialState = 0;
const updateNum = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;

    case "DECREMENT":

      return state <= action.payload ? initialState : state - action.payload;

    default:
      return state;
  }
};

export default updateNum;
