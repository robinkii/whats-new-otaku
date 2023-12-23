import Image from 'next/image';
import '@/app/ui/non-global-styles/nav.css';
import logo from '@/app/ui/assets/icons/cloud-akatsuki/icons8-cloud-akatsuki-windows-11-color-32.png';
import { CiSearch } from 'react-icons/ci';

export const Navigation = () => {
  return (
    <div className='flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:text-darkText dark:bg-darkPrimary'>
      <nav
        className='max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8'
        aria-label='Global'
      >
        <div className='relative md:flex md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <a
              className='flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href='#'
              aria-label='Brand'
            >
              Brand
            </a>
            <div className='md:hidden'>
              <button
                type='button'
                className='hs-collapse-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                data-hs-collapse='#navbar-collapse-with-animation'
                aria-controls='navbar-collapse-with-animation'
                aria-label='Toggle navigation'
              >
                <svg
                  className='hs-collapse-open:hidden flex-shrink-0 w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='3' x2='21' y1='6' y2='6' />
                  <line x1='3' x2='21' y1='12' y2='12' />
                  <line x1='3' x2='21' y1='18' y2='18' />
                </svg>
                <svg
                  className='hs-collapse-open:block hidden flex-shrink-0 w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 6 6 18' />
                  <path d='m6 6 12 12' />
                </svg>
              </button>
            </div>
          </div>
          <div
            id='navbar-collapse-with-animation'
            className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block'
          >
            <div className='overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500'>
              <div className='flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700'>
                <a
                  className='font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='#'
                  aria-current='page'
                >
                  Landing
                </a>

                <div className='hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6'>
                  <button
                    type='button'
                    className='flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  >
                    Company
                    <svg
                      className='flex-shrink-0 ms-2 w-2.5 h-2.5'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      ></path>
                    </svg>
                  </button>
                  <div className='hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-gray-800 dark:divide-gray-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5'>
                    <a
                      className='inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                      href='#'
                    >
                      <svg
                        className='flex-shrink-0 w-5 h-5 mt-1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <line x1='22' x2='2' y1='12' y2='12' />
                        <path d='M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
                        <line x1='6' x2='6.01' y1='16' y2='16' />
                        <line x1='10' x2='10.01' y1='16' y2='16' />
                      </svg>
                      <div className='grow'>
                        <span className='block font-semibold mb-1 text-gray-800 dark:text-gray-200'>
                          Data
                        </span>
                        How you get the most accurate and up-to-date data
                      </div>
                    </a>

                    <div className='my-2 border-t border-gray-100 dark:border-gray-800'></div>

                    <a
                      className='inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                      href='#'
                    >
                      <svg
                        className='flex-shrink-0 w-5 h-5 mt-1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                        <circle cx='9' cy='7' r='4' />
                        <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                        <path d='M16 3.13a4 4 0 0 1 0 7.75' />
                      </svg>
                      <div className='grow'>
                        <span className='block font-semibold mb-1 text-gray-800 dark:text-gray-200'>
                          Team{' '}
                          <span className='inline ms-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full'>
                            We're hiring
                          </span>
                        </span>
                        Meet the people building products to help your business
                        grow
                      </div>
                    </a>

                    <div className='my-2 border-t border-gray-100 dark:border-gray-800'></div>

                    <a
                      className='inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                      href='#'
                    >
                      <svg
                        className='flex-shrink-0 w-5 h-5 mt-1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2' />
                        <path d='M18 14h-8' />
                        <path d='M15 18h-5' />
                        <path d='M10 6h8v4h-8V6Z' />
                      </svg>
                      <div className='grow'>
                        <span className='block font-semibold mb-1 text-gray-800 dark:text-gray-200'>
                          Blog
                        </span>
                        The latest news, feature releases, and how to grow with
                        data
                      </div>
                    </a>
                  </div>
                </div>

                <a
                  className='font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='#'
                >
                  Resources
                </a>

                <a
                  className='font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='#'
                >
                  Join us{' '}
                  <span className='py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600'>
                    4
                  </span>
                </a>

                <div className='pt-3 md:pt-0'>
                  <a
                    className='py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    Request demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

//<a target="_blank" href="https://icons8.com/icon/sISz0Ufs0rul/cloud-akatsuki">Cloud Akatsuki</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
