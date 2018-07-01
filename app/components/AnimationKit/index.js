/**
 *
 * AnimationKit
 *
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import Animate from './Animate';

const animationTypes = [
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shake',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',
  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'flipInX',
  'flipInY',
  'flipOutX',
  'flipOutY',
  'lightSpeedIn',
  'lightSpeedOut',
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',
  'rotateOut',
  'rotateOutDownLeft',
  'rotateOutDownRight',
  'rotateOutUpLeft',
  'rotateOutUpRight',
  'hinge',
  'jackInTheBox',
  'rollIn',
  'rollOut',
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',
  'zoomOut',
  'zoomOutDown',
  'zoomOutLeft',
  'zoomOutRight',
  'zoomOutUp',
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'slideOutDown',
  'slideOutLeft',
  'slideOutRight',
  'slideOutUp',
];

export class AnimateKit extends Component {
  state = {
    type: 'fadeIn',
  };

  render() {
    return (
      <div>
        <select
          value={this.state.type}
          onChange={e => this.setState({ type: e.target.value })}
        >
          {animationTypes.map((item, x) => (
            <option key={x} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Animate enter={this.state.type}>
          <div className="card col-md-5">
            <h2>Animate me</h2>
          </div>
        </Animate>
      </div>
    );
  }
}

AnimateKit.defaultProps = {};

export default AnimateKit;
