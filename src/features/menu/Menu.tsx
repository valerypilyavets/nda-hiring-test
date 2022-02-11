import React, {useEffect} from 'react';
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
                <Box sx={{
                    textAlign: 'center',
                    marginTop: '50px'
                }}>
                    <CircularProgress/>
                </Box>
            }
            {status === MenuStatus.READY &&
                <Box sx={{
                    marginTop: '30px'
                }}>
                    <Typography gutterBottom variant="h3">
                        {restaurantName}
                    </Typography>
                    <Typography variant="body1">
                        {restaurantDescription}
                    </Typography>
                    <MenuItems items={menuItems} />
                </Box>
            }
            {status === MenuStatus.ERROR &&
                <Box sx={{
                    marginTop: '30px'
                }}>
                    <Error/>
                </Box>
            }
        </>
    );
}
