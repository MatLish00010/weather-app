import React from 'react';
import dataProcessing from './DataProcessing';
import PropTypes from 'prop-types';

export default function Content({
  data, name
}) {
  // eslint-disable-next-line max-len
  const isContent = React.useMemo(() => dataProcessing({ data }), [data]);
  return (
    <div>
      <h1>Weather for 5 days in {name}</h1>
      {isContent}
    </div>
  );
}

Content.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string
};
