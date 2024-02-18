


const DeletePerson = ({perosnId,onClose,onSubmit})=>
{
  const deletePerson = (perosnId)=>
  {
    onSubmit(perosnId)
  }

  return (


    <>
    <div className="justify-center items-center flex overflow-x-hidden w-full overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t w-full">
                    <h1 className="text-3xl font-semibold text-gray-500">
                        Delete Person Modal
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
                 <p>Are You Sure To Delete Person?</p>
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
                         onClick={()=>deletePerson(perosnId)}
                        >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>

  )
}

export default DeletePerson;