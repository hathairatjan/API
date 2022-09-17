import React, {createContext, useContext, useEffect, useState} from 'react';
const BASE_URL = 'https://cpe451node-api.herokuapp.com/api/user';
const UserContext = createContext();
export const useUser = () => {
  return useContext(UserContext);
};
const UserProvider = ({children}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(res => {
        setUsers(res.data);
      });
  }, []);

  const createUser = data => {
    const reqOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    };
    return fetch(BASE_URL, reqOptions)
      .then(res => res.json())
      .then(res => {
        setUsers(prev => [...prev, res.data]);
        return res;
      });
  };
  const updateUser = data => {
    const reqOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    };
    return fetch(BASE_URL, reqOptions)
      .then(res => res.json())
      .then(res => {
        setUsers(prev =>
          prev.map(item => (item._id === res.data._id ? res.data : item)),
        );
        return res;
      });
  };
  const deleteUser = id => {
    const reqOptions = {
      method: 'DELETE',
    };
    return fetch(`${BASE_URL}/${id}`, reqOptions)
      .then(res => res.json())
      .then(res => {
        setUsers(prev => prev.filter(item => item._id !== res.data._id));
        return res;
      });
  };
  return (
    <UserContext.Provider value={{users, createUser, updateUser, deleteUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
