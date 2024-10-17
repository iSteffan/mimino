export interface IForm {
  formTypeName: 'table' | 'room' | 'roomPrice';
  setFormTypeName: (type: 'table' | 'room' | 'roomPrice') => void;
  roomType?: string;
  onClose: () => void;
}
