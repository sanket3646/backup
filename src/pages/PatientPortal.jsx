import React, { useState } from "react";
import { Search, Calendar, ListOrdered } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function PatientPortal() {
  const location = useLocation();
  const selectedHospital = location.state?.hospital;

  const [activeTab, setActiveTab] = useState(
    selectedHospital ? "book" : "find",
  );
  const [token, setToken] = useState(null);

  const hospitals = [
    { name: "City Government Hospital", location: "Downtown", wait: 12 },
    { name: "District Medical Center", location: "North Zone", wait: 7 },
    { name: "Community Health Hospital", location: "East Side", wait: 5 },
  ];

  const bookToken = () => {
    const generatedToken = Math.floor(Math.random() * 100) + 1;
    setToken(generatedToken);
    setActiveTab("queue");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Patient Portal
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Find hospitals, book appointments and track queue status
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white p-2 rounded-xl border">
        <button
          onClick={() => setActiveTab("find")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            activeTab === "find" ? "bg-blue-50 text-blue-700" : ""
          }`}
        >
          <Search className="w-4 h-4" />
          Find Hospital
        </button>

        <button
          onClick={() => setActiveTab("book")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            activeTab === "book" ? "bg-blue-50 text-blue-700" : ""
          }`}
        >
          <Calendar className="w-4 h-4" />
          Book Appointment
        </button>

        <button
          onClick={() => setActiveTab("queue")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            activeTab === "queue" ? "bg-blue-50 text-blue-700" : ""
          }`}
        >
          <ListOrdered className="w-4 h-4" />
          Queue Status
        </button>
      </div>

      {/* FIND HOSPITAL */}
      {activeTab === "find" && (
        <div className="grid md:grid-cols-3 gap-4">
          {hospitals.map((hospital) => (
            <div key={hospital.name} className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold text-lg">{hospital.name}</h3>

              <p className="text-sm text-slate-500">{hospital.location}</p>

              <p className="text-sm mt-2">
                Avg Wait Time: <b>{hospital.wait} mins</b>
              </p>

              <button
                onClick={() => setActiveTab("book")}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      )}

      {/* BOOK APPOINTMENT */}
      {activeTab === "book" && (
        <div className="bg-white p-6 rounded-xl shadow max-w-md">
          <h2 className="font-semibold text-lg mb-4">Book Appointment</h2>

          {/* Show selected hospital if coming from AI results */}
          {selectedHospital && (
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mb-4">
              <p className="text-sm text-slate-600">Booking at:</p>

              <p className="font-semibold">{selectedHospital.name}</p>

              <p className="text-sm text-slate-500">
                {selectedHospital.address}, {selectedHospital.district}
              </p>
            </div>
          )}

          <input
            type="text"
            placeholder="Enter Patient Name"
            className="w-full border rounded-lg p-2 mb-3"
          />

          <select className="w-full border rounded-lg p-2 mb-3">
            <option>Select Department</option>
            <option>General Medicine</option>
            <option>Cardiology</option>
            <option>Orthopedics</option>
          </select>

          <button
            onClick={bookToken}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Confirm Booking
          </button>
        </div>
      )}

      {/* QUEUE STATUS */}
      {activeTab === "queue" && (
        <div className="bg-white p-6 rounded-xl shadow max-w-md">
          <h2 className="font-semibold text-lg mb-3">Queue Status</h2>

          {token ? (
            <div>
              <p>Your Token Number:</p>

              <h1 className="text-4xl font-bold text-blue-600 mt-2">
                #{token}
              </h1>

              <p className="text-sm text-slate-500 mt-2">
                Please wait for your turn. Estimated time ~15 minutes.
              </p>
            </div>
          ) : (
            <p className="text-slate-500">
              No active token. Please book an appointment first.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
