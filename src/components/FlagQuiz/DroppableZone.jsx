import React from 'react';
import {DroppableDiv, DroppableText, FlagImage} from './styles';
import {DropTarget} from 'react-dnd';
import {constants} from './constants';


const Dustbin = ({ canDrop, isOver, connectDropTarget, background,text, svg}) => {

    const isActive = canDrop && isOver
    let backgroundColor = background
    if (isActive) {
        backgroundColor = constants.dropZone.color.isActive
    } else if (canDrop) {
        backgroundColor = constants.dropZone.color.canDrop
    }
    return (
        <DroppableDiv ref={connectDropTarget} backgroundColor={backgroundColor}>
            {svg && <FlagImage src={svg}/>}
            <DroppableText>
                {isActive ? constants.dropZone.text.isActive : text}
            </DroppableText>
        </DroppableDiv>
    )
}
export default DropTarget(
    constants.targetType.BOX,
    {
        drop: (props) => ({ name: constants.dropZone.name ,base: props.base }),
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
)(Dustbin)
