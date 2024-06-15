'use client';
import UserList from './user-list';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchInitialData = async () => {
  // try {
  const res = await fetch('http://localhost:3000/api/users?page=1&limit=5');
  // const data = await res.json();
  const data = {
    users: [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' },
      { id: 4, name: 'David', email: 'david@example.com' },
      { id: 5, name: 'Eva', email: 'eva@example.com' },
      { id: 6, name: 'Frank', email: 'frank@example.com' },
      { id: 7, name: 'Grace', email: 'grace@example.com' },
      { id: 8, name: 'Henry', email: 'henry@example.com' },
      { id: 9, name: 'Isabel', email: 'isabel@example.com' },
      { id: 10, name: 'Jack', email: 'jack@example.com' },
      // Add more users as needed
    ],
    totalUsers: 10,
  };
  return data;
  // } catch (error) {
  //   return null;
  // }
};

const Home = async () => {
  // const { users: initialUsers, totalUsers } = await fetchInitialData();

  const actions = [
    {
      name: 'Edit',
      onClick: (user: User) => alert(`Editing user ${user.name}`),
    },
    {
      name: 'Delete',
      onClick: (user: User) => alert(`Deleting user ${user.name}`),
    },
  ];

  return (
    <div className='container mx-auto p-4'>
      <div className=' te'>
        <h1 className='text-2xl font-bold py-2'>User List</h1>
        <UserList
          initialUsers={[
            {
              id: 1,
              name: 'Alice',
              email: 'alice@example.com',
              emailTest: 'alice@example.com',
            },
            {
              id: 2,
              name: 'Bob',
              email: 'bob@example.com',
              emailTest: 'alice@example.com',
            },
            {
              id: 3,
              name: 'Charlie',
              email: 'charlie@example.com',
              emailTest: 'alice@example.com',
            },
            {
              id: 4,
              name: 'David',
              email: 'david@example.com',
              emailTest: 'alice@example.com',
            },
            {
              id: 5,
              name: 'Eva',
              email: 'eva@example.com',
              emailTest: 'alice@example.com',
            },
            {
              id: 6,
              name: 'Frank',
              email: 'frank@example.com',
              emailTest: 'alice@example.com',
            },
            {
              id: 7,
              name: 'Grace',
              email: 'grace@example.com',
              emailTest: 'alice@example.com',
            },
            {
              id: 8,
              name: 'Henry',
              email: 'henry@example.com',
              emailTest: 'alice@example.com',
            },
            {
              id: 9,
              name: 'Isabel',
              email: 'isabel@example.com',
              emailTest: 'alice@example.com',
            },
            {
              id: 10,
              name: 'Jack',
              email: 'jack@example.com',
              emailTest: 'alice@example.com',
            },
            // Add more users as needed
          ]}
          totalUsers={10}
          actions={actions}
          initialPage={1}
          itemsPerPage={5}
        />
      </div>
    </div>
  );
};

export default Home;

// import UserList from './user-list';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// interface HomeProps {
//   initialUsers: User[];
//   totalUsers: number;
// }

// const Home: React.FC<HomeProps> = ({ initialUsers, totalUsers }) => {
//   const actions = [
//     {
//       name: 'Edit',
//       onClick: (user: User) => alert(`Editing user ${user.name}`),
//     },
//     {
//       name: 'Delete',
//       onClick: (user: User) => alert(`Deleting user ${user.name}`),
//     },
//   ];

//   return (
//     <div className='container mx-auto'>
//       <h1 className='text-2xl font-bold py-4'>User List</h1>
//       <UserList
//         initialUsers={initialUsers}
//         totalUsers={totalUsers}
//         actions={actions}
//         initialPage={1}
//         itemsPerPage={5}
//       />
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/users?page=1&limit=5');
//   const { users, totalUsers } = await res.json();
//   return {
//     props: {
//       initialUsers: users,
//       totalUsers,
//     },
//   };
// }

// export default Home;
