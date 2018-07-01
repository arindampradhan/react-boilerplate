/**
 *
 * AnimationKit
 *
 */
// TODO: fix thid mess
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from 'animate.css/animate.css';
import CSSTransition from 'react-transition-group/CSSTransition';

const Wrap = styled.div`
  .wrapper > .animated-enter {
    animation: ${props => `${props.duration}s ${props.enter} ${props.curve}`};
  }
  .wrapper > .animated-enter.animated-enter-active {
  }
  .wrapper > .animated-exit {
    animation: ${props => `${props.delay || props.duration}s ${props.leave} ${props.cur}`};
  }
  .wrapper > .animated-exit.animated-exit-active {
  }
`;

export const Animate = ({ enter, leave, duration, delay, count, children }) => (
  <Wrap
    enter={enter}
    leave={leave}
    duration={duration}
    delay={delay}
    count={count}
  >
    <CSSTransition classNames="fade">{children}</CSSTransition>
  </Wrap>
);

Animate.propTypes = {
  children: PropTypes.node.isRequired,
  enter: PropTypes.string,
  leave: PropTypes.string,
  duration: PropTypes.any,
  count: PropTypes.any,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

Animate.defaultProps = {
  enter: 'fadeIn',
  leave: 'fadeOut',
  duration: 2000,
  count: 'infinite',
  duration: 0.275,
  delay: 1,
};

export default Animate;
