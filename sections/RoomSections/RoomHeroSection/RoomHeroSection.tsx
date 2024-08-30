import { RoomSlider } from '@/components/common/RoomSlider';
import { Btn } from '@/components/common/Btn';

import roomData from '@/data/room.json';

import { IRoomHero } from './type';

export const RoomHeroSection = ({ sliderData }: IRoomHero) => {
  return (
    <div className="max-w-full mx-auto mt-[-64px]">
      <RoomSlider data={sliderData} classnameProps="relative" />
      <Btn isBtn type="button">
        {roomData.checkPrice}
      </Btn>
    </div>
  );
};
