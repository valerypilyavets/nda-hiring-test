import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {fetchMenuThunk} from './menuSlice';
import * as stream from "stream";

interface MenuPropTypes {
    restaurantId: string;
}

export function Menu({restaurantId}: MenuPropTypes) {
    const dispatch = useAppDispatch();

    useEffect ( () => {
        dispatch(fetchMenuThunk(restaurantId));
    }, []);


    return (
        <div>

        </div>
    );
}
