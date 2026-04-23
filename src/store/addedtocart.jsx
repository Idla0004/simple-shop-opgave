import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAddedProducts = create(
  persist(
    (set, get) => ({
      addedtocart: [],

      setAddedToCart: (id, image, title, price) =>
        set((state) => ({
          addedtocart: [
            ...state.addedtocart,
            {
              id: id,
              image: image,
              title: title,
              price: price,
            },
          ],
        })),
      removeAddedToCart: (id) =>
        set(() => ({
          addedtocart: get().addedtocart.filter(
            (addedtocart) =>
              addedtocart.id !== id,
          ),
        })),
    }),
    { name: "addedtocart-storage" },
  ),
);
export default useAddedProducts;
