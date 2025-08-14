import { useQuery } from "react-zustand-query";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Query Demo Component
function UseQueryDemo() {
  const { data, error, isLoading, refetch } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
    retry: true,
    staleTime: 1000 * 60 * 0.2, // 12 seconds
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const list = data || [];

  return (
    <div>
      <h1>Posts List (useQuery Demo)</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <div style={{ marginTop: "20px" }}>
        {list.map((post: Post) => (
          <div
            key={post.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseQueryDemo;
