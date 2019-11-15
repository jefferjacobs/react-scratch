import React from 'react';

function ParamsView({ match }: { match: any }) {
  return (
    <div className="ParamsView">
      <h1>Params</h1>
      { match.params ? match.params.param : undefined }
    </div>
  )
}

export default ParamsView;