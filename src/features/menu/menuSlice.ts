import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {MenuError, Menu, MenuState, MenuStatus} from "./Menu.interfaces";
import {fetchMenu} from "./menuAPI";

const initialState: MenuState = {
    menu: undefined,
    status: MenuStatus.INITIAL,
    error: undefined
};

export const fetchMenuThunk = createAsyncThunk<Menu, string, { rejectValue: MenuError }>(
    'menu/fetch',
    async (restaurantId: string, thunkApi) => {
        try {
            const response = await fetchMenu(restaurantId);
            return response.result;
        } catch (error) {
            return thunkApi.rejectWithValue(error.result as MenuError);
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

//export const {fetchMenuThunk} = chatSlice.actions;

//export const messagesSelector = (state: RootState) => state.chat.messages;
//export const userNameSelector = (state: RootState) => state.chat.userName;
//export const chatStatusSelector = (state: RootState) => state.chat.status;

export default menuSlice.reducer;
