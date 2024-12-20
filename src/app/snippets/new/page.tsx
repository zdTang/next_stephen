"use client";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

export default function SnippetCreatePage() {
  const [state, SnippetFormAction] = useFormState(actions.createSnippet, {
    message: "",
  });
  return (
    <form action={SnippetFormAction}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        {state.message ? (
          <div className="p-2 my-2 bg-red-200 border rounded border-red-200 ">
            {state.message}
          </div>
        ) : null}
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
