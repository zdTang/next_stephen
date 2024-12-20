"use client";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
//import * as actions from "@/actions";  //@ represent /app, not /src

import SnippetFormAction from "@/actions";
interface SnippetNewPageProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetNewPageProps) {
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value: string = "", event: Event) {
    //console.log("here is the current model value:", value);
    setCode(value);
  }
  // Notice how to construct Action function
  // Need understand how bind() works
  const editSnippetAction = SnippetFormAction.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      {
        //"Notice how to construct Action function, Need understand how bind() works"
      }
      <form action={editSnippetAction}>
        <button className="border rounded m-2 p-2" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
