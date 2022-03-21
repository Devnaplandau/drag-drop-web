import React, { useState } from "react";
import PropTypes from "prop-types";
import "./draglist.scss";
import DragItem from "../../Components/DragItem";
const DragList = (props) => {
  const { data, renderItemContent } = props;

  const [dataList, setDataList] = useState(data);

  const [dragStartIndex, setdragStartIndex] = useState(null);

  // get index of draged item
  const onDragStart = (index) => setdragStartIndex(index);

  // update list when item dropped
  const onDrop = (dropIndex) => {
    console.log(dropIndex);
    // get dragged item
    const dragItem = dataList[dragStartIndex];

    // delete dragged item in list
    let list = [...dataList];
    list.splice(dragStartIndex, 1);

    // update list
    if (dragStartIndex < dropIndex) {
      setDataList([
        ...list.slice(0, dropIndex - 1),
        dragItem,
        ...list.slice(dropIndex - 1, list.length),
      ]);
    } else {
      setDataList([
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length),
      ]);
    }
  };
  return (
    <ul className="draggable-list">
      {dataList.map((item, index) => (
        <DragItem
          key={index}
          index={index}
          onDragStart={(index) => onDragStart(index)}
          onDrop={(index) => onDrop(index)}
        >
          {renderItemContent(item)}
        </DragItem>
      ))}
      {/* {add last item so you can drag item to last position 
      last item dont need onDragStart  because it can not be drag} */}
      <DragItem
        key={data.length}
        index={data.length}
        draggable={false}
        onDrop={(index) => onDrop(index)}
      />
    </ul>
  );
};

DragList.propTypes = {
  data: PropTypes.array,
  renderItemContent: PropTypes.func,
};

export default DragList;
