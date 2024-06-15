'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

interface UserListProps {
  initialUsers: User[];
  totalUsers: number;
  actions: Action[];
  initialPage: number;
  itemsPerPage: number;
}

const UserList: React.FC<UserListProps> = ({
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
      {/* <div className='flex justify-between items-center py-2'>
        <input
          type='text'
          placeholder='Filter users...'
          value={filter}
          onChange={handleFilter}
          className='border px-4 py-2'
        />
      </div> */}

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
        <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
          <div className='flex flex-1 justify-between sm:hidden'>
            <a
              href='#'
              className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
            >
              Previous
            </a>
            <a
              href='#'
              className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
            >
              Next
            </a>
          </div>
          <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm text-gray-700'>
                Showing <span className='font-medium'>1</span> to{' '}
                <span className='font-medium'>10</span> of{' '}
                <span className='font-medium'>97</span> results
              </p>
            </div>
            <div>
              <nav
                className='isolate inline-flex -space-x-px rounded-md shadow-sm'
                aria-label='Pagination'
              >
                <a
                  href='#'
                  className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                >
                  <span className='sr-only'>Previous</span>
                  <ChevronLeft />
                  {/* <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' /> */}
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  href='#'
                  aria-current='page'
                  className='relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  1
                </a>
                <a
                  href='#'
                  className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                >
                  2
                </a>
                <a
                  href='#'
                  className='relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
                >
                  3
                </a>
                <span className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>
                  ...
                </span>
                <a
                  href='#'
                  className='relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
                >
                  8
                </a>
                <a
                  href='#'
                  className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                >
                  9
                </a>
                <a
                  href='#'
                  className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                >
                  10
                </a>
                <a
                  href='#'
                  className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                >
                  <span className='sr-only'>Next</span>
                  <ChevronRight />
                  {/* <ChevronRightIcon className='h-5 w-5' aria-hidden='true' /> */}
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* <div className='flex justify-end py-4'>
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
        </div> */}
      </div>
    </div>
  );
};

export default UserList;
