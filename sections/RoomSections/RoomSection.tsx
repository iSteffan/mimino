import React from 'react';

import { Btn } from '@/components/common/Btn';

import roomData from '@/data/room.json';

import { IRoomSection } from './type';

export const RoomSection = ({ room }: IRoomSection) => {
  //   console.log(room);

  const { desc } = room;

  return (
    <section className="bg-lemonBg py-[32px]">
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

        <Btn type="button" isBtn classnameProps="mt-[32px] py-[20px] bg-black w-full text-[20px]">
          {roomData.reserve}
        </Btn>

        <Btn
          isLink
          linkTo={roomData.goBack.link}
          classnameProps="mt-[20px] w-full bg-none border-white hover:border-white"
        >
          {roomData.goBack.name}
        </Btn>
      </div>
    </section>
  );
};
