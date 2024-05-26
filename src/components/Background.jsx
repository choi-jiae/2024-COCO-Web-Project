import React, { Component } from 'react';
import MemoCard from '../components/MemoCard';
import EditMemoCard from '../components/EditMemoCard';
import AddButton from '../components/AddButton';

export default class Background extends Component {
    render() {
        return (
            <div style={{
                    backgroundColor: '#F3F3F3', 
                    height: '100vh', 
                    width: '100vw',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    overflow: 'auto'}}>
                {/* 나중에 반복문으로 처리 */}
                <MemoCard />
                <EditMemoCard/>
                <MemoCard />
                <MemoCard />
                <MemoCard />
                <MemoCard />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <AddButton />
                </div>
                
            </div>
            
        );
    }
}