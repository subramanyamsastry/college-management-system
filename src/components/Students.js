import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, updateStudent, deleteStudent } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

function Students() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students);
  const [form, setForm] = useState({ id: '', name: '', email: '' });
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !/^\S+@\S+\.\S+$/.test(form.email)) return;
    if (isEdit) {
      dispatch(updateStudent(form));
    } else {
      dispatch(addStudent({ ...form, id: uuidv4() }));
    }
    setForm({ id: '', name: '', email: '' });
    setIsEdit(false);
  };

  const handleEdit = (student) => {
    setForm(student);
    setIsEdit(true);
  };

  return (
    <div className='pt-24 p-4'>
      <h2 className='text-2xl font-bold mb-4'>Students</h2>
      <form className='mb-6 flex flex-col md:flex-row gap-4' onSubmit={handleSubmit}>
        <input
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='Name'
          className='border p-2'
        />
        <input
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder='Email'
          className='border p-2'
        />
        <button type='submit' className='bg-blue-700 text-white px-4 py-2'>
          {isEdit ? 'Update Student' : 'Add Student'}
        </button>
      </form>

      <table className='w-full table-auto border-collapse'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border p-2'>ID</th>
            <th className='border p-2'>Name</th>
            <th className='border p-2'>Email</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className='border p-2'>{student.id}</td>
              <td className='border p-2'>{student.name}</td>
              <td className='border p-2'>{student.email}</td>
              <td className='border p-2'>
                <button className='text-blue-700 mr-2' onClick={() => handleEdit(student)}>Edit</button>
                <button className='text-red-600' onClick={() => dispatch(deleteStudent(student.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;