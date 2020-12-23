import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"
import horongiinList from "./components/horongiin-list";
import editHorongo from "./components/edit-horongo";
import createHorongo from "./components/create-horongo";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={horongiinList} />
      <Route path="/edit/:id" component={editHorongo} />
      <Route path="/create" component={createHorongo} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;