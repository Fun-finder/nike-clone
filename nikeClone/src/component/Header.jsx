import React, { useState } from "react";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import EmojiNatureOutlinedIcon from "@material-ui/icons/EmojiNatureOutlined";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    }
  }
});

function Header() {
  const [mouseOver1, setMouseOver1] = useState(false);
  const [mouseOver2, setMouseOver2] = useState(false);

  function overMaterial(event) {
    const id = event.target.name;
    if (id === "firstIcon") {
      setMouseOver1(true);
    } else if (id === "secondIcon") {
      setMouseOver2(true);
    }
  }
  function outMaterial(event) {
    const id = event.target.name;
    if (id === "firstIcon") {
      setMouseOver1(false);
    } else if (id === "secondIcon") {
      setMouseOver2(false);
    }
  }

  return (
    <div className="Header">
      <span className="header-span headerLeft">
        <ThemeProvider theme={theme}>
          <a
            name="firstIcon"
            className="headerIcons"
            onMouseOver={overMaterial}
            onMouseOut={outMaterial}
            href="/"
          >
            <WhatshotOutlinedIcon color={mouseOver1 ? "action" : "primary"} />
          </a>
          <a
            name="secondIcon"
            onMouseOver={overMaterial}
            onMouseOut={outMaterial}
            className="headerIcons"
            href="/"
          >
            <EmojiNatureOutlinedIcon
              color={mouseOver2 ? "action" : "primary"}
            />
          </a>
        </ThemeProvider>
      </span>
      <span className="header-span headerRight">
        <ul>
          <li className="headerList listline">
            <a href="/">고객센터</a>{" "}
          </li>
          <li className="headerList listline">
            <a href="/">멤버 가입</a>{" "}
          </li>
          <li className="headerList">
            <a href="/">로그인</a>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default Header;
