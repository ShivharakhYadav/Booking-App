import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Booking App',
  description: 'Book Events for you Organization',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        {/* <div className='flex h-screen'>
          <aside className='w-64 bg-gray-800 text-white'>
            <nav className='p-4'>
              <ul>
                <li>
                  <Link href='/events'>
                    <h6 className='block py-2 px-4 hover:bg-gray-700'>
                      Events
                    </h6>
                  </Link>
                </li>
                <li>
                  <Link href='/organizer'>
                    <h6 className='block py-2 px-4 hover:bg-gray-700'>
                      Organizer
                    </h6>
                  </Link>
                </li>
                <li>
                  <Link href='/customer'>
                    <h6 className='block py-2 px-4 hover:bg-gray-700'>
                      Customer
                    </h6>
                  </Link>
                </li>

                <li>
                  <Link href='/payments'>
                    <h6 className='block py-2 px-4 hover:bg-gray-700'>
                      Payments
                    </h6>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <div className='flex-1 flex flex-col'>
            <header className='bg-gray-900 text-white p-2 p-x-8 flex justify-between items-center'>
              <div>Admin</div>

              <div className='cursor-pointer relative'>
                <div className='h-[50px] w-[50px] rounded-full bg-gray-500 flex items-center justify-center'>
                  TE
                </div>
                <div className='h-[10px] w-[10px] rounded-full bg-green-500 absolute right-0 bottom-1'></div>
              </div>
            </header>
            <main className='flex-1'>{children}</main>
          </div>
        </div> */}
      </body>
    </html>
  );
}
