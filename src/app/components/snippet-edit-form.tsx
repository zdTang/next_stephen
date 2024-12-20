"use client";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";

interface SnippetNewPageProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetNewPageProps) {
  function handleEditorChange(value: any, event: Event) {
    console.log("here is the current model value:", value);
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
