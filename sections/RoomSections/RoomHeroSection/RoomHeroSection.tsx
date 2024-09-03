import { RoomSlider } from '@/components/common/RoomSlider';
import { Btn } from '@/components/common/Btn';
import { ContactAddress } from '@/components/common/ContactAddress';
import { Socials } from '@/components/common/Socials';

import roomData from '@/data/room.json';

import { IRoomSection } from '../type';

export const RoomHeroSection = ({ room }: IRoomSection) => {
  return (
    <div className="max-w-full mx-auto mt-[-64px]">
      <RoomSlider data={room.slider} classnameProps="relative" />
      <div className="container absolute top-[64px] left-1/2 z-40 transform -translate-x-1/2 md:hidden">
        <ContactAddress isHero classnameProps="ml-auto flex md:relative md:h-[56px] md:top-0" />
      </div>

      <div className="container absolute top-[483px] left-1/2 z-40 transform -translate-x-1/2">
        <h2
          className="mb-[14px] text-white font-times text-[28px] font-700 tracking-[1.4px]
         md:text-[36px] md:tracking-[1.8px]"
        >
          {room.title}
        </h2>
        <p className="mb-[16px] text-white font-mont text-[12px] font-700 tracking-[0.24px] md:text-[16px] md:tracking-[0.32px]">
          {room.desc.title}
        </p>

        <div className="flex items-center">
          <ContactAddress
            isHero
            // classnameProps="absolute top-[64px] right-0 z-20 flex md:relative md:h-[56px] md:top-0"
            classnameProps="hidden flex md:visible md:relative md:h-[56px] md:top-0"
          />
          <Socials classnameProps="flex-col gap-[8px]" />
          <Btn
            isBtn
            type="button"
            classnameProps="h-[48px] py-[12px] ml-[109px] border-white rounded-[25px] border-[2px]"
          >
            {roomData.checkPrice}
          </Btn>
        </div>
      </div>
    </div>
  );
};
