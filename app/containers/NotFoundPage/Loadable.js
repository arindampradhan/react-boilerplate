/**
 * Asynchronously loads the component for NotFoundPage
 */
import Loadable from 'react-loadable';
import React from 'react';
import Spinner from 'components/Lottie/Spinner';

export default Loadable({
  loader: () => import('./index'),
  loading: Spinner,
});
