import React from 'react';

function HOCWrapper(Component: any) {
  return <Component testProp="test" />;
}

export default HOCWrapper;
