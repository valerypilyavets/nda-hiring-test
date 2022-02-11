import {IMenu, IMenuError} from "./Menu.interfaces";
import data from "../../data/data.json"

export function fetchMenu(restaurantId: number) {
    return new Promise<{ result: IMenu } >((resolve, reject) => {
        setTimeout(() => {
            const menus: IMenu[] = data.menus;
            const selectedMenu = menus.find(menu => menu.restaurantId === restaurantId);
            if (selectedMenu !== undefined) {
                resolve({result: selectedMenu})
            } else {
                const error: IMenuError = {text: 'Something went wrong'}
                reject({result: error});
            }
        }, 1500);
    });
}
