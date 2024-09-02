import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import UserTable from '../components/UserTable';

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    setUsers(users.filter(user => user._id !== id));
  };

  const handleEdit = (id: string) => {
    navigate(`/edit-user/${id}`);
  };

  return (
    <div className="m-5">
      <h1>User Management</h1>
      <button onClick={() => navigate('/add-user')} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition mb-3 mt-3"
      >Add User</button>
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
