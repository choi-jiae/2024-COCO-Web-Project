import React, { Component } from 'react';
import {
    Card,
    CardActions,
    CardContent, 
    Typography,
    IconButton
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// MmemoCard  구성요소
const card = (
    <React.Fragment>
        <CardActions  style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div>
            <IconButton
                sx={{ color: 'grey' }}>
                <EditIcon />
            </IconButton>
            <IconButton 
                sx={{ color: 'grey' }}>
                <DeleteIcon />
            </IconButton>
            </div>
        </CardActions>
        <CardContent>
            <Typography 
                sx={{ fontSize: 20, padding: '10px' }} color="text.first">
                    Memo Title
            </Typography>
            <Typography 
                sx={{ fontSize: 13, padding: '8px' }} color="text.secondary">
                    Memo Content
            </Typography>
        </CardContent>
    </React.Fragment>
)

export default class MemoCard extends Component {
    render() {
        return (
            <Card 
                variant="elevation" 
                style={{
                    backgroundColor: 'white', 
                    width: '350px', 
                    height: '450px',
                    borderRadius: '15px',
                    margin: '13px',
                    overflow: 'auto'
                }}>
                {card}
            </Card>
        );
    }
}