import React from 'react';
import { IRoomSection } from './type';

export const RoomSection = ({ room }: IRoomSection) => {
  //   console.log(room);

  const { desc } = room;

  return (
    <section className="bg-lemonBg py-[32px]">
      <div className="container">
        <h2 className="mb-[16px] font-times text-[32px] font-400">{desc.amenities.name}</h2>
        <p className="font-mont font-700 text-[16px] tracking-[0.32px] text-[#7a7a7a]">
          {desc.title}
        </p>
      </div>
    </section>
  );
};
