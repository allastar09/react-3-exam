import React, { useReducer, useState } from 'react'
import { data } from 'react-router'

const Home = () => {
  const initialState = {
    count: 0,
    value: 0,
    data: [{id: 1, name: 'Andaleb'}, {id: 2, name: 'Fasehuddin'}]
  }

  const countReducer = (state, action)=>{
    if(action.type == 'incriment'){
      return {...state, count: state.count += 1}
    }
    if(action.type == 'delete'){
      return {...state, data: state.data.filter(e=> e.id != action.value)}
    }
    if (action.type === 'add') {
  return {
    ...state,
    data: [...state.data, action.value]
  }
}
if (action.type === 'edit') {
  return {
    ...state,
    data: state.data.map(el =>
      el.id === action.value.id
        ? { ...el, name: action.value.name }
        : el
    )
  }
}
  }

  const [state, dispatch] = useReducer(countReducer,initialState)

  const [name, setName] = useState('')

  const addUser = () => {
    if (!name.trim()) return;

    dispatch({
      type: 'add',
      value: {
        id: Date.now(),
        name: name
      }
    })

    setName('')
  }

  return (
  <div className="min-h-screen bg-gray-50 p-8">

    <div className="max-w-3xl mx-auto">

      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => dispatch({ type: 'incriment' })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          +
        </button>

        <h1 className="text-2xl font-bold text-gray-800">
          Count: {state.count}
        </h1>
      </div>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={addUser}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
        >
          Add
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md bg-white">

        <table className="w-full text-left">

          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">

            {state.data.map((el) => (
              <tr
                key={el.id}
                className="hover:bg-blue-50 transition duration-200"
              >
                <td className="px-6 py-4 text-gray-500">
                  {el.id}
                </td>

                <td className="px-6 py-4 font-medium text-gray-800">
                  {el.name}
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => dispatch({
                      type: 'delete',
                      value: el.id
                    })}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
  onClick={() => {
    const newName = prompt('Enter new name:', el.name)

      dispatch({
        type: 'edit',
        value: {
          id: el.id,
          name: newName
        }
      })
    }
  }
  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm transition mr-2"
>
  Edit
</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

    </div>
  </div>
);
}

export default Home