import React from "react";
import PropTypes from "prop-types";
import { listData } from "../../assets/image/listData";
import DragList from "./Components/DragList";
import Card from "../Card";
const DragMain = (props) => {
  return (
    <>
      <DragList
        data={listData}
        renderItemContent={(item) => LessonCard(item)}
      />
    </>
  );
};

DragMain.propTypes = {};

const LessonCard = (item) => <Card item={item} />;
export default DragMain;
