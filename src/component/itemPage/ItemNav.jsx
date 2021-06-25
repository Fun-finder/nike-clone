import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TuneIcon from "@material-ui/icons/Tune";

export default function ItemNav() {
  return (
    <div className="itempage-nav">
      <div className="item-nav-comp item-nav-left">
        <div className="item-nav-smTitle">Men</div>
        <div className="item-nav-title"> Men's 의류</div>
      </div>
      <div className="item-nav-comp item-nav-right">
        <span>
          <span>필터</span> <TuneIcon className="item-icons" />
        </span>
        <span>
          <span>신상품순</span> <ExpandMoreIcon className="item-icons" />
        </span>
      </div>
    </div>
  );
}
