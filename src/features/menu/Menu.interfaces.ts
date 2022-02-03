export enum MenuStatus {
    INITIAL,
    LOADING,
    READY,
    ERROR
}

export interface Menu {
    restaurantId: string;
    restaurantName: string;
    restaurantDescription: string;
    menuItems: MenuItem[];
}

export interface MenuItem {
    name: string;
    description: string;
    weight: number;
    price: number;
    averageRate: number
}

export interface MenuState {
    menu: Menu | undefined,
    status: MenuStatus,
    error: MenuError | undefined
}

export interface MenuError {
    text: string
}

export type MessageFormSubmitCallback = (message: string) => void;
export type NameFormSubmitCallback = (name: string) => void;