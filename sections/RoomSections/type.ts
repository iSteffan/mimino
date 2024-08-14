export interface RoomDescription {
  name: string;
  text: string;
}

export interface RoomData {
  name: string;
  title: string;
  desc: {
    title: string;
    amenities: RoomDescription;
    general: RoomDescription;
    bedroom: RoomDescription;
    bathroom: RoomDescription;
    kitchen: RoomDescription;
    media: RoomDescription;
  };
  slider: {
    img: string;
    alt: string;
  }[];
}

export interface IRoomSection {
  room: RoomData;
}
