import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import DatePicker from 'react-datepicker';

import { getRoomData } from '@/utils/getRoomData';

import { IForm } from './type';

import 'react-datepicker/dist/react-datepicker.css';

type Inputs = {
  name: string;
  phone: string;
  date: string;
  selectedNights: string;
  selectedRoom: string;
  checkInDate: Date;
  checkOutDate: Date;
};

export const Form = ({ formTypeName, roomType, onClose }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Inputs>();

  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  const handleCheckOutDateChange = (date: Date | null) => {
    setCheckOutDate(date);
    setValue('checkOutDate', date as Date);
  };

  const handleCheckInDateChange = (date: Date | null) => {
    setCheckInDate(date);
    setValue('checkInDate', date as Date);

    setCheckOutDate(null);
    setValue('checkOutDate', null as unknown as Date);
  };

  const onSubmit: SubmitHandler<Inputs> = (data, e?) => {
    if (e) {
      e.target.reset();
    }
    console.log(data);
    onClose();
  };

  const { formName, formType, btnText, roomName, roomPrice } = getRoomData(formTypeName, roomType);

  const selectedNights = watch('selectedNights', '1');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <h2 className="mb-[40px] font-times text-[24px] font-700 tracking-[1.2px] md:text-[48px] md:tracking-[2px]">
          {formName}
        </h2>
        {(formType === 1 || formType === 2) && (
          <>
            <label className="mb-[20px] flex flex-col-reverse gap-[8px]">
              <span className="form-text-yellow">
                {formType === 1 && 'На кого забронювати столик?'}
                {formType === 2 && 'На кого забронювати номер?'}
              </span>

              <input
                {...register('name', { required: true })}
                placeholder="Ваше ім’я"
                autoComplete="on"
                className="input"
              />
            </label>

            <label className="mb-[20px] flex flex-col-reverse gap-[8px]">
              <span className="form-text-yellow">Номер телефону</span>
              <input
                {...register('phone', {
                  required: true,
                })}
                placeholder="+38 (___) ___-__-__"
                autoComplete="on"
                className="input"
              />
            </label>

            <label className="mb-[20px] flex flex-col-reverse gap-[8px]">
              <span className="form-text-yellow">Категорія номеру</span>
              <select {...register('selectedRoom', { required: true })} className="input">
                <option key="1" value="Двомісний">
                  Двомісний
                </option>
                <option key="2" value="Двомісний люкс">
                  Двомісний люкс
                </option>
                <option key="3" value="Трьохмісний">
                  Трьохмісний
                </option>
              </select>
            </label>

            <label className="mb-[20px] flex flex-col-reverse justify-between">
              <span className="mt-[8px] form-text-yellow">Дата заїзду</span>
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                placeholderText="Оберіть дату"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                className="input w-full"
              />
            </label>

            <label className="mb-[20px] flex flex-col-reverse justify-between">
              <span className="mt-[8px] form-text-yellow">Дата виїзду</span>
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutDateChange}
                placeholderText="Оберіть дату"
                dateFormat="dd/MM/yyyy"
                minDate={
                  checkInDate ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000) : new Date()
                }
                className="input w-full"
              />
            </label>
          </>
        )}

        {formType === 3 && (
          <>
            <h3
              className="mb-[28px] font-times text-[24px] text-left font-700 tracking-[1.2px] text-formGray 
            md:text-[32px]"
            >
              {roomName}
            </h3>

            <p className="form-text-yellow ml-0 mb-[20px] text-[16px] tracking-[0.32px]">
              Категорія номеру
            </p>

            <div className="mb-[28px] flex flex-col gap-[20px] md:flex-row md:justify-between md:gap-[16px]">
              <label className="flex flex-col-reverse gap-[8px] md:w-full">
                <span className="ml-[15px] form-text-yellow text-left">Кількість ночей</span>
                <select {...register('selectedNights', { required: true })} className="input">
                  {[...Array(7)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </label>

              <div className="md:w-full">
                <div className="mb-[8px] w-full py-[17px] pl-[12px] rounded-sm border-2 border-accentYellow02">
                  <p className="font-times text-[20px] text-left font-700 tracking-[1px] leading-normal text-formGray">
                    {roomPrice * Number(selectedNights)}
                  </p>
                </div>

                <p className="form-text-yellow text-[16px] tracking-[0.32px]">грн</p>
              </div>
            </div>
          </>
        )}

        <button
          className="py-[20px] bg-black w-full text-white text-[20px] font-500 rounded-sm border-1 border-accentYellow02 
          hover:text-black hover:bg-accentYellow02 focus:text-accentYellow02 focus:bg-white transition-colors
          md:text-[24px]"
          type="submit"
          onClick={() => {}}
        >
          {btnText}
        </button>
      </form>
    </>
  );
};
