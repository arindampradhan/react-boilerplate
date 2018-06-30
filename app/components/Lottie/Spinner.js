/**
 * Spinner
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import data1 from './lottiefiles/around_and_back_loader.json';
import data2 from './lottiefiles/cup_game_loader_2.json';
import data3 from './lottiefiles/continuous_wave_loader.json';
import data4 from './lottiefiles/scaling_loader.json';
import data5 from './lottiefiles/continuous_wave_loader_2.json';
import data6 from './lottiefiles/leap_frog_loader.json';
import data7 from './lottiefiles/off_time_leap_frog_loader.json';
import data8 from './lottiefiles/side_to_side_loader.json';
import data9 from './lottiefiles/cup_game_loader.json';
import data10 from './lottiefiles/single_wave_loader.json';

function Spinner(props) {
  const loaderType = {
    1: data1,
    2: data2,
    3: data3,
    4: data4,
    5: data5,
    6: data6,
    7: data7,
    8: data8,
    9: data9,
    10: data10,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderType[props.type],
  };
  return <Lottie options={defaultOptions} {...props} />;
}

Spinner.defaultProps = {
  type: 1,
  height: 200,
  width: 200,
};

Spinner.propTypes = {
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

export default Spinner;
