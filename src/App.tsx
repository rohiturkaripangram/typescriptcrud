import React  from 'react';
import {useState, useEffect } from "react"
import './App.css';
import Home from "./Component/Home"
import Edit from "./Component/Edit"
import Add from "./Component/Add"
import axios from "axios"
import { UserType } from './models/user.interface';

import {Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [user, setUser] = useState<UserType[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUser(response.data);
    });
      
  },[]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user}  setUser={setUser}/>}/>
        <Route path="/Add" element={<Add user={user} setUser={setUser}/>}/>
        <Route path="/Edit/:id" element={<Edit user={user} setUser={setUser} />}/>
      </Routes>
      
    </div>
  );
}

export default App;
