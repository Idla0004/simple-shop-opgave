import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAddedProducts = create(
  persist(
    (set, get) => ({
      addedtocart: [],
      setAddedToCart: (id) =>
        set((state) => ({
          addedtocart: [
            ...state.addedtocart,
            { id: id },
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
