import Image from 'next/image';
import '@/app/ui/non-global-styles/nav.css';

export const Navigation = () => {
  return (
    <div className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 text-white border-b border-gray-700 text-sm py-2.5 sm:py-4 '>
      <nav
        className='max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:py-6 lg:px-8'
        aria-label='Global'
      >
        <div className='me-5 md:me-8 justify-start'>
          <a
            className='flex items-center text-lg font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 flex-row'
            href='/'
          >
            <Image
              width='48'
              height='48'
              src='https://img.icons8.com/fluency/48/cloud-akatsuki.png'
              alt='cloud-akatsuki'
            />
            <p className='pl-8'>What's New Otaku?</p>
          </a>
        </div>
      </nav>
    </div>
  );
};

//<a target="_blank" href="https://icons8.com/icon/sISz0Ufs0rul/cloud-akatsuki">Cloud Akatsuki</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
