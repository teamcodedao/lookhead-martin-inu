import Image from 'next/image';

import HeaderBanner from './header-banner';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <HeaderBanner />
    </main>
  );
}
