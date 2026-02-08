import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // MainLayout
import ApplicantLayout from "./layouts/ApplicantLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import History from "./pages/History";
import Values from "./pages/Values";
import Directory from "./pages/Directory";
import DirectionArea from "./pages/DirectionArea";
import PedagogicalManagement from "./pages/PedagogicalManagement";
import InstitutionalManagement from "./pages/InstitutionalManagement";
import AdministrativeManagement from "./pages/AdministrativeManagement";
import LegalAdvisory from "./pages/LegalAdvisory";
import Documents from "./pages/Documents";
import Contact from "./pages/Contact";
import Department from "./pages/Department";
import Dashboard from "./pages/Dashboard";
import ManagementDocuments from "./pages/ManagementDocuments";
import Convocations from "./pages/Convocations";
import ConvocationDetail from "./pages/ConvocationDetail";

// Auth
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";

// App Specific
import StudentProfile from "./pages/StudentProfile";
import AdminDashboard from "./pages/AdminDashboard";
import ApplicantDetail from "./pages/ApplicantDetail";

const router = createBrowserRouter([
  // Public Routes (Website)
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/quienes-somos", element: <About /> },
      { path: "/mision-vision", element: <Vision /> },
      { path: "/historia", element: <History /> },
      { path: "/valores", element: <Values /> },
      { path: "/directorio", element: <Directory /> },
      { path: "/area-direccion", element: <DirectionArea /> },
      { path: "/gestion-pedagogica", element: <PedagogicalManagement /> },
      { path: "/gestion-institucional", element: <InstitutionalManagement /> },
      {
        path: "/gestion-administrativa",
        element: <AdministrativeManagement />,
      },
      { path: "/asesoria-juridica", element: <LegalAdvisory /> },
      { path: "/documentos", element: <Documents /> },
      { path: "/contacto", element: <Contact /> },
      { path: "/departamentos", element: <Department /> },
      { path: "/documentos-de-gestion", element: <ManagementDocuments /> },
      { path: "/convocatorias", element: <Convocations /> },
      { path: "/convocatorias/:id", element: <ConvocationDetail /> },
      // Legacy dashboard route if needed, otherwise removed or redirected
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },

  // Auth Routes
  { path: "/login", element: <Login /> },
  { path: "/admin/login", element: <AdminLogin /> },

  // Applicant Layout Routes
  {
    element: <ApplicantLayout />,
    children: [
      { path: "/perfil", element: <StudentProfile /> },
      // Add other applicant routes here, e.g. /mis-postulaciones
    ],
  },

  // Admin Layout Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "postulantes/:id", element: <ApplicantDetail /> },
      // Add other admin routes here
    ],
  },
]);

export default router;
