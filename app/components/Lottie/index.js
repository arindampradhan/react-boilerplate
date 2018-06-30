/**
 *
 * LottieTest
 *
 */

import React from 'react';
import Lottie from 'react-lottie'
import jarAnimationData from './lottiefiles/jar.json';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class LottieTest extends React.Component {
  state = { isStopped: false, isPaused: false };

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto',
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: jarAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          stop
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: false })}
        >
          play
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          pause
        </button>
      </div>
    );
  }
}

LottieTest.propTypes = {};

export default LottieTest;
