"use client";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
//import * as actions from "@/actions";  //@ represent /app, not /src

import { SnippetFormAction } from "@/actions";
interface SnippetNewPageProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetNewPageProps) {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "", event: Event) {
    //console.log("here is the current model value:", value);
    setCode(value);
  }

  return (
    <Editor
      height="40vh"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={snippet.code}
      options={{ minimap: { enabled: false } }}
      onChange={handleEditorChange}
    />
  );
}
