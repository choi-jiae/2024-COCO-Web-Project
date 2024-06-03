import React, { Component } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    TextField,
    IconButton
} from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';

const EditCard = ({ title, content, onSave, onTitleChange, onContentChange}) => {

    const handleSave = () => {
        onSave(title, content);
    };

    return (
        <React.Fragment>
            <CardActions  style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div>
                <IconButton
                    sx={{ color: 'grey' }} 
                    onClick = {handleSave}>
                    <SaveIcon />
                </IconButton>
                </div>
            </CardActions>
            <CardContent>
                <TextField
                    label="Memo Title"
                    variant="standard"
                    value = {title}
                    fullWidth
                    onChange = {onTitleChange}
                >
                </TextField>
                <TextField
                    label="Memo Content"
                    variant="standard"
                    multiline
                    fullWidth
                    value = {content}
                    onChange = {onContentChange}
                >
                </TextField>
            </CardContent>
        </React.Fragment>
    );
};

export default class EditMemoCard extends Component {
    constructor(props) {
        super(props);
            this.state = {
                title: '',
                content: '',
            };
        }
    
    handleSave = () => {
        // onSave 메서드를 호출하여 부모 컴포넌트로 상태 전달
        this.props.onSave(this.state.title, this.state.content);
    };

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleContentChange = (event) => {
        this.setState({ content: event.target.value });
    };

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
                <EditCard 
                    title={this.state.title}
                    content={this.state.content}
                    onSave={this.handleSave} 
                    onTitleChange={this.handleTitleChange}
                    onContentChange={this.handleContentChange}
                />
            </Card>
        );
    }
}