import React from 'react';
import {Alert} from "@mui/material";

export function Error() {
    return (
        <Alert severity="error">Something went wrong. Please select another restaurant</Alert>
    );
}
