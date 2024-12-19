interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
const Page = (props: SnippetEditPageProps) => {
  const id = parseInt(props.params.id);
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      Editing snippet with id {id}
    </div>
  );
};

export default Page;
