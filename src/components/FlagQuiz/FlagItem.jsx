import React from 'react';
import {FlagDiv, FlagImage} from './styles';
import {DragSource} from 'react-dnd';
import {constants} from './constants';


const FlagItem = ({svg, isDragging, connectDragSource }) => {
    const opacity = isDragging ? 1 : 1
    const visibility = isDragging ? 'hidden' :'visible'
    return (
        <FlagDiv ref={connectDragSource} opacity={opacity} visibility={visibility}>
            <FlagImage src={svg}/>
        </FlagDiv>
    )
}

export default DragSource(
    constants.targetType.BOX,
    {
        beginDrag: (props) => {
            return { name: props.name , shortName: props.shortName, svg: props.svg}
        },
        endDrag(props, monitor) {
            const item = monitor.getItem()
            const dropResult = monitor.getDropResult()
            if (dropResult) {
                if(item.shortName === dropResult.base) props.doneFlag(props.svg)
                else props.wrongFlag()
            }
        },
    },
    (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }),
)(FlagItem)
