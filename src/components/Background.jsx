import React, { Component } from 'react';
import MemoCard from '../components/MemoCard';
import EditMemoCard from '../components/EditMemoCard';
import AddButton from '../components/AddButton';

export default class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memos: [{type: 'EditMemoCard', title: '', content: ''}]
        };
    }

    handleAddMemo = () => {
        this.setState((prevState) => ({
            memos: [...prevState.memos, {type: 'EditMemoCard', title: '', content: ''}]
        }));
    };

    handleSaveMemo = (index, title, content) => {
        const newMemos = [...this.state.memos];
        newMemos[index] = { type: 'MemoCard', title, content };
        this.setState({ memos: newMemos });
    };

    render() {
        return (
            <div style={{
                    backgroundColor: '#F3F3F3', 
                    height: '100vh', 
                    width: '100vw',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    overflow: 'auto'}}>

                {this.state.memos.map((memo, index) => (
                    memo.type === "EditMemoCard" ? (
                        <EditMemoCard
                            key = {index} 
                            onSave = {(title, content) => this.handleSaveMemo(index, title, content)}
                        />
                    ) : (
                        <MemoCard
                            key = {index}
                            title = {memo.title}
                            content = {memo.content}
                        />
                    )
                ))}
                
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <AddButton onClick={this.handleAddMemo}/>
                </div>
                
            </div>
            
        );
    }
}