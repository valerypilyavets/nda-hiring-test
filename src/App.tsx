import React, {FormEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from "./features/menu/Menu";
import {Container, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Restaurants} from "./features/menu/Menu.interfaces";

function App() {
    const [restaurant, setRestaurant] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRestaurant(event.target.value);
    };

    return (
        <Container fixed sx={{
            marginTop: '50px'
        }}>
            <Box sx={{width: '300px'}}>
                <FormControl fullWidth>
                    <InputLabel id="restaurant-label">Select restaurant</InputLabel>
                    <Select
                        labelId="restaurant-label"
                        id="restaurant"
                        value={restaurant}
                        label="Select restaurant"
                        onChange={handleChange}
                    >
                        <MenuItem value={Restaurants.BEST_PIZZA}>Best pizza</MenuItem>
                        <MenuItem value={Restaurants.NON_EXISTING}>Non existing restaurant</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {restaurant !== '' && <Menu restaurantId={parseInt(restaurant)}/>}
        </Container>
    );
}

export default App;
