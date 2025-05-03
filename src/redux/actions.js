export const addStudent = (student) => ({ type: 'ADD_STUDENT', payload: student });
export const updateStudent = (student) => ({ type: 'UPDATE_STUDENT', payload: student });
export const deleteStudent = (id) => ({ type: 'DELETE_STUDENT', payload: id });