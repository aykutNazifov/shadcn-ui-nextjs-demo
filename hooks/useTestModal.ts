import { create } from "zustand";


type TestModalStore = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}


export const useTestModal = create<TestModalStore>((set) => ({
    isOpen: false,
    open() {
        set({ isOpen: true })
    },
    close() {
        set({ isOpen: false })
    }
}))