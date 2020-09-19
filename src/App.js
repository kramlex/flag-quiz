import React from 'react';
import './App.css';
import styled from 'styled-components'
import FlagQuiz from './components/FlagQuiz/FlagQuiz'
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`


function App() {

    return (
        <AppWrapper>
            <DndProvider backend={HTML5Backend}>
                <FlagQuiz/>
            </DndProvider>
        </AppWrapper>
    );
}

export default App;
