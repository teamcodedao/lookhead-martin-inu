import Image from 'next/image';

import background from './background-2.png';

export default function Footer() {
  return (
    <footer className='relative'>
      <Image src={background} alt='' className='max-h-screen w-full' />
      <div className='absolute inset-0'>
        <div className='flex h-full items-center justify-center gap-x-10 py-0 sm:h-auto sm:gap-x-20 sm:py-20'>
          <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
            <img
              src='/telegram.svg'
              alt=''
              className='size-[100px] sm:size-[160px]'
            />
          </a>
          <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
            <img
              src='/twitter.svg'
              alt=''
              className='size-[100px] sm:size-[160px]'
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
