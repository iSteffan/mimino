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
    <div>
      room page
      <div>
        <RoomSlider data={data.slider} />
      </div>
      <RoomSection room={data} />
    </div>
  );
}
