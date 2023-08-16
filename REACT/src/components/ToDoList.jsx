import React, { useState } from "react";
import AddItem from "./AddItem";
import ListItems from "./ListItems";

function ToDoList() {
  const [listData, setListData] = useState([]);

  const handleAddData = (dataToAdd) => {
    setListData([...listData, dataToAdd]);
  };

  const handleDeleteItem = (index) => {
    const updatedList = [...listData];
    updatedList.splice(index, 1);
    setListData(updatedList);
  };

  return (
    <>
      <div>
        <h3>To do List :D</h3>
        <AddItem addItem={handleAddData} />
        <ListItems items={listData} deleteItem={handleDeleteItem} />
      </div>
    </>
  );
}

export default ToDoList;