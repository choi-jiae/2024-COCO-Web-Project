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

// MemoCardContent 구성요소
const MemoCardContent = ({ onEdit, title, content }) => {

    const handleEdit = () => {
        onEdit(title, content);
    }

    return (
        <React.Fragment>
            <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div>
                    <IconButton
                        sx={{ color: 'grey' }}>
                        <EditIcon onClick={handleEdit} />
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
            isEditing: false,
            title: this.props.title,
            content: this.props.content,
        };
    }

    handleEdit = (title, content) => {
        this.setState({
            isEditing: true,
            title: title,
            content: content
        });
    }

    handleSave = (editTitle, editContent) => {
        this.setState({
            isEditing: false,
            title: editTitle,
            content: editContent
        });
    }
    
    // handleDelete = () => {
    //     // delete하는 logic 작성
    // }

    render() {
        const { title, content } = this.state;

        if (this.state.isEditing) {
            return <EditMemoCard title={title} content={content} onSave={this.handleSave}/>;
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
                <MemoCardContent
                    onEdit={this.handleEdit}
                    title={title} 
                    content={content} 
                />
            </Card>
        );
    }
}