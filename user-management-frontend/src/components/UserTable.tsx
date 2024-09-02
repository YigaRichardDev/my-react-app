import React from 'react';

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

interface UserTableProps {
  users: User[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="hover:bg-gray-100">
              <td className="px-6 py-4 border-b border-gray-300">{user.name}</td>
              <td className="px-6 py-4 border-b border-gray-300">{user.email}</td>
              <td className="px-6 py-4 border-b border-gray-300">{user.phone}</td>
              <td className="px-6 py-4 border-b border-gray-300">
                <button
                  onClick={() => onEdit(user._id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
