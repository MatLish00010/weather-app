import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunction, param, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    (par) => {
      setStatus("pending");
      setValue(null);
      setError(null);

      return asyncFunction(par)
        .then((res) => res.data)
        .then((response) => {
          setValue(response);
          setStatus("success");
        })
        .catch((err) => {
          setError(err);
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

  return {
    execute,
    status,
    value,
    error,
  };
};

export default useAsync;
