import { UserType } from "../models/user.interface";
import axios from "axios"
import {Link} from "react-router-dom"

type Props = {
  user: UserType[];
  setUser:React.Dispatch<React.SetStateAction<UserType[]>>
};

const UserList = (props: Props) => {
  const { user ,setUser} = props;

  
  const handleDelete = (id:string) => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUser((previousUsers) =>
        previousUsers.filter((item) => item.id !== id)
      );
    });
  };
  return (
    <div className='mt-4'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((element) => (
            <tr key={element.id}>
              <th scope="row">{element.id}</th>
              <td>{element.name}</td>
              <td>{element.username}</td>
              <td>{element.email}</td>
              <td className="d-flex justify-content-center gap-2">
                
                <button className="bg-danger border border-0 rounded-1 text-light inline-block" >
                 Delete
                </button>

                <button className="bg-warning border border-0 rounded-1 text-light inline-block">
                  <Link className="btn-link" to={`/Edit/${element.id}`}>Edit</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
