import React, { Component } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default class AddButton extends Component { 
    render() {
        return (
            <Fab color='primary'>
                <AddIcon color='white'/>
            </Fab>
        );
    }
}