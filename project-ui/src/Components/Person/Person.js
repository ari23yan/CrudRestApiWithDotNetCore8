
import { useState } from 'react';
import './Person.css'
import UpdatePerson from '../UpdatePerson/UpdatePerson';


const Person = ({ person ,onDelete,onShowUpdateModal,onUpdate}) => {

  const [showUpdateModal,setUpdateModal] = useState(false);

  const toggleUpdateModal = () =>
  {
    setUpdateModal(!showUpdateModal);
    onShowUpdateModal(person.id)
  }

  const date = new Date(person.createDate);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  return (
    
    
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 text-center bg-white text-sm">
        <div className="flex">
          <div className="flex-shrink-0 w-10 h-10 ">
            <img className="w-full h-full rounded-full profileImage" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" alt="" />
          </div>
          <div className="ml-3 px-5 py-5">
            <p className="text-gray-900 whitespace-no-wrap">
              {person.name}
            </p>
          </div>
        </div>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">{person.family}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">{person.age}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">{formattedDate}</span>
        </span>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
        <div className="m-3 text-center">
          <button onClick={()=> onDelete(person.id)} className="mr-2 bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span className="mr-2">Delete</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6">
              <path  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
          <button onClick={()=> toggleUpdateModal() } className="mr-2 bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span className="mr-2">Edit</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6">
            <path  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>
          </button>      
        </div>
      </td>
      {showUpdateModal && <UpdatePerson onSubmit={onUpdate} onClose={toggleUpdateModal} />}
    </tr>
  )
};
export default Person; 