import { fetchDishes } from '@/sanity/requests/fetchDishes';
import { fetchSnacks } from '@/sanity/requests/fetchSnacks';

import menuData from '@/data/menu.json';

type Dish = {
  name: string;
  ingredient: string;
  weight: string;
  price: string;
};

export const MenuSection = async () => {
  const { title, dishes, snacks, salad, drinks, desserts } = menuData;

  const dishesData: Dish[] = await fetchDishes();
  const snacksData: Dish[] = await fetchSnacks();

  // console.log(dishesData);

  return (
    <section id="menu" className="bg-darkLemonBg pt-[36px] pb-[32px] gradient-bg">
      <div className="container">
        <h2 className="mb-[32px] font-times font-700 text-[32px]">{title}</h2>
        <div>
          <div>
            <h3 className="dishes-category-title">{dishes}</h3>
            {dishesData.map((dish, index) => (
              <div
                key={index}
                className="mb-[16px] grid grid-cols-[1fr,minmax(0,75px),minmax(0,75px)] auto-rows-auto gap-y-[4px]"
              >
                <h4 className="dishes-name ">{dish.name}</h4>
                <p className="dishes-ingredient ">{dish.ingredient}</p>
                <p className="dishes-weight ">{dish.weight}</p>
                <p className="dishes-price ">{dish.price}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="dishes-category-title">{snacks}</h3>
            {snacksData.map((snack, index) => (
              <div
                key={index}
                className="mb-[16px] grid grid-cols-[1fr,minmax(0,75px),minmax(0,75px)] auto-rows-auto gap-y-[4px]"
              >
                <h4 className="dishes-name ">{snack.name}</h4>
                <p className="dishes-ingredient ">{snack.ingredient}</p>
                <p className="dishes-weight ">{snack.weight}</p>
                <p className="dishes-price ">{snack.price}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="dishes-title">{salad}</h3>
          </div>
          <div>
            <h3 className="dishes-title">{desserts}</h3>
          </div>
          <div>
            <h3 className="dishes-title">{drinks}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
