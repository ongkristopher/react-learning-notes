import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { routesConfig, notFoundRoute } from "./config/routesConfig";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routesConfig.map(({ path, element, index }) => (
            <Route key={path} path={path} element={element} index={index} />
          ))}
          <Route path={notFoundRoute.path} element={notFoundRoute.element} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
