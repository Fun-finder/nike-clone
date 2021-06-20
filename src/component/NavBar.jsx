import React, { useState } from "react";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import CloseIcon from "@material-ui/icons/Close";

function mouseOver(event) {
  const style = event.target.style;

  style.backgroundColor = "#ddd";
  style.cursor = "pointer";
}
function mouseOut(event) {
  event.target.style.backgroundColor = "transparent";
}
const iconStyle = {
  fontSize: "27px",
  position: "relative",
  top: "2px",
  padding: "0 3px",
  height: "35px",
  width: "30px",
  borderRadius: "35px"
};

function NavBar() {
  const [isDisplayed, setDisplayed] = useState({
    display: "inline-block"
  });
  const [isX, setX] = useState({
    display: "none"
  });
  const [isDdMenu, setDdMenu] = useState({
    visibility: "hidden",
    transition: "1s"
  });
  const [isFloat, setFloat] = useState({
    float: "right"
  });
  const [isNavBar, setNavBer] = useState({
    height: "60px"
  });
  const [extendWidth, setWidth] = useState({
    width: "115px"
  });
  function focusHandler() {
    setDisplayed({
      display: "none"
    });
    setFloat({
      float: "none"
    });
    setX({
      display: "inline-block"
    });
    setDdMenu({
      visibility: "visible",
      transition: "1s"
    });
    setNavBer({
      height: "300px"
    });
    setWidth({
      width: "600px"
    });
  }
  function blurHandler() {
    setDisplayed({
      display: "inline-block"
    });
    setFloat({
      float: "right"
    });
    setX({
      display: "none"
    });
    setDdMenu({
      visibility: "hidden",
      transition: 0
    });
    setNavBer({
      height: "60px"
    });
    setWidth({
      width: "115px"
    });
  }

  return (
    <div className="NavBar" style={isNavBar}>
      <AllInclusiveIcon
        className="homeLogo"
        style={{ fontSize: 60, zIndex: 2 }}
      />
      <div className="NavMenu" style={isDisplayed}>
        <ul>
          <li className="navList">
            <a href="/"> New Releases</a>
          </li>
          <li className="navList">
            <a href="/"> Men</a>
          </li>
          <li className="navList">
            <a href="/"> Women</a>
          </li>
          <li className="navList">
            <a href="/"> Kids</a>
          </li>
          <li className="navList">
            <a href="/"> Sale</a>
          </li>
        </ul>
      </div>
      <div className="navRight" style={isFloat}>
        <div className="ddL">
          <div className="searchBar">
            <SearchOutlinedIcon className="navIcons" />
            <input
              className="searchInput"
              type="text"
              placeholder="검색"
              onFocus={focusHandler}
              style={extendWidth}
              // onBlur={blurHandler}
            />
          </div>
          <nav className="ddSearchBox " style={isDdMenu}>
            <h4>추천 검색어</h4>
            <div>
              <ul>
                <li>와플 원</li>
                <li>요가복</li>
                <li>썸머 에센셜</li>
                <li>지속 가능 컬렉션</li>
              </ul>
            </div>
          </nav>
        </div>
        <div style={isDisplayed}>
          <span className="navIcons rightIcon">
            <FavoriteBorderIcon
              id="heart"
              style={iconStyle}
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            />
          </span>
          <span className="navIcons rightIcon">
            <LocalMallOutlinedIcon
              style={iconStyle}
              id="bag"
              className="navIcons"
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            />
          </span>
        </div>
      </div>

      <span className=" rightIcon xIcon" style={isX} onClick={blurHandler}>
        <CloseIcon
          style={iconStyle}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        />
      </span>
    </div>
  );
}

export default NavBar;
export { mouseOut, mouseOver, iconStyle };
