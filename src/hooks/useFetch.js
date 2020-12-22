import React from "react";

export default function useFetch(url) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(`Warn message: ${data.message}`);
          setError("Error fetching data. Try again.");
          setLoading(false);
        } else {
          setData(data);
          setError(null);
          setLoading(false);
        }
      })

      .catch((e) => {
        console.warn(`Warn message: ${e.message}`);
        setError("Error fetching data. Try again.");
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
}
