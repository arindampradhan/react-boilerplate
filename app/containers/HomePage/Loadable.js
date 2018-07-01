/**
 *
 * Asynchronously loads the component for HomePage
 *
 */

import React from 'react';
import Loadable from 'react-loadable';
import PageLoader from 'components/Lottie/PageLoader';

export default Loadable({
  loader: () => import('./index'),
  loading: () => <PageLoader type={2} />,
});
