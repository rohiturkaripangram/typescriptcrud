import React, { useState, useEffect ,useContext} from "react";

import axios from "axios";
import { UserType } from "../models/user.interface";
import { useNavigate, Link } from "react-router-dom";

type Props = {
  user: UserType[];
  setUser:React.Dispatch<React.SetStateAction<UserType[]>>
};

const Add = (props:Props) => {
  const {user, setUser}=props

  const navigate = useNavigate();
  

  const [inputData, setInputData] = useState<UserType>({
    id:'' ,
    name: "",
    username: "",
    email: "",
  });

  const handleSubmit=(event:any)=>{
 event.preventDefault();
 axios.post("https://jsonplaceholder.typicode.com/users", inputData,{
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
 }).then((res) => {
  alert("Data added Successfully");
  setUser((previousUser) => [...previousUser, res.data]);
  navigate("/");
})
.catch((error) => console.log(error));

  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="mt-3">
              Name
            </label>
            <input
              type="name"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="username">username:</label>
            <input
              type="name"
              name="username"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, username: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>

          <div className="mt-3 d-flex justify-content-center gap-1">
            <button className="btn btn-info" type="submit">
              Submit
            </button>
            <button className="btn btn-info" onClick={() => navigate("/")}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
