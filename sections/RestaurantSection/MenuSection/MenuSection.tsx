import { fetchDishes } from '@/sanity/requests/fetchDishes';
import { fetchSnacks } from '@/sanity/requests/fetchSnacks';
import { fetchSalads } from '@/sanity/requests/fetchSalads';
import { fetchDesserts } from '@/sanity/requests/fetchDesserts';
import { fetchDrinks } from '@/sanity/requests/fetchDrinks';

import menuData from '@/data/menu.json';

type Dish = {
  name: string;
  ingredient?: string;
  weight: string;
  price: string;
};

export const MenuSection = async () => {
  const { title, dishes, snacks, salad, drinks, desserts } = menuData;

  const dishesData: Dish[] = await fetchDishes();
  const snacksData: Dish[] = await fetchSnacks();
  const saladsData: Dish[] = await fetchSalads();
  const dessertsData: Dish[] = await fetchDesserts();
  const drinksData: Dish[] = await fetchDrinks();

  // console.log(saladsData);

  return (
    <section id="menu" className="bg-darkLemonBg pt-[36px] pb-[32px] gradient-bg">
      <div className="container">
        <h2 className="mb-[32px] font-times font-700 text-[32px]">{title}</h2>
        <div>
          <div>
            <h3 className="dishes-category-title">{dishes}</h3>
            <div className="mb-[16px]">
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
          </div>
          <div>
            <h3 className="dishes-category-title">{snacks}</h3>
            <div className="mb-[16px]">
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
          </div>
          <div>
            <h3 className="dishes-category-title">{salad}</h3>
            <div className="mb-[16px]">
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
          </div>
          <div>
            <h3 className="dishes-category-title">{desserts}</h3>
            <div className="mb-[16px]">
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
          </div>
          <div>
            <h3 className="dishes-category-title">{drinks}</h3>
            <div className="mb-[16px]">
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
        </div>
      </div>
    </section>
  );
};
