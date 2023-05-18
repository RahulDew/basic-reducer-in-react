export const incNumber = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};
export const decNumber = (number) => {
  return {
    type: "DECREMENT",
    payload: number,
  };
};

export const addNote = (note) => {
  return {
    type: 'ADDNOTE',
    payload: note
  };
};

export const delNote = (index) => {
  return {
    type: 'DELNOTE',
    payload: index
  };
};
