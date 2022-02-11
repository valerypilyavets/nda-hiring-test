import React from 'react';
import {Grid} from "@mui/material";
import {IMenuItem} from "../Menu.interfaces";
import {MenuItem} from "./MenuItem";

interface IMenuItemsPropTypes {
    items: IMenuItem[] | undefined
}

export function MenuItems({items}: IMenuItemsPropTypes) {

    return (
        <Grid container rowSpacing={2} columnSpacing={2} sx={{
            marginTop: '30px'
        }}>
            {items !== undefined && items.map((item, index) => (
                <Grid item xs={6}>
                    <MenuItem  key={index} item={item}/>
                </Grid>
            ))}
        </Grid>
    );
}
