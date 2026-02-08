import { createBrowserRouter } from "react-router-dom";
import App from "./App";
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
import Login from "./pages/Login";
import Department from "./pages/Department";
import Dashboard from "./pages/Dashboard";
import ManagementDocuments from "./pages/ManagementDocuments";
import Convocations from "./pages/Convocations";
import ConvocationDetail from "./pages/ConvocationDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quienes-somos",
        element: <About />,
      },
      {
        path: "/mision-vision",
        element: <Vision />,
      },
      {
        path: "/historia",
        element: <History />,
      },
      {
        path: "/valores",
        element: <Values />,
      },
      {
        path: "/directorio",
        element: <Directory />,
      },
      {
        path: "/area-direccion",
        element: <DirectionArea />,
      },
      {
        path: "/gestion-pedagogica",
        element: <PedagogicalManagement />,
      },
      {
        path: "/gestion-institucional",
        element: <InstitutionalManagement />,
      },
      {
        path: "/gestion-administrativa",
        element: <AdministrativeManagement />,
      },
      {
        path: "/asesoria-juridica",
        element: <LegalAdvisory />,
      },
      {
        path: "/documentos",
        element: <Documents />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/departamentos",
        element: <Department />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/documentos-de-gestion",
        element: <ManagementDocuments />,
      },
      {
        path: "/convocatorias",
        element: <Convocations />,
      },
      {
        path: "/convocatorias/:id",
        element: <ConvocationDetail />,
      },
    ],
  },
]);

export default router;
