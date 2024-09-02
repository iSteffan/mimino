import { RoomSlider } from '@/components/common/RoomSlider';
import { Btn } from '@/components/common/Btn';
import { ContactAddress } from '@/components/common/ContactAddress';
import { Socials } from '@/components/common/Socials';

import roomData from '@/data/room.json';

import { IRoomHero } from './type';

export const RoomHeroSection = ({ sliderData }: IRoomHero) => {
  return (
    <div className="max-w-full mx-auto mt-[-64px]">
      <RoomSlider data={sliderData} classnameProps="relative" />
      <div className="container">
        <Btn isBtn type="button">
          {roomData.checkPrice}
        </Btn>
        <ContactAddress
          isHero
          // classnameProps="absolute top-[64px] right-0 z-20 flex md:relative md:h-[56px] md:top-0"
          classnameProps="ml-auto flex md:relative md:h-[56px] md:top-0"
        />
        <Socials classnameProps="flex-col gap-[8px]" />
      </div>
    </div>
  );
};
