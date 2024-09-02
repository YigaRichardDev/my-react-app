import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../services/userService';
import UserForm from '../components/UserForm';
import { User } from '../types';

const EditUserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        const fetchedUser = await getUserById(id);
        setUser(fetchedUser);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (updatedUser: User) => {
    if (id) {
      await updateUser(id, updatedUser);
      navigate('/');
    }
  };

  return user ? (
    <UserForm
      onSubmit={handleSubmit}
      initialData={user}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default EditUserPage;
