import Image from 'next/image';

import flagImg from './flag.png';
import flagGif from './flag-1.gif';
import maga1Img from './maga-1.gif';
import maga2Img from './maga-2.png';
import magaBg from './maga-3.png';
import maga4Img from './maga-4.gif';
import maga5Img from './maga-5.gif';
import maga6Img from './maga-6.gif';

export default function Home() {
  return (
    <main className='min-h-screen text-white'>
      <div className='relative overflow-hidden bg-[url(./flag.png)] bg-cover'>
        <Image
          src={flagGif}
          priority
          quality={100}
          alt=''
          unoptimized
          className='min-h-[600px] w-[128%] max-w-none object-cover object-top sm:min-h-[700px] md:min-h-[800px]'
        />
        <div className='absolute inset-0'>
          <Image
            src={maga2Img}
            priority
            quality={100}
            alt=''
            className='absolute bottom-0 left-1/2 min-w-[630px] -translate-x-1/2 object-contain lg:max-h-[90%]'
          />
          <div className='absolute bottom-0 flex w-full justify-between'>
            <Image
              src={maga1Img}
              unoptimized
              alt=''
              className='-mb-44 -ml-40 min-w-[530px] max-w-[60%] object-contain max-sm:invisible xl:-ml-52'
            />
            <Image
              src={maga4Img}
              unoptimized
              alt=''
              className='max-w-[50%] shrink-0 object-contain'
            />
          </div>
          <div className='absolute bottom-0 flex w-full justify-center'>
            <div className='mb-0 sm:mb-2 lg:mb-3 xl:mb-5'>
              <h2 className='flex items-center justify-center gap-x-3 lg:gap-x-5'>
                <Image
                  src={flagImg}
                  alt=''
                  width={60}
                  className='w-[40px] lg:w-[50px] xl:w-[60px]'
                />
                <span className='text-3xl lg:text-4xl xl:text-[42px]'>
                  Tokenomics
                </span>
                <Image
                  src={flagImg}
                  alt=''
                  width={60}
                  className='w-[40px] lg:w-[50px] xl:w-[60px]'
                />
              </h2>
              <div className='mt-1 space-y-1.5 text-center text-2xl lg:mt-3 lg:text-3xl xl:text-4xl'>
                <p>supply: 100.000.000</p>
                <p>tax: 0% - liquidity locked</p>
              </div>
            </div>
          </div>
          <div className='relative z-10 mx-auto max-w-screen-desktop max-desktop:px-5'>
            <h1 className='mt-10 text-balance text-center font-single-day text-6xl font-medium sm:mt-14 sm:text-right sm:text-5xl md:mt-20 lg:mt-36 lg:px-5 lg:text-[64px]'>
              Make America great again
            </h1>
          </div>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={magaBg}
          priority
          quality={100}
          alt=''
          className='min-h-[500px] w-full object-cover object-bottom'
        />
        <div className='absolute inset-0'>
          <div className='relative mx-auto h-full max-w-screen-desktop max-desktop:px-5'>
            <div className='ml-2 max-w-[30%] pt-14'>
              <Image
                src={maga5Img}
                alt=''
                width={482}
                unoptimized
                className='w-[482px]'
              />
            </div>
            <div className='-mt-10 mr-4 flex justify-end lg:-mt-20 xl:-mt-36'>
              <div className='max-w-[30%]'>
                <Image
                  src={maga6Img}
                  alt=''
                  width={392}
                  unoptimized
                  className='w-[392px]'
                />
              </div>
            </div>
            <div className='absolute bottom-5 left-5 flex gap-x-8 *:multi-["transition;duration-300;block"] sm:bottom-10 [&_*:hover]:multi-["rotate-180"]'>
              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
                target='_telegram'
                aria-label='telegram'
              >
                <img
                  src='/telegram.png'
                  alt=''
                  className='size-[60px] lg:size-[80px]'
                />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_TWITTER_URL}
                target='_twitter'
                aria-label='twitter'
              >
                <img
                  src='/twitter.svg'
                  alt=''
                  className='size-[60px] lg:size-[80px]'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
