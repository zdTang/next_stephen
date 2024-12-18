import { notFound } from "next/navigation";
import { db } from "@/db";
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // to simulate a loading with a artificial delay

  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });
  console.log(snippet);
  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <h1>{snippet.code}</h1>
    </div>
  );
}
