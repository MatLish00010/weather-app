import React from "react";
import PropTypes from "prop-types";
import dataProcessing from "./DataProcessing";

export default function Content({ data, name }) {
  const isContent = React.useMemo(() => dataProcessing({ data }), [data]);
  return (
    <div>
      <h1>Weather for 5 days in {name}</h1>
      {isContent}
    </div>
  );
}

Content.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  data: PropTypes.array,
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
};
