import { Metadata } from 'next';

import { RoomSection } from '@/sections/RoomSections';
import { RoomHeroSection } from '@/sections/RoomSections/RoomHeroSection';

import { pageMetadata } from '@/utils/pageMetadata';

import roomData from '@/data/room.json';

interface Props {
  params: {
    room: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = params.room;
  return pageMetadata(page);
}

export default function Page({ params }: Props) {
  const data = roomData.room.find(item => item.name === params.room);
  // console.log(data);

  if (!data) {
    return <div>Room not found</div>;
  }
  return (
    <>
      <RoomHeroSection room={data} />
      <RoomSection room={data} />
    </>
  );
}
