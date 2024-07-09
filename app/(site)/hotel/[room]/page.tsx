import { RoomSlider } from '@/components/common/RoomSlider';
import roomData from '@/data/room.json';

interface Props {
  params: {
    room: string;
  };
}

export default function Page({ params }: Props) {
  const data = roomData.room.find(item => item.name === params.room);
  // console.log(data);

  return (
    <div>
      room page
      <div>
        <RoomSlider data={data.slider} />
      </div>
    </div>
  );
}
