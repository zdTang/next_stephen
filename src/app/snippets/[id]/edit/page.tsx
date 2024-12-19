import { notFound } from "next/navigation";
import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";
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
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default Page;
