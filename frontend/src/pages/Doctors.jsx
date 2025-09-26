import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

export default function Doctors() 
{

    let [doctorList,setDoctorList] = useState([]);

    useEffect(()=>{
        async function getData() 
        {
            let Res = await axios.get("http://localhost:5500/api/doctor/list");
            console.log(Res.data);
            setDoctorList(Res.data)
            
        }
        getData()
    },[])

  return (
    <div className="min-h-screen bg-gray-50">
        <div className='px-6 py-8 bg-white shadow-sm border-b' id="Header">
            <h2 className="text-4xl font-bold text-gray-800 text-center">Doctor List</h2>
            <p className="text-gray-600 text-center mt-2">Connect with qualified healthcare professionals</p>
        </div>
        <div className='flex flex-wrap gap-6 items-start justify-center px-6 py-8 max-w-7xl mx-auto' id="DoctorContainer">
            {
                doctorList.map((e,index)=>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 min-w-[300px] bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100'>
                        <div className="relative overflow-hidden">
                            <img className='w-full h-64 object-cover transition-transform duration-300 hover:scale-105' src={e.avatar} alt={e.fullName} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                        <div className="p-6">
                            <h3 className='text-2xl font-semibold text-gray-800 mb-3 text-center'>{e.fullName}</h3>
                            <div className="text-center mb-6">
                                <p className='text-gray-600 text-sm mb-1'>{e.education}</p>
                                <p className='text-green-600 font-semibold text-lg'>₹{e.fee}</p>
                                <span className="text-xs text-gray-500">consultation fee</span>
                            </div>
                            <Link to={`/doctors/details/${e._id}`}>
                            <button className='w-full py-3 px-4 text-white text-sm font-medium rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]'>
                               View Profile
                            </button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}