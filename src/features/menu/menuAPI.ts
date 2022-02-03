import {Menu, MenuError} from "./Menu.interfaces";
import data from "../../data/data.json"

export function fetchMenu(restaurantId: string) {
    return new Promise<{ result: Menu } >((resolve, reject) => {
        setTimeout(() => {
            const menus: Menu[] = data.menus;
            const selectedMenu = menus.find(menu => menu.restaurantId === restaurantId);
            if (selectedMenu !== undefined) {
                resolve({result: selectedMenu})
            } else {
                const error: MenuError = {text: 'Something went wrong'}
                reject({result: error});
            }
        }, 1500);
    });
}
