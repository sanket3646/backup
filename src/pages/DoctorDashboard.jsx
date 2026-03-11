import React from "react";

export default function DoctorDashboard() {
  const queue = [
    { token: 12, name: "Ramesh Patil", issue: "Fever" },
    { token: 13, name: "Anita Sharma", issue: "Headache" },
    { token: 14, name: "Rahul Verma", issue: "Back Pain" },
    { token: 15, name: "Priya Singh", issue: "Checkup" },
  ];

  const schedule = [
    { time: "9:00 AM", task: "General Consultation" },
    { time: "11:00 AM", task: "Cardiology Patients" },
    { time: "1:00 PM", task: "Lunch Break" },
    { time: "2:00 PM", task: "Follow-up Appointments" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Doctor Dashboard
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your appointments and patient queue
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">24</h2>
          <p className="text-sm text-slate-500">Today's Appointments</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">8</h2>
          <p className="text-sm text-slate-500">Patients Waiting</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-blue-600">16</h2>
          <p className="text-sm text-slate-500">Patients Completed</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Patient Queue */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-lg mb-4">Patient Queue</h2>

          <div className="space-y-3">
            {queue.map((patient) => (
              <div
                key={patient.token}
                className="flex justify-between items-center p-3 border rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    #{patient.token} — {patient.name}
                  </p>
                  <p className="text-sm text-slate-500">{patient.issue}</p>
                </div>

                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  Call
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Schedule */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-lg mb-4">Today's Schedule</h2>

          <div className="space-y-3">
            {schedule.map((item) => (
              <div
                key={item.time}
                className="flex justify-between border-b pb-2"
              >
                <span className="text-sm font-medium">{item.time}</span>

                <span className="text-sm text-slate-500">{item.task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
