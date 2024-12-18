import { notFound } from "next/navigation";
import { db } from "@/db";
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetShowPageProps) {
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
      <h1>snippit</h1>
    </div>
  );
}
