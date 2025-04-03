import { create } from 'zustand'

type MenuItem = {
    id: number;
    interfaceUrlId: number
    name: string
    sort: number
    tenantId: number
    topName: string
    url: string
}

// 1. 定义 Store State 和 Actions 的类型 (推荐使用 TypeScript)
type MenusStore = {
    menuItems: MenuItem[];
    activeId: number
    setMenuItems: (menuItems: MenuItem[]) => void;
    setActiveId: (id: number) => void;
}

export const useMenusStore = create<MenusStore>((set) => ({
    menuItems: [],
    activeId: -999, // 初始化给 -999 一旦通过后端进行了初始化就会更新
    setMenuItems: (menuItems: MenuItem[]) => {
        set({menuItems: menuItems})
    },
    setActiveId: (id: number) => {
        set({activeId: id})
    }
}));
