import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import PostItem from "./components/PostItem";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const api = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;

  async function fetchData() {
    setIsLoading(true);
    try {
      let res = await fetch(api);
      let data = await res.json();
      setData(data);
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {err && <h1>{err}</h1>}
      {!isLoading && !err && (
        <>
          {data.map((post) => (
            <PostItem id={post.id} title={post.title} body={post.body} />
          ))}
          <div>
            <button
              disabled={page === 1}
              onClick={() => setPage((old) => old = 1)}
            >
              First page
            </button>
            <button
              disabled={page === 1}
              onClick={() => setPage((old) => old - 1)}
            >
              Prev
            </button>
            <button
              disabled={page === 10}
              onClick={() => setPage((old) => old + 1)}
            >
              Next
            </button>
            <button
              disabled={page === 10}
              onClick={() => setPage((old) => old = 10)}
            >
              Last page
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
