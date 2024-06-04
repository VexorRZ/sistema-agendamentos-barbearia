/* eslint-disable multiline-ternary */
import React from "react";

import {
  BrowserRouter as Routing,
  Route,
  Routes as Routers,
} from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Scheduling from "../Pages/Scheduling";

const Routes = () => {
  return (
    <div>
      <Routing>
        <Routers>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/agendamento" element={<Scheduling />} />
        </Routers>
      </Routing>
    </div>
  );
};

export default Routes;
