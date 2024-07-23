import React from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux';
import { listData} from './redux/reducers/globalState';
import { store } from './redux/store';
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Fill } from "react-icons/ri";
import './App.css'

function TableData() {
  const data = useSelector((state) => state.dataUser.dataList);
  const endPoint = 'https://jsonplaceholder.typicode.com/users'
  const dispatch = useDispatch()

  async function getName() {
    const response = await fetch(endPoint);
    let dataUser = await response.json()
    dispatch(listData(dataUser))
  }

  return (
    <div className='flex flex-col gap-2'>
      <button onClick={getName} className='bg-green-500 w-[50%] text-white font-semibold py-2'>Show Data</button>
    <table className='border border-black w-[50%]'>
      <thead className='border border-black bg-blue-500'>
        <tr className='border border-black'>
          <th className='border border-black px-4'>Nama</th>
          <th className='border border-black'>Email</th>
          <th className='border border-black'>Options</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr className='border border-black'>
            <td className='px-4 border-black'>{item.name}</td>
              <td className='px-4 border-black'>{item.email}</td>
              <td className='flex gap-2 items-center border-black px-4 justify-center'>
                <button><TiEdit /></button>
                <button><RiDeleteBin6Fill /></button>
            </td>
          </tr> 
          )
        })}
      </tbody>
    </table>
    </div>
  )
}

function App() {

  return (
    <Provider store={store}>
      <TableData />
    </Provider>
  )
}

export default App
