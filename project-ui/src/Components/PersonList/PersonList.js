import React, { useState } from "react";
// import { useGetAllPersonListQuery } from "../../Redux/Services/Services";
import Person from "../Person/Person";
import AddPerson from '../AddPerson/AddPerson'


import './PersonList.css'
import UpdatePerson from "../UpdatePerson/UpdatePerson";


const PersonList = ({ persons, onDelete,onSubmit,onShowUpdateModal,onUpdate }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUdateModal, setShowupdateModal] = useState(false);


  const handleToggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };




  return (
    <div className="container mx-auto px-4 sm:px-8 w-">
      <div className="py-8">
        <div className="flex justify-between items-center">
          <div className="flex-none">
            <button onClick={handleToggleAddModal} className="mr-2 bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mr-2">Add Person</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
          <div className="w-full text-center tittlePadding">
            <h2 className="text-2xl  font-bold leading-tight mx-auto"> -- Person List 📝-- </h2>
          </div>
        </div>
        {showAddModal && <AddPerson onSubmit={onSubmit} onClose={handleToggleAddModal} />}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >
                    First Name
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >
                    Last Name
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >
                    Age
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >
                    CreateDate
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {persons.map((item) => {
                  return <Person  key={item.id} onUpdate={onUpdate} onShowUpdateModal={onShowUpdateModal} person={item} onDelete={onDelete} />
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PersonList;


