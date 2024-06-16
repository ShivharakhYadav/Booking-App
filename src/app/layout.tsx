import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['nextjs', 'react', 'react server components'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body>
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
