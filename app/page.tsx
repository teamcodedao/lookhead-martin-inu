import clsx from 'clsx';

import HeaderBanner from './header-banner';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <HeaderBanner />
      <div className='mt-10 px-5 text-center text-3xl lg:text-4xl font-bold uppercase lg:px-10'>
        CA:{' '}
        <span className='break-all'>
          {process.env.NEXT_PUBLIC_COIN_ADDRESS}
        </span>
      </div>

      <div className='mx-auto mt-10 max-w-screen-desktop px-5 desktop:px-0'>
        <div className='flex'>
          <div className='flex shrink-0 flex-1 overflow-hidden'>
            <div className='flex min-h-full grow flex-col gap-3'>
              <h2
                className={clsx(
                  'shrink-0 font-bold uppercase whitespace-nowrap',
                  'text-5xl lg:text-6xl xl:text-8xl'
                )}
              >
                About {'>>>'}
              </h2>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload='auto'
                className='w-full grow object-cover'
              >
                <source src='/intro-2.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='hidden sm:block relative shrink-0 h-full px-10 lg:px-12 xl:px-16'>
              <div className='absolute text-center -space-y-4 lg:-space-y-6 xl:-space-y-8 inset-0'>
                {Array.from({length: 40}).map((_, index) => (
                  <span
                    key={index}
                    className={clsx(
                      'block rotate-90 font-bold',
                      'text-6xl lg:text-7xl xl:text-8xl'
                    )}
                  >
                    {'>'}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='max-[500px]:hidden min-h-full flex-1 flex flex-col *:multi-[`flex-1;w-full;object-cover`]'>
            <video autoPlay muted loop playsInline preload='auto'>
              <source src='/intro-3.mp4' type='video/mp4' />
            </video>
            <video autoPlay muted loop playsInline preload='auto'>
              <source src='/intro-4.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}
