'use client';

import React from 'react';
import { useState } from 'react';

import { Btn } from '@/components/common/Btn';
import { Modal } from '@/components/ui/Modal';
import { Form } from '@/components/common/Form';

import roomData from '@/data/room.json';

import LeftArrowIcon from '@/public/icons/arrow-right.svg';

import { IRoomSection } from './type';

import css from './RoomSection.module.css';

export const RoomSection = ({ room }: IRoomSection) => {
  //   console.log(room);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { desc } = room;

  return (
    <section className="bg-lemonBg py-[32px] md:py-[48px]">
      <div className="container">
        <h2 className="mb-[16px] font-times text-[32px] font-400">{desc.amenities.name}</h2>
        <p className="roomDescText">{desc.title}</p>

        <h3 className="mt-[32px] mb-[16px] font-times font-700 text-[24px]">{desc.general.name}</h3>
        <p className="roomDescText">{desc.general.text}</p>

        <h3 className="mt-[32px] mb-[16px] font-times font-700 text-[24px]">
          {desc.bathroom.name}
        </h3>
        <p className="roomDescText">{desc.bathroom.text}</p>

        <h3 className="mt-[32px] mb-[16px] font-times font-700 text-[24px]">{desc.bedroom.name}</h3>
        <p className="roomDescText">{desc.bedroom.text}</p>

        <h3 className="mt-[32px] mb-[16px] font-times font-700 text-[24px]">{desc.kitchen.name}</h3>
        <p className="roomDescText">{desc.kitchen.text}</p>

        <h3 className="mt-[32px] mb-[16px] font-times font-700 text-[24px]">{desc.media.name}</h3>
        <p className="roomDescText">{desc.media.text}</p>

        <Btn
          type="button"
          isBtn
          classnameProps="mt-[32px] py-[20px] bg-black w-full text-white text-[20px] transition-color
          hover:text-black focus:text-black hover:bg-accentYellow01 focus:bg-accentYellow01
          md:w-[434px] md:ml-auto md:mt-[40px]"
          onClick={() => handleToggleModal()}
        >
          {roomData.reserve}
        </Btn>

        <Btn
          isLink
          linkTo={roomData.goBack.link}
          classnameProps={`${css['btn']} flex justify-between items-center mt-[20px] px-[16px] py-0 font-mont 
          text-accentYellow02 w-full text-[16px] tracking-[0.32px] bg-lemonBg border-0
          hover:text-accentYellow01 focus:text-accentYellow01 hover:bg-lemonBg focus:bg-lemonBg hover:border-transparent focus:border-transparent
          md:w-[434px] md:ml-auto md:mt-[32px]`}
        >
          {roomData.goBack.name}
          <LeftArrowIcon className={`${css['icon']} h-[24px] w-[24px]`} />
        </Btn>
      </div>

      <Modal open={isModalOpen} onClose={handleToggleModal}>
        <Form formTypeName="room" onClose={handleToggleModal} />
      </Modal>
    </section>
  );
};
