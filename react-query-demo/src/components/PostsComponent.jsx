import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],     
    queryFn: fetchPosts,     
    staleTime: 5000,        
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        style={{ marginBottom: "10px" }}
        disabled={isFetching}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "8px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
