'use client';
import { useState, useEffect } from 'react';
interface User {
  id: number;
  name: string;
  email: string;
  emailTest: string;
}

interface Action {
  name: string;
  onClick: (user: User) => void;
}

interface OrganizerEventListProps {
  initialUsers: User[];
  totalUsers: number;
  actions: Action[];
  initialPage: number;
  itemsPerPage: number;
}

const OrganizerEventList: React.FC<OrganizerEventListProps> = ({
  initialUsers,
  totalUsers,
  actions,
  initialPage,
  itemsPerPage,
}) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalUsers / itemsPerPage)
  );
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'asc',
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/api/users?page=${currentPage}&limit=${itemsPerPage}&sort=${sortConfig.key}&order=${sortConfig.direction}`
      );
      const data = await response.json();
      setUsers(data.users);
      setTotalPages(Math.ceil(data.totalUsers / itemsPerPage));
    };

    fetchData();
  }, [currentPage, itemsPerPage, sortConfig]);

  const handleSort = (key: keyof User) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className='flex justify-between items-center py-2'>
        <input
          type='text'
          placeholder='Filter users...'
          value={filter}
          onChange={handleFilter}
          className='border px-4 py-2'
        />
      </div>

      <div>
        <table className='min-w-full bg-white text-left shadow-md rounded-xl overflow-hidden'>
          <thead>
            <tr>
              <th
                onClick={() => handleSort('name')}
                className='cursor-pointer p-3'
              >
                Name
              </th>
              <th
                onClick={() => handleSort('email')}
                className='cursor-pointer p-3'
              >
                Email
              </th>
              <th
                onClick={() => handleSort('email')}
                className='cursor-pointer p-3'
              >
                Email Test
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(
                (user) =>
                  !filter ||
                  Object.values(user).some((val) =>
                    String(val).toLowerCase().includes(filter.toLowerCase())
                  )
              )
              .map((user) => (
                <tr key={user.id} className='border-b border-gray-300'>
                  <td className='p-3'>{user.name}</td>
                  <td className='p-3'>{user.email}</td>
                  <td className='p-3'>{user.emailTest}</td>
                  <td className='p-3'>
                    {actions.map((action) => (
                      <button
                        key={action.name}
                        onClick={() => action.onClick(user)}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1'
                      >
                        {action.name}
                      </button>
                    ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className='flex justify-end py-4'>
          <button
            onClick={() => handlePagination(Math.max(1, currentPage - 1))}
            className='mx-1 px-3 py-1 border'
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, num) => (
            <button
              key={num + 1}
              onClick={() => handlePagination(num + 1)}
              className={`mx-1 px-3 py-1 border ${
                currentPage === num + 1 ? 'bg-gray-200' : ''
              }`}
            >
              {num + 1}
            </button>
          ))}
          <button
            onClick={() =>
              handlePagination(Math.min(totalPages, currentPage + 1))
            }
            className='mx-1 px-3 py-1 border'
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizerEventList;
