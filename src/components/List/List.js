import React from "react";
import poetsData from "../../content/poetsData";
import Filter from '../main_page/Filter/Filter'

function List() {
  return (
    <>
    <Filter poetsData={poetsData} />
    </>
  );
}

export default List;
