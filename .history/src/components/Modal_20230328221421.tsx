import React from "react";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
