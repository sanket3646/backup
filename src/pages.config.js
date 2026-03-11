import Home from "./pages/Home"
import PatientPortal from "./pages/PatientPortal"
import AdminDashboard from "./pages/AdminDashboard"
import DoctorDashboard from "./pages/DoctorDashboard"
import Layout from "./Layout.jsx"

export const PAGES = {
  Home: Home,
  PatientPortal: PatientPortal,
  AdminDashboard: AdminDashboard,
  DoctorDashboard: DoctorDashboard,
}

export const pagesConfig = {
  mainPage: "Home",
  Pages: PAGES,
  Layout: Layout,
}