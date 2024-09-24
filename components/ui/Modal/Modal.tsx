'use client';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

import CloseIcon from '@/public/icons/close-x.svg';

import { IModal } from './type';

import css from './Modal.module.css';

export const Modal = ({ open, onClose }: IModal) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-40">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 
        data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center text-center">
          <DialogPanel
            transition
            className="relative w-full transform overflow-hidden bg-white shadow-xl max-w-[414px] transition-all 
            md:max-w-[712px]"
          >
            <div className="relative bg-white px-[15px] py-[60px] md:p-[60px]">
              <button
                type="button"
                className={`absolute top-[16px] right-[16px] w-[24px] h-[24px] ${css['button']}`}
                onClick={() => onClose()}
              >
                <CloseIcon className={css['close-icon']} />
              </button>
              text
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
