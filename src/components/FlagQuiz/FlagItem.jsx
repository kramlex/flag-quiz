import React from 'react';
import {FlagDiv, FlagImage} from './styles';
import {DragSource} from 'react-dnd';


const FlagItem = ({ name, svg, isDragging, connectDragSource }) => {
    const opacity = isDragging ? 1 : 1
    const visibility = isDragging ? 'hidden' :'visible'
    return (
        <FlagDiv ref={connectDragSource} opacity={opacity} visibility={visibility}>
            <FlagImage src={svg}/>
        </FlagDiv>
    )
}

export default DragSource(
    'box',
    {
        beginDrag: (props) => {
            return { name: props.name , shortName: props.shortName}
        },
        endDrag(props, monitor) {
            const item = monitor.getItem()
            const dropResult = monitor.getDropResult()
            if (dropResult) {
                if(item.shortName === dropResult.base) {
                    props.doneFlag()
                }
                else {
                    props.wrongFlag()
                }
                // alert(`You dropped ${item.shortName} into ${dropResult.base}!`)
            }
        },
    },
    (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }),
)(FlagItem)
