import baseMeta from '@/data/meta/base.json';
import hotelMeta from '@/data/meta/hotel.json';
import tripleRoomMeta from '@/data/meta/tripleRoom.json';
import restaurantMeta from '@/data/meta/restaurant.json';
import doubleLuxRoomMeta from '@/data/meta/doubleLuxRoom.json';
import doubleRoomMeta from '@/data/meta/doubleRoom.json';

export const pageMetadata = (page: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL as string;
  const { title, description, keywords, openGraph } = baseMeta;

  const getMeta = () => {
    switch (page) {
      case 'hotel':
        return { data: hotelMeta, url: '/hotel' };
      case 'restaurant':
        return { data: restaurantMeta, url: '/restaurant' };
      case 'double-lux-room':
        return { data: doubleLuxRoomMeta, url: '/hotel/double-lux-room' };
      case 'double-room':
        return { data: doubleRoomMeta, url: '/double-room' };
      case 'triple-room':
        return { data: tripleRoomMeta, url: '/triple-room' };
      default:
        return { data: baseMeta, url: baseUrl };
    }
  };

  const metaData = getMeta();

  return {
    title: metaData?.data.title || title,
    description: metaData?.data.description || description,
    keywords: metaData?.data.keywords || keywords,
    alternates: {
      canonical: metaData.url || baseUrl,
    },
    openGraph: { ...openGraph, url: baseUrl },
    twitter: {
      title: metaData?.data.title || title,
      description: metaData?.data.description || description,
      keywords: metaData?.data.keywords || keywords,
    },
  };
};
