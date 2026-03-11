import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Home,
  Stethoscope,
  ShieldCheck,
  UserCircle,
  Menu,
  X,
  Bell,
  Heart,
} from "lucide-react"

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Patient Portal", path: "/PatientPortal", icon: Heart },
  { name: "Doctor Dashboard", path: "/DoctorDashboard", icon: Stethoscope },
  { name: "Admin Dashboard", path: "/AdminDashboard", icon: ShieldCheck },
]

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-slate-800">Smart Government</h1>
                <p className="text-[10px] text-blue-600 font-semibold uppercase">
                  Hospital Network
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100"
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-lg hover:bg-slate-100">
                <Bell className="w-5 h-5 text-slate-500" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="p-2 rounded-lg hover:bg-slate-100 hidden sm:block">
                <UserCircle className="w-5 h-5 text-slate-500" />
              </button>

              <button
                className="md:hidden p-2 rounded-lg hover:bg-slate-100"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white px-4 py-3 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-slate-600 hover:bg-slate-100"
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  )
}