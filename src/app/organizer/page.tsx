'use client';
import React, { useState } from 'react';
import EventModal from '@/components/model/event-modal';

interface User {
  id: number;
  name: string;
  email: string;
}

const Organizer = () => {
  // const actions = [
  //   {
  //     name: 'Edit',
  //     onClick: (user: User) => alert(`Editing user ${user.name}`),
  //   },
  //   {
  //     name: 'Delete',
  //     onClick: (user: User) => alert(`Deleting user ${user.name}`),
  //   },
  // ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='container mx-auto p-4'>
        <div className=' te'>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-bold'>Events</h1>
            <button
              className='bg-gray-500 rounded-md p-2 text-white'
              onClick={() => setOpen(true)}
            >
              Add Event
            </button>
          </div>
          {/* <UserList
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
        /> */}
        </div>
      </div>
      <EventModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Organizer;
