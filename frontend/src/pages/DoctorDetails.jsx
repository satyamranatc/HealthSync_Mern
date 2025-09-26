import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function DoctorDetails() {
  const [doctorData, setDoctorData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        let Res = await axios.get(`http://localhost:5500/api/doctor/details/${id}`);
        setDoctorData(Res.data);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    }
    getData();
  }, [id]);

  if (!doctorData) return <p className="text-center mt-10">Loading...</p>;

  const { DoctorData, DiseaseData } = doctorData;

  return (
      <div className="min-h-screen bg-gray-50">
        {console.log(DoctorData)}
      <div className="px-6 py-8 bg-white shadow-sm border-b">
        <h2 className="text-4xl font-bold text-gray-800 text-center">{DoctorData.fullName}</h2>
        <p className="text-gray-600 text-center mt-2">{DoctorData.speciality}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center px-6 py-8 max-w-7xl mx-auto">
        {/* Doctor Info Card */}
        <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-100">
          <div className="relative overflow-hidden">
            <img
              className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
              src={DoctorData.avatar}
              alt={DoctorData.fullName}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          <div className="p-6 text-center">
            <p className="text-gray-600 mb-2">{DoctorData.qualification}</p>
            <p className="text-gray-800 font-semibold mb-2">{DoctorData.experience} years experience</p>
            <Link to="/doctors">
              <button className="mt-4 w-full py-3 px-4 text-white text-sm font-medium rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                Back to Doctor List
              </button>
            </Link>
          </div>
        </div>

        {/* Diseases Handled */}
        <div className="w-full lg:w-2/3 grid gap-6">
          {DiseaseData.map((disease, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  src={disease.image}
                  alt={disease.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{disease.name}</h3>
                <p className="text-gray-600 text-sm">{disease.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
