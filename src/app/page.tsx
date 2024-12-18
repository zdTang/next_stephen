import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        <h2>{snippet.title}</h2>
      </div>
    );
  });

  return <div>{renderedSnippets}</div>;
}
