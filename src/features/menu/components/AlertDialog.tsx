import React from 'react';
import {Dialog, Alert, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface IAlertProps {
    open: boolean;
    onClose: () => void;
}

export function AlertDialog(props: IAlertProps) {
    const {onClose, open} = props;

    const handleClose = ():void => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <Alert action={
                <IconButton
                    color="inherit"
                    size="small"
                    onClick={() => {
                        onClose();
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            } severity="success">Thanks for your review!</Alert>
        </Dialog>
    );
}