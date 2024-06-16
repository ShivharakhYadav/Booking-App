'use client';
import EventList from './event-list';

interface User {
  id: number;
  name: string;
  email: string;
}

const Events = () => {
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
        <h1 className='text-2xl font-bold py-2'>Events</h1>
        <EventList
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
export default Events;

// import { Payment, columns } from './columns';
// import { DataTable } from './data-table';

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     {
//       id: '728ed5223f',
//       amount: 101,
//       status: 'pending',
//       email: 'Azueere.com',
//     },
//     {
//       id: '728ed5232f',
//       amount: 101,
//       status: 'pending',
//       email: 'z@mail.com',
//     }, // ...
//   ];
// }

// const Events = async () => {
//   let data1 = [
//     {
//       name: 'Event 1',
//       hall: 'hall 1',
//       price: 100,
//       date: '17-06-2024',
//       status: 'upcoming',
//     },
//     {
//       name: 'Event 2',
//       hall: 'hall  2',
//       price: 100,
//       date: '14-06-2024',
//       status: 'completed',
//     },

//     {
//       name: 'Event 3',
//       hall: 'hall  3',
//       price: 100,
//       date: '20-06-2024',
//       status: 'upcoming',
//     },
//   ];
//   const data = await getData();
//   return (
//     <main>
//       <div className='container mx-auto py-2'>
//         <DataTable columns={columns} data={data} />
//       </div>
//       {/* <table>
//         <thead>
//           <tr className='border-b border-gray-200'>
//             <th>Name</th>
//             <th>Hall</th>
//             <th>price</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((event, index) => (
//             <tr
//               key={index}
//               className={`${
//                 index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
//               } border-b border-gray-200`}
//             >
//               <td className='text-left py-2 px-4'>{event.name}</td>
//               <td className='text-left py-2 px-4'>{event.hall}</td>
//               <td className='text-left py-2 px-4'>{event.price}</td>
//               <td className='text-left py-2 px-4'>{event.date}</td>
//               <td className='text-left py-2 px-4'>{event.status}</td>
//               <td className='bg-red-500'>
//                 <button>Approve</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
//     </main>
//   );
// };
// export default Events;
