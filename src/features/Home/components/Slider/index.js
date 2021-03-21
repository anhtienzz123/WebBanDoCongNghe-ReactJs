import React from "react";
import PropTypes from "prop-types";

import { Carousel } from "antd";

const contentStyle = {
  color: "#fff",
  lineHeight: "350px",
  textAlign: "center",
  background: "#364d79",
};

Slider.propTypes = {};

function Slider(props) {
  return (
    <div className="slider">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
