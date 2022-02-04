import React from 'react';
import {Alert} from "@mui/material";
import {MenuItem} from "../Menu.interfaces";

interface MenuItemsPropTypes {
    items: MenuItem[]
}

export function MenuItems({items}: MenuItemsPropTypes) {

    return (
        <>
        {items.map((item, index) => (
            <>
                {item.name}<br/>
                {item.description}<br/>
            </>
        ))}
        </>
    );
}
