import CustomHooks from "../pages/CustomHooks";
import Homepage from "../pages/Homepage";
import Jotai from "../pages/Jotai";
import NotFoundPage from "../pages/NotFoundPage";
import UseCallback from "../pages/UseCallback";
import UseContext from "../pages/UseContext";
import UseEffect from "../pages/UseEffect";
import UseMemo from "../pages/UseMemo";
import UseReducer from "../pages/UseReducer";
import UseRef from "../pages/UseRef";
import UseState from "../pages/UseState";
import Zustand from "../pages/Zustand";

const routesConfig = [
  { path: "/", label: "Home", element: <Homepage />, index: true, end: true },
  { path: "/useState", label: "useState", element: <UseState /> },
  { path: "/useEffect", label: "useEffect", element: <UseEffect /> },
  { path: "/useRef", label: "useRef", element: <UseRef /> },
  { path: "/useMemo", label: "useMemo", element: <UseMemo /> },
  { path: "/useCallback", label: "useCallback", element: <UseCallback /> },
  { path: "/useReducer", label: "useReducer", element: <UseReducer /> },
  { path: "/useContext", label: "useContext", element: <UseContext /> },
  { path: "/custom-hooks", label: "Custom Hooks", element: <CustomHooks /> },
  { path: "/jotai", label: "Jotai", element: <Jotai /> },
  { path: "/zustand", label: "Zustand", element: <Zustand /> },
];

// Separate catch-all route since it doesn't need a label
const notFoundRoute = { path: "*", element: <NotFoundPage /> };

export { routesConfig, notFoundRoute };
