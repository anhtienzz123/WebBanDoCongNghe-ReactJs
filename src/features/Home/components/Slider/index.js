import React from "react";
import PropTypes from "prop-types";

import { Carousel, Image } from "antd";

const contentStyle = {
  color: "#fff",
  lineHeight: "350px",
  textAlign: "center",
  background: "#364d79",
};

Slider.propTypes = {
  sliders: PropTypes.array,
};

Slider.defaultProps = {
  sliders: [],
};

function Slider(props) {
  const { sliders } = props;

  return (
    <div className="slider">
      <Carousel autoplay>
        {sliders.map((s, index) => {
          const { id, title, image } = s;

          return (
            <div>
              <img style={{ width: "100%" }} src={image} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
