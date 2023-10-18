import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserType } from '../models/user.interface';
import { useNavigate, useParams } from 'react-router-dom';

type Props = {
  user: UserType[];
  setUser: React.Dispatch<React.SetStateAction<UserType[]>>;
};

const Edit = (props: Props) => {
  const { id} = useParams();

  const navigate = useNavigate();
  const { user, setUser } = props;

  const [data, setData] = useState<UserType>({
    id: '',
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
      .then((res) => {
        alert('Data updated successfully!');
        const updatedRecords = user.map((element) => (element.id == id ? data : element));
        setUser(updatedRecords);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

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
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="username">username:</label>
            <input
              type="name"
              name="username"
              className="form-control"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="mt-3 d-flex justify-content-center gap-1">
            <button className="btn btn-info" type="submit">
              Submit
            </button>
            <button className="btn btn-info" onClick={() => navigate('/')}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
