import React from "react";

export default function AdminDashboard() {
  const resourceRequests = [
    { hospital: "City Hospital", resource: "Ventilator", status: "Pending" },
    {
      hospital: "District Medical Center",
      resource: "Oxygen Cylinders",
      status: "Approved",
    },
    {
      hospital: "Community Health Hospital",
      resource: "Blood Units",
      status: "Pending",
    },
  ];

  const inventory = [
    { item: "Ventilators", count: 8 },
    { item: "Oxygen Cylinders", count: 34 },
    { item: "Blood Units", count: 12 },
    { item: "ICU Beds", count: 6 },
  ];

  const doctors = [
    { name: "Dr. Mehta", department: "Cardiology", shift: "9 AM - 1 PM" },
    { name: "Dr. Sharma", department: "Orthopedics", shift: "1 PM - 5 PM" },
    { name: "Dr. Patel", department: "General Medicine", shift: "5 PM - 9 PM" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Hospital Admin Dashboard
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Monitor hospital resources and manage coordination
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">120</h2>
          <p className="text-sm text-slate-500">Patients Today</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">45</h2>
          <p className="text-sm text-slate-500">Doctors Available</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">12</h2>
          <p className="text-sm text-slate-500">Resource Requests</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">6</h2>
          <p className="text-sm text-slate-500">Emergency Cases</p>
        </div>
      </div>

      {/* Resource Requests */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-4">Resource Requests</h2>

        <div className="space-y-3">
          {resourceRequests.map((req, index) => (
            <div
              key={index}
              className="flex justify-between items-center border p-3 rounded-lg"
            >
              <div>
                <p className="font-medium">{req.hospital}</p>
                <p className="text-sm text-slate-500">
                  Requested: {req.resource}
                </p>
              </div>

              <span
                className={`text-sm px-3 py-1 rounded ${
                  req.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {req.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-4">Inventory</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {inventory.map((item) => (
            <div key={item.item} className="border rounded-lg p-4 text-center">
              <h3 className="text-xl font-bold text-blue-600">{item.count}</h3>

              <p className="text-sm text-slate-500">{item.item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Schedule */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-4">Doctor Schedule</h2>

        <div className="space-y-3">
          {doctors.map((doc) => (
            <div key={doc.name} className="flex justify-between border-b pb-2">
              <span className="font-medium">{doc.name}</span>

              <span className="text-sm text-slate-500">{doc.department}</span>

              <span className="text-sm">{doc.shift}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
