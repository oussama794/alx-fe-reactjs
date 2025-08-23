import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true, 
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts (Page {page})</h2>

      {isFetching && <p>Refreshing data...</p>}

      <ul>
        {posts?.map((post) => (
          <li key={post.id} style={{ marginBottom: "8px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          style={{ marginLeft: "10px" }}
          disabled={page === 20} 
        >
          Next
        </button>
      </div>
    </div>
  );
}
