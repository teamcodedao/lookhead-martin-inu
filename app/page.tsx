import clsx from 'clsx';

import HeaderBanner from './header-banner';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <HeaderBanner />
      <div className='mt-10 px-5 text-center text-3xl font-bold uppercase lg:px-10 lg:text-4xl'>
        CA:{' '}
        <span className='break-all'>
          {process.env.NEXT_PUBLIC_COIN_ADDRESS}
        </span>
      </div>

      <div className='mx-auto mt-10 max-w-screen-desktop px-5 desktop:px-0'>
        <div className='flex'>
          <div className='flex flex-[0_0_100%] overflow-hidden min-[500px]:basis-1/2'>
            <div className='flex min-h-full grow flex-col gap-3 overflow-hidden'>
              <h2
                className={clsx(
                  'shrink-0 whitespace-nowrap font-bold uppercase',
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
                className='max-h-screen w-full grow object-cover'
              >
                <source src='/intro-2.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='relative hidden h-full shrink-0 px-10 sm:block lg:px-12 xl:px-16'>
              <div className='absolute inset-0 -space-y-4 text-center lg:-space-y-6 xl:-space-y-8'>
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
          <div className='flex min-h-full grow flex-col overflow-hidden *:multi-[`flex-1;w-full;object-cover`] max-[500px]:hidden'>
            <video autoPlay muted loop playsInline preload='auto'>
              <source src='/intro-3.mp4' type='video/mp4' />
            </video>
            <video autoPlay muted loop playsInline preload='auto'>
              <source src='/intro-4.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>

      <div className='overflow-hidden py-3 text-center text-7xl font-bold sm:py-6 lg:py-8 lg:text-8xl'>
        {Array.from({length: 100}).map((_, index) => (
          <span key={index}>{'>'}</span>
        ))}
      </div>
    </main>
  );
}
