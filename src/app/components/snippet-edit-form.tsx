"use client";
import type { Snippet } from "@prisma/client";

interface SnippetNewPageProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetNewPageProps) {
  return <div>Client component.</div>;
}
