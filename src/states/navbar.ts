// 使用 zustand 管理状态
// 管理 Navbar 被选中的菜单

import { create } from "zustand";

export const useNavbarStore = create<{
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}>((set) => ({
  selectedMenu: "",
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));
