const initialState = { students: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] };
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map((s) => (s.id === action.payload.id ? action.payload : s)),
      };
    case 'DELETE_STUDENT':
      return { ...state, students: state.students.filter((s) => s.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;