import { create, StoreApi, UseBoundStore } from "zustand";

export interface IBears {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

export const useTestStore: UseBoundStore<StoreApi<IBears>> = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: IBears) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));

export interface IApp {
  tabs: string;
}

export const useAppStore: UseBoundStore<StoreApi<IApp>> = create((set) => ({
  tabs: "",
}));
