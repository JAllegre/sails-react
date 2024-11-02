import { create } from "zustand";

const useAppStore = create((set) => ({
  displayerDate: new Date(),
  refreshDate: () => set((state) => ({ displayerDate: new Date() })),
}));

window.useAppStore = useAppStore;
export default useAppStore;
