import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../services/userService';
import UserForm from '../components/UserForm';

const AddUserPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (user: { name: string; email: string; phone: string }) => {
    await addUser(user);
    navigate('/');
  };

  return (
    <UserForm
      onSubmit={handleSubmit}
      initialData={null}
    />
  );
};

export default AddUserPage;
