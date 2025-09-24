import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function Treatments() 
{

    let [TreatmentsList,setTreatmentsList] = useState([]);

    useEffect(()=>{
        async function getData() 
        {
            let Res = await axios.get("http://localhost:5500/api/disease/list");
            console.log(Res.data);
            setTreatmentsList(Res.data)
            
        }
        getData()
    },[])

  return (
    <div className="min-h-screen bg-gray-50">
        <div className='px-6 py-8 bg-white shadow-sm border-b' id="Header">
            <h2 className="text-4xl font-bold text-gray-800 text-center">Treatments List</h2>
            <p className="text-gray-600 text-center mt-2">Discover the best treatments with expert doctors</p>
        </div>
        <div className='flex flex-wrap gap-6 items-start justify-center px-6 py-8 max-w-7xl mx-auto' id="TreatmentsContainer">
            {
                TreatmentsList.map((e,index)=>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 min-w-[300px] h-auto bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100'>
                        <div className="relative overflow-hidden">
                            <img className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105' src={e.image} alt={e.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-4">
                            <h3 className='text-xl font-semibold text-gray-800 mb-2 line-clamp-1'>{e.name}</h3>
                            <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3'>{e.description}</p>
                            
                            <div className="mb-4">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Available Doctors:</h4>
                                <div className="space-y-2">
                                    {
                                        e.opretingDoctor.map((d,idx)=>(
                                            <div key={idx} className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                                                <p className="text-sm text-gray-800 font-medium">{d.fullName}</p>
                                                <p className="text-xs text-green-600 font-semibold">₹{d.fee} consultation fee</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            
                            <button className='w-full py-3 px-4 text-white text-sm font-medium rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]'>
                                Consult Now
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}