type SliderData = Record<string, any>;

export interface ISlider {
  data: SliderData[];
  section: 'mainRestaurant' | 'mainHotel';
  className?: string;
}
