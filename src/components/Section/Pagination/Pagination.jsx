import React from "react";
import {AiOutlineDoubleRight} from 'react-icons/ai'
import Style from './pagination.module.css';
function Pagination() {
  return (
    <div className={Style.paginationArea}>
        <button className={Style.active}>1</button>
        <button>2</button>
        <button>3</button>
        <button><AiOutlineDoubleRight /></button>
    </div>
  );
}

export default Pagination;
