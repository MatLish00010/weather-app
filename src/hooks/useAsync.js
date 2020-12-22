import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunction, param, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    (param) => {
      setStatus("pending");
      setValue(null);
      setError(null);

      return asyncFunction(param)
        .then((res) => res.data)
        .then((response) => {
          setValue(response);
          setStatus("success");
        })
        .catch((error) => {
          setError(error);
          setStatus("error");
        });
    },
    [asyncFunction, param]
  );

  useEffect(() => {
    if (immediate) {
      execute(param);
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export default useAsync;
