import { useForm, SubmitHandler } from 'react-hook-form';
import { IForm } from './type';

type Inputs = {
  name: string;
  phone: string;
  date: string;
  nights: string;
  checkInDate: string;
  checkOutDate: string;
};

export const Form = ({ formTypeName, roomType }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, e?) => {
    if (e) {
      e.target.reset();
    }
    console.log(data);
  };

  let formName;
  let formType;

  if (formTypeName === 'table') {
    formName = 'ЗАБРОНЮВАТИ СТОЛИК';
    formType = 1;
  } else if (formTypeName === 'room') {
    formName = 'ЗАБРОНЮВАТИ НОМЕР';
    formType = 2;
  } else {
    formName = 'ЦІНИ НА НОМЕР';
    formType = 3;
  }

  let roomName;

  if (roomType === 'double-room') {
    roomName = 'Двомісний';
  } else if (roomType === 'double-lux-room') {
    roomName = 'Двомісний люкс';
  } else {
    roomName = 'Тримісний';
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <h2 className="mb-[40px] font-times text-[24px] font-700 tracking-[1.2px] md:text-[48px] md:tracking-[2px]">
          {formName}
        </h2>
        {(formType === 1 || formType === 2) && (
          <>
            <label className="flex flex-col-reverse gap-[8px]">
              <span className="form-text-yellow">
                {formType === 1 && 'На кого забронювати столик?'}
                {formType === 2 && 'На кого забронювати номер?'}
              </span>

              <input
                {...register('name', { required: true })}
                placeholder="Ваше ім’я"
                autoComplete="on"
                className=""
              />
            </label>

            <label className="flex flex-col-reverse gap-[8px]">
              <span className="form-text-yellow">Номер телефону</span>
              <input
                {...register('phone', {
                  required: true,
                })}
                placeholder="+38 (___) ___-__-__"
                autoComplete="on"
                className=""
              />
            </label>
          </>
        )}

        {formType === 3 && (
          <>
            <h3 className="mb-[28px] font-times text-[24px] text-left font-700 tracking-[1.2px] text-formGray">
              {roomName}
            </h3>

            <p className="form-text-yellow mb-[28px] text-left text-[16px] tracking-[0.32px]">
              Категорія номеру
            </p>

            <label className="flex flex-col-reverse gap-[8px]">
              <span className="form-text-yellow">Кількість ночей</span>
              <select
                {...register('nights', { required: true })}
                className="py-[17px] pl-[12px] font-times text-[20px] font-700 tracking-[1px] text-formGray rounded-sm border-2 border-accentYellow02"
              >
                {[...Array(7)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </label>
          </>
        )}

        <button className="" type="submit" onClick={() => {}}>
          SEND
        </button>
      </form>
    </>
  );
};
