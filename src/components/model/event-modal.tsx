import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type EventModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

//Name, hall details, price, date, organizer name
type EventType = {
  name: string;
  ticketPrice: any[];
  hallName: string;
  startDate: Date;
  endDate: Date;
  organizerId: number;
};

const EventForm = {};
export default function EventModal({ open, setOpen }: EventModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventType>({
    defaultValues: EventForm,
  });
  function handleModelChange(status: boolean) {
    setOpen(status);
  }

  const handleAddEvent = (data: EventType) => {
    console.log('data', data);
  };

  return (
    <Dialog open={open} onOpenChange={handleModelChange}>
      <DialogContent
      // className='sm:max-w-[425px]'
      >
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
          <form onSubmit={handleSubmit(handleAddEvent)}>
            <div>
              <label>Name</label>
              <input {...register('name')} className='text-white' />
            </div>
            <div>
              <label>HallName</label>
              <input {...register('hallName')} className='text-white' />
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <label>Tickets</label>
                <button className='bg-fuchsia-500 rounded-md p-2 text-white'>
                  Add
                </button>
              </div>
              <div className='flex justify-between'>
                <input {...register('ticketPrice')} className='text-white' />
                <input type='color' />
              </div>
            </div>
            <button type='submit'></button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
