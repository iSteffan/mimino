'use client';
import { useState } from 'react';

import { RoomSlider } from '@/components/common/RoomSlider';
import { Btn } from '@/components/common/Btn';
import { ContactAddress } from '@/components/common/ContactAddress';
import { Socials } from '@/components/common/Socials';
import { Modal } from '@/components/ui/Modal';

import roomData from '@/data/room.json';

import { IRoomSection } from '../type';
import { Form } from '@/components/common/Form';

export const RoomHeroSection = ({ room }: IRoomSection) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-full mx-auto mt-[-64px] md:mt-[-104px]">
      <RoomSlider data={room.slider} classnameProps="relative" />

      <div className="container absolute top-[64px] left-1/2 z-40 transform -translate-x-1/2 md:hidden">
        <ContactAddress isHero classnameDivProps="ml-auto flex md:relative md:h-[56px] md:top-0" />
      </div>

      <div className="container absolute top-[483px] leading-normal left-1/2 z-40 transform -translate-x-1/2 xl:top-[574px]">
        <h2
          className="mb-[14px] max-w-[345px] text-white font-times text-[28px] font-700 tracking-[1.4px] 
         md:text-[36px] md:max-w-[510px] md:tracking-[1.8px]"
        >
          {room.title}
        </h2>

        <div className="mb-[16px] w-full flex justify-between items-center xl:mb-0">
          <p
            className="max-w-[345px] text-white font-mont text-[12px] font-700 tracking-[0.24px] 
        md:text-[16px] md:max-w-[400px] md:tracking-[0.32px]"
          >
            {room.desc.title}
          </p>

          <Btn
            isBtn
            type="button"
            classnameProps="hidden h-[54px] py-[12px] ml-auto border-white rounded-[25px] border-[2px] 
            md:py-[14px] xl:block"
            onClick={() => handleToggleModal()}
          >
            {roomData.checkPrice}
          </Btn>
        </div>

        <div className="flex items-center max-w-[345px] md:max-w-full xl:hidden">
          <ContactAddress
            isRoomHero
            classnameDivProps="hidden md:block w-[285px]"
            classnameLinkProps="text-[16px] tracking-[0.16px] px-[8px]"
          />

          <Socials classnameProps="flex-col gap-[8px] md:flex-row md:gap-[12px] md:ml-[40px]" />

          <Btn
            isBtn
            type="button"
            classnameProps="h-[54px] py-[12px] ml-auto border-white rounded-[25px] border-[2px] md:py-[14px]"
            onClick={() => handleToggleModal()}
          >
            {roomData.checkPrice}
          </Btn>
        </div>

        <Modal open={isModalOpen} onClose={handleToggleModal}>
          <Form formType="roomPrice" roomType={room.name} />
        </Modal>
      </div>
    </div>
  );
};
