
import React, { useState } from "react";
import {  toast } from 'react-toastify';


const  AddPerson = ({ onClose,onSubmit }) => {


    const  validateAndSubmitForm = async () =>
   {
    var name = document.getElementById('name-input').value;
    var family = document.getElementById('family-input').value;
    var age = document.getElementById('age-input').value;

    if(name === null || name === '' || name === undefined )
    {
       return alert('Please Fill name Field')
    }
    if(family === null || family === '' || family === undefined )
    {
       return alert('Please Fill family Field')
    }
    if(age === null || age === '' || age === undefined )
    {
       return alert('Please Fill age Field')
    }
   onSubmit(name, family, age);
    toast.success('🦄 Person Added Successfully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    onClose()
   }

    return (
        
        <>
            <div className="justify-center items-center flex overflow-x-hidden w-full overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t w-full">
                            <h1 className="text-3xl font-semibold text-gray-500">
                                Add Person Modal
                            </h1>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={onClose}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto text-black">
                            <div className="mb-6">
                                <label for="name-input" className=" float-left block mb-2 text-sm font-bold text-gray-900 dark:text-white">Name :</label>
                                <input type="text" id="name-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="mb-6">
                                <label for="family-input" className=" float-left block mb-2 text-sm font-bold text-gray-900 dark:text-white">LastName :</label>
                                <input type="text" id="family-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="mb-6">
                                <label for="age-input" className=" float-left block mb-2 text-sm font-bold text-gray-900 dark:text-white">Age :</label>
                                <input type="text" id="age-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onClose}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={()=>validateAndSubmitForm()}
                                >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};
export default AddPerson;