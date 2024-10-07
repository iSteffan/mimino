import { useForm, SubmitHandler } from 'react-hook-form';
import { IForm } from './type';
import { getRoomData } from '@/utils/getRoomData';

type Inputs = {
  name: string;
  phone: string;
  date: string;
  nights: string;
  checkInDate: string;
  checkOutDate: string;
};

export const Form = ({ formTypeName, roomType, onClose }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, e?) => {
    if (e) {
      e.target.reset();
    }
    console.log(data);
  };

  const { formName, formType, btnText, roomName, roomPrice } = getRoomData(formTypeName, roomType);
  const selectedNights = watch('nights', '1');

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

            <label className="mb-[20px] flex flex-col-reverse gap-[8px]">
              <span className="ml-[15px] form-text-yellow text-left">Кількість ночей</span>
              <select
                {...register('nights', { required: true })}
                className="py-[17px] pl-[12px] font-times text-[24px] font-700 tracking-[1px] text-formGray rounded-sm border-2 border-accentYellow02"
              >
                {[...Array(7)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </label>

            <div className="mb-[8px] w-full py-[17px] pl-[12px] rounded-sm border-2 border-accentYellow02">
              <p className="font-times text-[24px] text-left font-700 tracking-[1px] leading-normal text-formGray">
                {roomPrice * Number(selectedNights)}
              </p>
            </div>

            <p className="ml-[15px] form-text-yellow mb-[28px] text-left text-[16px] tracking-[0.32px]">
              грн
            </p>
          </>
        )}

        <button
          className="py-[20px] bg-black w-full text-white text-[20px] rounded-sm border-1 border-accentYellow02 
          hover:text-black hover:bg-accentYellow02 focus:text-accentYellow02 focus:bg-white transition-colors"
          type="submit"
          onClick={() => {
            onClose();
          }}
        >
          {btnText}
        </button>
      </form>
    </>
  );
};
