import React, {useState, useEffect} from 'react';
import {Typography, CircularProgress, Box} from "@mui/material";
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {Error} from "./components/Error";
import {
    fetchMenuThunk,
    selectRestaurantName,
    selectRestaurantDescription,
    selectMenuItems,
    selectStatus
} from './menuSlice';
import {MenuStatus} from "./Menu.interfaces";
import {MenuItems} from "./components/MenuItems";

interface MenuPropTypes {
    restaurantId: number;
}

export function Menu({restaurantId}: MenuPropTypes) {
    const dispatch = useAppDispatch();
    const restaurantName = useAppSelector(selectRestaurantName);
    const restaurantDescription = useAppSelector(selectRestaurantDescription);
    const menuItems = useAppSelector(selectMenuItems);
    const status = useAppSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchMenuThunk(restaurantId));
    }, [restaurantId]);

    useEffect(() => {
        dispatch(fetchMenuThunk(restaurantId));
    }, [restaurantId]);

    return (
        <>
            {status === MenuStatus.LOADING &&
                <Box sx={{display: 'flex'}}>
                    <CircularProgress/>
                </Box>
            }
            {status === MenuStatus.READY &&
                <>
                    <Typography variant="h1">
                        {restaurantName}
                    </Typography>
                    <Typography variant="body1">
                        {restaurantDescription}
                    </Typography>
                    <MenuItems items={menuItems} />
                </>
            }
            {status === MenuStatus.ERROR &&
                <Error/>
            }
        </>
    );
}
