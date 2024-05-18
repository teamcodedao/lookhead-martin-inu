'use client';

import Image from 'next/image';

import logo from './logo.png';

export default function HeaderBanner() {
  return (
    <>
      <header className='relative'>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          className='max-h-screen w-full object-cover'
        >
          <source src='/intro-1.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 px-5 pt-10 sm:px-10 lg:pt-20'>
          <Image
            src={logo}
            priority
            quality={100}
            alt=''
            className='mx-auto block'
          />
        </div>
      </header>
    </>
  );
}
