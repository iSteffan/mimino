import { useForm, SubmitHandler } from 'react-hook-form';
import { IForm } from './type';

type Inputs = {
  name: string;
  phone: string;
  date: string;
  checkInDate: string;
  checkOutDate: string;
};

export const Form = ({ formType }: IForm) => {
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <label className="">
          <span className="">На кого забронювати столик?</span>
          <input
            {...register('name', { required: true })}
            placeholder="Ваше ім’я"
            autoComplete="on"
            className=""
          />
        </label>
        <label className="">
          <span className="">Номер телефону</span>
          <input
            {...register('phone', {
              required: true,
            })}
            placeholder="+38 (___) ___-__-__"
            autoComplete="on"
            className=""
          />
        </label>

        <button className="" type="submit" onClick={() => {}}>
          SEND
        </button>
      </form>
    </>
  );
};
