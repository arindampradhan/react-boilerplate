/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import svgUrl, { ReactComponent as Star } from 'images/umbrella.svg';

import H1 from 'components/H1';
import messages from './messages';

export default function NotFound() {
  return (
    <article>
      <Star height="20" />
      <img src={svgUrl} alt="svg" />
      <br />
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </article>
  );
}
