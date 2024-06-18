import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { CircleX, CirclePlus } from 'lucide-react';

type EventModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type TicketType = {
  from: string;
  to: string;
  color: string;
};

type EventType = {
  organizerId: number;
  name: string;
  hallName: string;
  ticketPrice: TicketType[];
  startDate: Date;
  endDate: Date;
  banner: any;
  stampPaper: any;
  seatLayout: any;
};

const EventForm = {};
export default function EventModal({ open, setOpen }: EventModalProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EventType>({
    defaultValues: {
      ...EventForm,
      ticketPrice: [{ from: '', to: '', color: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ticketPrice',
  });

  function handleModelChange(status: boolean) {
    setOpen(status);
  }

  const handleAddEvent = (data: EventType) => {
    console.log('data', data);
  };

  return (
    <Dialog open={open} onOpenChange={handleModelChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
          <form onSubmit={handleSubmit(handleAddEvent)} className='grid gap-3'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4'>
              <div className='flex flex-col'>
                <label>Name</label>
                <input
                  {...register('name')}
                  className='border-2 bg-white p-2 rounded-md'
                />
              </div>
              <div className='flex flex-col'>
                <label>Hall Name</label>
                <input
                  {...register('hallName')}
                  className='border-2 bg-white p-2 rounded-md'
                />
              </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4'>
              <div className='flex flex-col'>
                <label>Start Date</label>
                <input
                  {...register('startDate')}
                  type='datetime-local'
                  className='border-2 bg-white p-2 rounded-md'
                />
              </div>
              <div className='flex flex-col'>
                <label>End Date</label>
                <input
                  {...register('endDate')}
                  type='datetime-local'
                  className='border-2 bg-white p-2 rounded-md'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between items-center py-2'>
                <label>Tickets</label>
                <CirclePlus
                  className='cursor-pointer'
                  onClick={() => append({ from: '', to: '', color: '' })}
                />
              </div>
              {fields.map((item, index) => (
                <div
                  key={item.id}
                  className='grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4'
                >
                  <div className='flex flex-col'>
                    <label>From</label>
                    <input
                      {...register(`ticketPrice.${index}.from` as const)}
                      className='border-2 bg-white p-2 rounded-md uppercase'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>To</label>
                    <input
                      {...register(`ticketPrice.${index}.to` as const)}
                      className='border-2 bg-white p-2 rounded-md uppercase'
                    />
                  </div>
                  <div className='flex flex-col justify-end'>
                    <label>Color</label>
                    <input
                      type='color'
                      {...register(`ticketPrice.${index}.color` as const)}
                      className='w-full h-10 p-0 m-0'
                    />
                  </div>
                  <CircleX
                    className='m-auto cursor-pointer mt-8'
                    onClick={() => remove(index)}
                  />
                </div>
              ))}
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col items-start space-y-2'>
                <div className='relative'>
                  <Label htmlFor='picture'>Banner</Label>
                  <Input id='picture' type='file' {...register('banner')} />
                </div>
              </div>
              <div className='flex flex-col items-start space-y-2'>
                <div className='relative'>
                  <Label htmlFor='picture'>Stamp Paper</Label>
                  <Input id='picture' type='file' {...register('stampPaper')} />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col items-start space-y-2'>
                <div className='relative'>
                  <Label htmlFor='picture'>Seat Layout</Label>
                  <Input id='picture' type='file' {...register('seatLayout')} />
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white p-2 rounded-md mt-4'
            >
              Submit
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
