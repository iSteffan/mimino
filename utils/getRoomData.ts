export const getRoomData = (formTypeName: string, roomType?: string) => {
  let formName: string;
  let formType: number;
  let btnText: string;

  let roomName: string;
  let roomPrice: number;

  if (formTypeName === 'table') {
    formName = 'ЗАБРОНЮВАТИ СТОЛИК';
    formType = 1;
    btnText = 'ОФОРМИТИ БРОНЮВАННЯ';
  } else if (formTypeName === 'room') {
    formName = 'ЗАБРОНЮВАТИ НОМЕР';
    formType = 2;
    btnText = 'ОФОРМИТИ БРОНЮВАННЯ';
  } else {
    formName = 'ЦІНИ НА НОМЕР';
    formType = 3;
    btnText = 'ЗАБРОНЮВАТИ НОМЕР';
  }

  if (roomType === 'double-room') {
    roomName = 'Двомісний';
    roomPrice = 1000;
  } else if (roomType === 'double-lux-room') {
    roomName = 'Двомісний люкс';
    roomPrice = 3000;
  } else {
    roomName = 'Тримісний';
    roomPrice = 2000;
  }

  return { formName, formType, btnText, roomName, roomPrice };
};
