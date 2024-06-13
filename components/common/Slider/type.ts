type SliderData = Record<string, any>;

export interface ISlider {
  data: SliderData[];
  section: 'mainRestaurant' | 'mainHotel' | 'mainComplex' | 'mainApartment' | 'restaurant';
  classnameProps?: string;
}
