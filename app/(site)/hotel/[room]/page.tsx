import { RoomSlider } from '@/components/common/RoomSlider';
import roomData from '@/data/room.json';
import { RoomSection } from '@/sections/RoomSections';

interface Props {
  params: {
    room: string;
  };
}

export default function Page({ params }: Props) {
  const data = roomData.room.find(item => item.name === params.room);
  // console.log(data);

  if (!data) {
    return <div>Room not found</div>;
  }
  return (
    <>
      <div className="max-w-full mx-auto mt-[-64px]">
        <RoomSlider data={data.slider} classnameProps="relative" />
      </div>
      <RoomSection room={data} />
    </>
  );
}
