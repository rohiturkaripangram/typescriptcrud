import React, { useEffect, useState } from "react";
import UserList from "./userList";
import { UserType } from "../models/user.interface";
import axios from "axios";
import {Link} from "react-router-dom"

type Props = {
  user: UserType[];
  setUser:React.Dispatch<React.SetStateAction<UserType[]>>
};

const Home = (props:Props) => {
  const { user, setUser } = props;
  return (
    <>
     <div className="text-center record mt-4">
        <Link to="/Add" className="btn btn-primary">
          Add Record
        </Link>
      </div>
      <UserList user={user}  setUser={setUser} />
    </>
  );
};

export default Home;
