import { useState } from "react";

function useData() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch joke");
      }

      const data = await res.json();
      setJoke(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { joke, loading, error, fetchJoke };
}

export default useData;
