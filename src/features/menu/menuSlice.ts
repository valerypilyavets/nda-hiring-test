import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {IMenuError, IMenu, IMenuState, MenuStatus} from "./Menu.interfaces";
import {fetchMenu} from "./menuAPI";

const initialState: IMenuState = {
    menu: undefined,
    status: MenuStatus.INITIAL,
    error: undefined
};

export const fetchMenuThunk = createAsyncThunk<IMenu, number, { rejectValue: IMenuError }>(
    'menu/fetch',
    async (restaurantId: number, thunkApi) => {
        try {
            const response = await fetchMenu(restaurantId);
            return response.result;
        } catch (error) {
            return thunkApi.rejectWithValue(error.result as IMenuError);
        }
    }
);

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuThunk.pending, (state, action) => {
                state.status = MenuStatus.LOADING;
                state.error = undefined;
                state.menu = undefined;
            })
            .addCase(fetchMenuThunk.fulfilled, (state, action) => {
                state.status = MenuStatus.READY;
                state.menu = action.payload;
            })
            .addCase(fetchMenuThunk.rejected, (state, action) => {
                state.status = MenuStatus.ERROR;
                state.error = action.payload;
        });
    },
});

export const selectMenuItems = (state: RootState) => state.menu.menu?.menuItems;
export const selectRestaurantName = (state: RootState) => state.menu.menu?.restaurantName;
export const selectRestaurantDescription = (state: RootState) => state.menu.menu?.restaurantDescription;
export const selectStatus = (state: RootState) => state.menu.status;

export default menuSlice.reducer;
