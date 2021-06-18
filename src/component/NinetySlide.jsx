import React from "react";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
const imgs = [
  "https://images.unsplash.com/4/madebyvadim.jpg?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/7/Top_view.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1443173644264-35801f600a45?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
];
function renderImg(imgURL, index) {
  return <img key={index} className="ninetyImg" src={imgURL} alt="" />;
}

export default function NinetySlide() {
  return (
    <div className="NinetyContainer">
      <div className="ninety-slider">
        <div className="ninetySlide">
          {imgs.map((img, index) => {
            return renderImg(img, index);
          })}
        </div>
      </div>
      <div className="preButton">
        <ArrowBackIosOutlinedIcon />
      </div>
      <div className="nextButton">
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div>
  );
}
