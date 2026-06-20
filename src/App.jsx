import useData from './assets/Generate.jss'
import './App.css'

function App() {
  const { joke, loading, error, fetchJoke } = useData();

  const k = joke?.setup || "";

    function Copy() {
    navigator.clipboard.writeText(k);
    alert("Copied!!")
  }

  return (
    <div className="bg-white w-75 p-4 mx-auto mt-10 rounded-lg">

      <h1 className="text-2xl font-bold text-center">
        Joke Generator
      </h1>

      <hr className="my-4" />

      {error && <p className="text-red-500">{error}</p>}

      {joke && (
        <>
          <p className="text-lg">{joke.setup}</p>
          <p className="text-lg font-semibold">{joke.punchline}</p>
        </>
      )}

      {loading && <p className="mt-2">Loading...</p>}

      <div className="flex gap-4 mt-4">
        <button
          onClick={fetchJoke}
          disabled={loading}
          className="bg-blue-500 text-red-500 px-4 py-2 rounded disabled:opacity-50 "
        >
          Generate
        </button>
        <button  className="bg-blue-500 text-red-500 px-4 py-2 rounded disabled:opacity-50 "
        onClick={Copy}
        disabled={loading}

        >
          Copy
        </button>
      </div>

    </div>
  );
}

export default App;
