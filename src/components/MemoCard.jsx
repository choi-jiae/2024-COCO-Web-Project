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
import EditMemoCard from '../components/EditMemoCard';

// MmemoCard  구성요소
const MemoCardContent = ({ title, content }) => {
    
    return (
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
                {title}
            </Typography>
            <Typography 
                sx={{ fontSize: 15, padding: '8px' }} color="text.secondary">
                {content}
            </Typography>
        </CardContent>
    </React.Fragment>
    );
};

export default class MemoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    handleEdit = () => {
        // edit하는 logic 작성
    }

    handleDelete = () => {
        // delete하는 logic 작성
    }

    render() {
        const { title, content } = this.props;

        if (this.state.isEditing) {
            return <EditMemoCard title = {title} content = {content} />;
        }

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
                <MemoCardContent title = {title} content = {content}/>
            </Card>
        );
    }
}