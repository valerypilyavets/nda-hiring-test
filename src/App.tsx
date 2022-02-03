import React, {FormEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from "./features/menu/Menu";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

function App() {
    const [restaurant, setRestaurant] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRestaurant(event.target.value);
    };

    return (
        <>
            <FormControl>
                <InputLabel id="restaurant-label">Select restaurant</InputLabel>
                <Select
                    labelId="restaurant-label"
                    id="restaurant"
                    value={restaurant}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={'ilMolino'}>Il Molino</MenuItem>
                    <MenuItem value={'nonExisting'}>Non existing restaurant</MenuItem>
                </Select>
            </FormControl>
            <Menu restaurantId={restaurant}/>
        </>

    );
}

export default App;
