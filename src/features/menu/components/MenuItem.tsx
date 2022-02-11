import React from 'react';
import {IMenuItem} from '../Menu.interfaces';
import {MenuItemDialog} from './MenuItemDialog';
import {AlertDialog} from './AlertDialog';
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@mui/material';

interface IMenuItemPropTypes {
    item: IMenuItem
}

export function MenuItem({item}: IMenuItemPropTypes) {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);

    const openDialog = ():void => {
        setDialogOpen(true);
    }

    const closeDialog = (withAlert: boolean):void => {
        setDialogOpen(false);
        if (withAlert) {
            openAlert();
        }
    }

    const openAlert = ():void => {
        setAlertOpen(true);
    }

    const closeAlert = ():void => {
        setAlertOpen(false);
    }

    return (
        <>
            <Card sx={{ maxWidth: 400 }}>
                <CardActionArea onClick={openDialog}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={process.env.PUBLIC_URL + '/images/' + item.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <MenuItemDialog
                item={item}
                open={dialogOpen}
                onClose={closeDialog}
            />
            <AlertDialog open={alertOpen}
                   onClose={closeAlert}
            />
        </>
    );
}
