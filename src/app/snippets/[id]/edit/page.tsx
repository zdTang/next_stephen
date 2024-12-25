import { notFound } from "next/navigation";
import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";
interface SnippetEditPageProps {
  params:
    | Promise<{
        id: string;
      }>
    | {
        id: string;
      };
}

const Page = async (props: SnippetEditPageProps) => {
  const snippetParams = props.params; // Ensure params are awaited
  const id = parseInt(snippetParams.id, 10); // Parse the id as an integer

  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default Page;
