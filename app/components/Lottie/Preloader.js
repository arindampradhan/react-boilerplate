/**
 * Loader
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import loaderAnimationData2 from './lottiefiles/preloader2.json';
import loaderAnimationData1 from './lottiefiles/preloader.json';

function PreLoader(props) {
  const loaderType = {
    1: loaderAnimationData1,
    2: loaderAnimationData2,
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderType[props.type]
  };
  return <Lottie options={defaultOptions} {...props} />;
}

PreLoader.defaultProps = {
  type: 1,
  height: 200,
  width: 200,
};

PreLoader.propTypes = {
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

export default PreLoader;
