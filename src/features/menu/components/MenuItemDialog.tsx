import React, {useState} from 'react';
import {IMenuItem} from "../Menu.interfaces";
import {Card, CardContent, CardMedia, CardActions, Chip, Dialog, Typography} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export interface IMenuItemDialogProps {
    open: boolean;
    item: IMenuItem;
    onClose: (withAlert: boolean) => void;
}

export function MenuItemDialog(props: IMenuItemDialogProps) {
    const {onClose, item, open} = props;
    const [savingLike, setSavingLike] = useState(false);
    const [savingDislike, setSavingDislike] = useState(false);

    const handleClose = ():void => {
        onClose(false);
    };

    const handleLike = ():void => {
        setSavingLike(true);
        setTimeout(() => {
            setSavingLike(false);
            onClose(true);
        }, 1500)
    }

    const handleDislike = ():void => {
        setSavingDislike(true);
        setTimeout(() => {
            setSavingDislike(false);
            onClose(true);
        }, 1500)
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <Card>
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
                    <Typography gutterBottom variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <br/>
                    <Typography gutterBottom variant="h6" color="text.primary">
                        Weight (g): <Chip color="info" icon={<FastfoodIcon />} label={item.weight}/>
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.primary">
                        Price ($): <Chip color="success" icon={<MonetizationOnIcon />} label={item.price}/>
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.primary">
                        Average rate: <Chip color="secondary" icon={<ThumbsUpDownIcon />} label={item.averageRate}/>
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    justifyContent: 'center'
                }}>
                    <LoadingButton loading={savingLike} onClick={handleLike} startIcon={<ThumbUpIcon />}>Like</LoadingButton>
                    <LoadingButton loading={savingDislike} onClick={handleDislike} startIcon={<ThumbDownIcon />}>Dislike</LoadingButton>
                </CardActions>
            </Card>
        </Dialog>
    );
}