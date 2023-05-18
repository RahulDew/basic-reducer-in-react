const initialState = ["weather is sunny", "but it's too hot"];

const updateNoteList = (state = initialState, action) => {
  switch (action.type) {
    case "ADDNOTE":
      return (state = [...state, action.payload]);

    case "DELNOTE":
      return (state = state.filter((note, index) => index != action.payload));
    default:
      return state;
  }
};

export default updateNoteList;
