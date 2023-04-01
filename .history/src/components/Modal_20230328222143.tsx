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
            <div className='bg-light w-60 h-96'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
