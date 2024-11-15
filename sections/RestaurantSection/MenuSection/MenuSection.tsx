'use client';
import { useEffect, useState } from 'react';

import { fetchDishes } from '@/sanity/requests/fetchDishes';
import { fetchSnacks } from '@/sanity/requests/fetchSnacks';
import { fetchSalads } from '@/sanity/requests/fetchSalads';
import { fetchDesserts } from '@/sanity/requests/fetchDesserts';
import { fetchDrinks } from '@/sanity/requests/fetchDrinks';

import { Modal } from '@/components/ui/Modal';
import { Form } from '@/components/common/Form';
import { Btn } from '@/components/common/Btn';

import menuData from '@/data/menu.json';

type Dish = {
  name: string;
  ingredient?: string;
  weight: string;
  price: string;
};

export const MenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { title, dishes, snacks, salad, drinks, desserts } = menuData;

  const [dishesData, setDishesData] = useState<Dish[]>([]);
  const [snacksData, setSnacksData] = useState<Dish[]>([]);
  const [saladsData, setSaladsData] = useState<Dish[]>([]);
  const [dessertsData, setDessertsData] = useState<Dish[]>([]);
  const [drinksData, setDrinksData] = useState<Dish[]>([]);

  // console.log(saladsData);

  useEffect(() => {
    const fetchData = async () => {
      const dishes = await fetchDishes();
      const snacks = await fetchSnacks();
      const salads = await fetchSalads();
      const desserts = await fetchDesserts();
      const drinks = await fetchDrinks();

      setDishesData(dishes);
      setSnacksData(snacks);
      setSaladsData(salads);
      setDessertsData(desserts);
      setDrinksData(drinks);
    };

    fetchData();
  }, []);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="menu" className="bg-darkLemonBg pt-[36px] pb-[32px] gradient-bg">
      <div className="container">
        <h2 className="mb-[32px] font-times font-700 text-[32px]">{title}</h2>
        <div className="mb-[32px]">
          <div className="mb-[16px]">
            <h3 className="dishes-category-title">{dishes}</h3>
            {dishesData.map((dish, index) => (
              <div
                key={index}
                className="mb-[8px] grid grid-cols-[1fr,minmax(0,75px),minmax(0,75px)] auto-rows-auto gap-y-[4px]"
              >
                <h4 className="dishes-name ">{dish.name}</h4>
                <p className="dishes-ingredient ">{dish.ingredient}</p>
                <p className="dishes-weight ">{dish.weight}</p>
                <p className="dishes-price ">{dish.price}</p>
              </div>
            ))}
          </div>

          <div className="mb-[16px]">
            <h3 className="dishes-category-title">{snacks}</h3>
            {snacksData.map((snack, index) => (
              <div
                key={index}
                className="mb-[8px] grid grid-cols-[1fr,minmax(0,75px),minmax(0,75px)] auto-rows-auto gap-y-[4px]"
              >
                <h4 className="dishes-name ">{snack.name}</h4>
                <p className="dishes-ingredient ">{snack.ingredient}</p>
                <p className="dishes-weight ">{snack.weight}</p>
                <p className="dishes-price ">{snack.price}</p>
              </div>
            ))}
          </div>

          <div className="mb-[16px]">
            <h3 className="dishes-category-title">{salad}</h3>
            {saladsData.map((salad, index) => (
              <div
                key={index}
                className="mb-[8px] grid grid-cols-[1fr,minmax(0,75px),minmax(0,75px)] auto-rows-auto gap-y-[4px]"
              >
                <h4 className="dishes-name ">{salad.name}</h4>
                <p className="dishes-ingredient ">{salad.ingredient}</p>
                <p className="dishes-weight ">{salad.weight}</p>
                <p className="dishes-price ">{salad.price}</p>
              </div>
            ))}
          </div>

          <div className="mb-[16px]">
            <h3 className="dishes-category-title">{desserts}</h3>
            {dessertsData.map((dessert, index) => (
              <div
                key={index}
                className="mb-[8px] grid grid-cols-[1fr,minmax(0,75px),minmax(0,75px)] auto-rows-auto"
              >
                <h4 className="dishes-name ">{dessert.name}</h4>
                <p className="dishes-weight ">{dessert.weight}</p>
                <p className="dishes-price ">{dessert.price}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="dishes-category-title">{drinks}</h3>
            {drinksData.map((drink, index) => (
              <div
                key={index}
                className="mb-[8px] grid grid-cols-[1fr,minmax(0,75px),minmax(0,75px)] auto-rows-auto"
              >
                <h4 className="dishes-name ">{drink.name}</h4>
                <p className="dishes-weight ">{drink.weight}</p>
                <p className="dishes-price ">{drink.price}</p>
              </div>
            ))}
          </div>
        </div>

        <Btn
          type="button"
          isBtn
          classnameProps="bg-black border-white rounded-[25px] border-[2px] ml-auto mr-auto"
          onClick={handleToggleModal}
        >
          Забронювати столик
        </Btn>
      </div>

      <Modal open={isModalOpen} onClose={handleToggleModal}>
        <Form formTypeName="table" onClose={handleToggleModal} />
      </Modal>
    </section>
  );
};
