import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type EventModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EventModal({ open, setOpen }: EventModalProps) {
  function handleModelChange(status: boolean) {
    setOpen(status);
  }

  return (
    <Dialog open={open} onOpenChange={handleModelChange}>
      <DialogContent
      // className='sm:max-w-[425px]'
      >
        <DialogHeader>
          <DialogTitle>{'Add'} Student</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
