import Image from 'next/image';

import image1 from './image-1.png';
import image2 from './image-2.png';
import image3 from './image-3.png';
import image4 from './image-4.png';
import image5 from './image-5.png';
import image6 from './image-6.png';

export default function Home() {
  return (
    <main className='min-h-screen text-white'>
      <div className='relative'>
        <Image
          src={image1}
          quality={100}
          priority
          alt=''
          className='max-h-screen w-full object-cover object-top'
        />
        <div className='absolute inset-0'>
          <h1 className='mt-10 px-5 text-center text-5xl font-bold'>
            LockheedMartinInu
          </h1>
          <div className='absolute bottom-[-370px] flex w-full justify-center'>
            <Image
              src={image2}
              quality={100}
              width={1105}
              priority
              alt=''
              className='max-w-[90%]'
            />
          </div>
          <div className='absolute bottom-[-420px] left-1/2 flex w-full max-w-screen-desktop -translate-x-1/2 justify-between overflow-hidden sm:bottom-[-470px] md:bottom-[-540px]'>
            <Image
              src={image3}
              quality={100}
              width={509}
              priority
              alt=''
              className='max-w-[35%]'
            />
            <Image
              src={image4}
              quality={100}
              width={379}
              priority
              alt=''
              className='max-w-[30%]'
            />
          </div>
        </div>
      </div>

      <div>
        <Image
          src={image5}
          quality={100}
          priority
          alt=''
          className='max-h-screen w-full object-cover object-top'
        />
      </div>
      <div>
        <Image
          src={image6}
          quality={100}
          priority
          alt=''
          className='max-h-screen w-full object-cover object-top'
        />
      </div>
    </main>
  );
}
