import React, { Component } from 'react';
import {
    Card,
    CardActions,
    CardContent, 
    TextField,
    IconButton
} from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';

// EditMmemoCard  구성요소
const EditCard = (
    <React.Fragment>
        <CardActions  style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div>
            <IconButton
                sx={{ color: 'grey' }}>
                <SaveIcon />
            </IconButton>
            </div>
        </CardActions>
        <CardContent>
            <TextField
                label="Memo Title"
                variant="standard"
                fullWidth
            >
            </TextField>
            <TextField
                label="Memo Content"
                variant="standard"
                multiline
                fullWidth
            >
            </TextField>
        </CardContent>
    </React.Fragment>
)

export default class EditMemoCard extends Component {
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
                {EditCard}
            </Card>
        );
    }
}