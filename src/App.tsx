import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";

interface RouteType {
  path: string;
  component: React.ReactElement<any>;
  layout?: any;
}
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route: RouteType, index: number) => {
            let Layout: any = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{route.component}</Layout>}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
