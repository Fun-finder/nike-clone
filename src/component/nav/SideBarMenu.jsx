import React from "react";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import EmojiNatureOutlinedIcon from "@material-ui/icons/EmojiNatureOutlined";
import SendIcon from "@material-ui/icons/Send";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

function arrow() {
  return (
    <ArrowForwardIosOutlinedIcon
      style={{
        fontSize: "15px",
        float: "right",
        verticalAlign: "middle",
        position: "absolute",
        right: 0,
        paddingTop: "20px"
      }}
    />
  );
}

export default function SideBarMenu() {
  return (
    <div id="SideBarMenu">
      <div className="firstSideBar">
        <div className="menu-wrapper">
          <ul>
            <li name="new">New Releases{arrow()}</li>
            <li name="men">Men{arrow()}</li>
            <li name="women">Women{arrow()}</li>
            <li name="kids">Kids{arrow()}</li>
            <li name="sale">SALE{arrow()}</li>
            <li>SNKRS</li>
            <li name="brand">Brand{arrow()}</li>
          </ul>
        </div>
        <div className="otherBrands">
          <div className="brands">
            <WhatshotOutlinedIcon className="sideMenu-icons" />
            <span className="side-span"> Jordan</span>
          </div>
          <div className="brands">
            <EmojiNatureOutlinedIcon className="sideMenu-icons" />
            <span className="side-span"> Converse</span>
          </div>
        </div>
        <div className="login">
          <p className="side-login-p">
            '나이키 맴버만을 위한 특별한 혜택을 알아보세요.
            <span>자세히 보기</span>'
          </p>
          <button className="bannerButton">맴버 가입</button>
          <button
            className="bannerButton"
            style={{
              border: "#999 1px solid",
              backgroundColor: "white",
              color: "black"
            }}
          >
            로그인
          </button>
        </div>
        <div className="side-bottom">
          <div className="relative-wrapper">
            <LocalMallOutlinedIcon className="side-bottom-icon" />
            <span className="side-span">장바구니</span>
          </div>
          <div className="relative-wrapper">
            <SendIcon className="side-bottom-icon" />
            <span className="side-span">주문배송</span>
          </div>
          <div className="relative-wrapper">
            <HelpOutlineOutlinedIcon className="side-bottom-icon" />
            <span className="side-span">고객센터</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function realse() {
  return <div className="menu-wrapper"></div>;
}
