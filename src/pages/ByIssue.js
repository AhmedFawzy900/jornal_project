import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import img from "../images/cover_en.jpg";
export default function ByIssue() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div className="container">
      <div className="about-title">By Issue</div>
      <div class="lead size-15">
        Click on favorite issue to see related articles.
      </div>
      <div class="divider divider-center divider-color">
        <i class="fa fa-chevron-down"></i>
      </div>

      {/* collabse */}
      <button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="issue-btn "
        >
        <div className="d-flex justify-content-between position-relative p-2">
            <div style={{ color:"black" }}>volume 64</div>
            <div style={{ color:"black" }}><i class="fa fa-chevron-down"></i></div>
        </div>
        </button>
        <Collapse in={open}>
            <div id="example-collapse-text" className="row">
                <div className="col-md-2 col-sm-4">
                    <img className="issue-img" src={img} alt=""/>
                    <p className="issue-p tag_a text-bold" style={{ textAlign : "center" }}>Issue 1</p>
                </div>
                <div className="col-md-2 col-sm-4">
                    <img className="issue-img" src={img} alt=""/>
                    <p className="issue-p tag_a text-bold" style={{ textAlign : "center" }}>Issue 1</p>
                </div>
                <div className="col-md-2 col-sm-4">
                    <img className="issue-img" src={img} alt=""/>
                    <p className="issue-p tag_a text-bold" style={{ textAlign : "center" }}>Issue 1</p>
                </div>
                <div className="col-md-2 col-sm-4">
                    <img className="issue-img" src={img} alt=""/>
                    <p className="issue-p tag_a text-bold" style={{ textAlign : "center" }}>Issue 1</p>
                </div>
            </div>
        </Collapse>
        {/* end collabse */}
      {/* collabse */}
      <button
            onClick={() => setOpen1(!open1)}
            aria-controls="example-collapse-text"
            aria-expanded={open1}
            className="issue-btn "
        >
        <div className="d-flex justify-content-between position-relative p-2">
            <div style={{ color:"black" }}>volume 64</div>
            <div style={{ color:"black" }}><i class="fa fa-chevron-down"></i></div>
        </div>
        </button>
        <Collapse in={open1}>
            <div id="example-collapse-text" className="row">
                <div className="col-md-2 col-sm-4">
                    <img className="issue-img" src={img} alt=""/>
                    <p className="issue-p tag_a text-bold" style={{ textAlign : "center" }}>Issue 1</p>
                </div>
                <div className="col-md-2 col-sm-4">
                    <img className="issue-img" src={img} alt=""/>
                    <p className="issue-p tag_a text-bold" style={{ textAlign : "center" }}>Issue 1</p>
                </div>
                <div className="col-md-2 col-sm-4">
                    <img className="issue-img" src={img} alt=""/>
                    <p className="issue-p tag_a text-bold" style={{ textAlign : "center" }}>Issue 1</p>
                </div>
                <div className="col-md-2 col-sm-4">
                    <img className="issue-img" src={img} alt=""/>
                    <p className="issue-p tag_a text-bold" style={{ textAlign : "center" }}>Issue 1</p>
                </div>
            </div>
        </Collapse>
        {/* end collabse */}
    </div>
  );
}
