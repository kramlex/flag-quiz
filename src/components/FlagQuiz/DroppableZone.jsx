import React from 'react';
import {DroppableDiv, DroppableText, FlagImage} from './styles';
import {DropTarget} from 'react-dnd';

const BG = {
    default: '#f6f6f6',
    isActive: '#eaeaea',
    canDrop: '#d2d2d2'
}

const Dustbin = ({ canDrop, isOver, connectDropTarget, background,text, svg}) => {

    const isActive = canDrop && isOver
    let backgroundColor = background
    if (isActive) {
        backgroundColor = BG.isActive
    } else if (canDrop) {
        backgroundColor = BG.canDrop
    }
    return (
        <DroppableDiv ref={connectDropTarget} backgroundColor={backgroundColor}>
            {svg && <FlagImage src={svg}/>}
            <DroppableText>
                {isActive ? 'RELEASE TO PUT' : text}
            </DroppableText>
        </DroppableDiv>
    )
}
export default DropTarget(
    'box',
    {
        drop: (props) => ({ name: 'DropZone',base: props.base }),
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
)(Dustbin)
