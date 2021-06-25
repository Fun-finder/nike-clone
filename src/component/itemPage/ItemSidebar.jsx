import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export default function ItemSidebar() {
  return (
    <div className="item-sidebar">
      <div className="item-sidebar-box">
        <div className="item-sidebar-title">
          스포츠
          <ExpandLessIcon className="item-icons" />{" "}
        </div>
        <div className="item-sidebar-sel">
          <form action="submit">
            <ul className="item-sidebar-chk">
              <li>
                <input type="checkbox" id="lifeStyle" />
                <label for="lifeStyle"></label> 라이프스타일
              </li>
              <li>
                <input type="checkbox" /> 러닝
              </li>
              <li>
                <input type="checkbox" /> 농구
              </li>
              <li>
                <input type="checkbox" /> 축구
              </li>
              <li>
                <input type="checkbox" /> 트레이닝&짐
              </li>
              <li className="fold">
                <input type="checkbox" /> 골프
              </li>
              <li className="fold">
                <input type="checkbox" /> 스케이트보딩
              </li>
              <li className="fold">
                <input type="checkbox" /> 테니스
              </li>
            </ul>
          </form>
          <div className="item-sidebar-fold icon-container">
            <AddIcon class=" item-icons item-sidebar-icons" />
            <span className="after-icon"> 더보기</span>
          </div>
          <div className="item-sidebar-fold icon-container fold">
            <RemoveIcon class=" item-icons item-sidebar-icons" />
            <span className="after-icon"> 접기</span>
          </div>
        </div>
      </div>
      {/* duplicated */}
      <div className="item-sidebar-box">
        <div className="item-sidebar-title">
          색상
          <ExpandLessIcon className="item-icons" />{" "}
        </div>
        <div className="item-sidebar-sel">
          <form action="submit" name="color">
            <ul className="item-sidebar-chk">
              <li>
                <input type="checkbox" id="lifeStyle" />
                <label for="lifeStyle"></label> 베이스레이어 상의
              </li>
              <li>
                <input type="checkbox" /> 그래픽티
              </li>
              <li>
                <input type="checkbox" /> 레깅스
              </li>
              <li>
                <input type="checkbox" /> 폴로
              </li>
              <li>
                <input type="checkbox" /> 트레이닝 팬츠
              </li>
              <li className="fold">
                <input type="checkbox" /> 탱크탑
              </li>
              <li className="fold">
                <input type="checkbox" /> 점프수트
              </li>
            </ul>
            <div className="item-sidebar-fold icon-container">
              <AddIcon class=" item-icons item-sidebar-icons" />
              <span className="after-icon"> 더보기</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
