import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const FadeWrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export function RouterTransition(props) {
  return (
    <FadeWrapper>
      <TransitionGroup>
        <CSSTransition timeout={{ enter: 300, exit: 300 }} classNames="fade">
          {props.children}
        </CSSTransition>
      </TransitionGroup>
    </FadeWrapper>
  );
}
