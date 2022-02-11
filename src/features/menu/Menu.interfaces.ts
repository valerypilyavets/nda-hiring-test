export enum Restaurants {
    BEST_PIZZA,
    NON_EXISTING
}

export enum MenuStatus {
    INITIAL,
    LOADING,
    READY,
    ERROR
}

export interface IMenu {
    restaurantId: number;
    restaurantName: string;
    restaurantDescription: string;
    menuItems: IMenuItem[];
}

export interface IMenuItem {
    name: string;
    description: string;
    weight: number;
    price: number;
    averageRate: number,
    image: string
}

export interface IMenuState {
    menu: IMenu | undefined,
    status: MenuStatus,
    error: IMenuError | undefined
}

export interface IMenuError {
    text: string
}