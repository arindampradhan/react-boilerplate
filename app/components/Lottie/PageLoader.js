/**
 * Loader
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

import data1 from './lottiefiles/animation-w1080-h1080.json';
import data2 from './lottiefiles/animation-w200-h200.json';
import data3 from './lottiefiles/progress_bar.json';
import data4 from './lottiefiles/animation-w1920-h1080.json';
import data5 from './lottiefiles/animation-w800-h600.json';
import data6 from './lottiefiles/nosimple.json';

function PageLoader(props) {
  const loaderType = {
    1: data1,
    2: data2,
    3: data3,
    4: data4,
    5: data5,
    6: data6,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderType[props.type],
  };
  return <Lottie options={defaultOptions} {...props} />;
}

PageLoader.defaultProps = {
  type: 1,
  height: 200,
  width: 200,
};

PageLoader.propTypes = {
  /**
   * 1 or 2 or 3 and likewise
   */
  type: PropTypes.number,
  /**
   * height of the element
   */
  height: PropTypes.number,
  /**
   * width of the element
   */
  width: PropTypes.number,
};

export default PageLoader;
