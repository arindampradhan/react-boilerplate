/**
 * Loader
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import loaderAnimationData2 from './lottiefiles/loader_2.json';
import loaderAnimationData1 from './lottiefiles/loader_1.json';
import loaderAnimationData3 from './lottiefiles/loader_3.json';

function Loader(props) {
  const loaderType = {
    1: loaderAnimationData1,
    2: loaderAnimationData2,
    3: loaderAnimationData3,
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderType[props.type]
  };
  return <Lottie options={defaultOptions} {...props} />;
}

Loader.defaultProps = {
  type: 1,
  height: 400,
  width: 400,
};

Loader.propTypes = {
  /**
   * 1 or 2 or 3
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

export default Loader;
