import React from "react";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          aria-hidden='true'
        >
          <div className='absolute inset-0 flex items-center justify-center'>
            <svg
              className='h-5 w-5 text-gray-400 animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                stroke-width='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8v8z'
              ></path>
            </svg>

            <svg
              className='h-5 w-5 text-gray-400 animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle

                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                stroke-width='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8v8z'
              ></path>
            </svg>

            

          
        </div>
      </div>
    </div>
  );
};

export default Modal;
