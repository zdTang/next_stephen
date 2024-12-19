import { notFound } from "next/navigation";
import { db } from "@/db";
interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
const Page = async (props: SnippetEditPageProps) => {
  const snippetParams = await props.params;
  const id = parseInt(snippetParams.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) return notFound();

  return (
    <form className="">
      <div>Editing snippet with id {id}</div>
      <div>
        <textarea value={snippet?.code} />
      </div>
    </form>
  );
};

export default Page;
