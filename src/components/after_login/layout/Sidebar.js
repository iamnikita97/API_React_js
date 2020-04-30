import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/bike">
            <ListItemIcon>
                <MotorcycleIcon />
            </ListItemIcon>
            <ListItemText primary="Bike" />
        </ListItem>
    </div>
);
