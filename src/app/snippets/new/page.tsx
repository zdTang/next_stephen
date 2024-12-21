"use client";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { useActionState, useState } from "react";
//import { useFormState } from "react-dom";
import * as actions from "@/actions";

interface FormState {
  message: string;
}

export default function SnippetCreatePage() {
  const [state, SnippetFormAction] = useActionState(actions.createSnippet, {
    message: "",
  });

  const [localState, setLocalState] = useState({
    title: "",
    code: "",
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setLocalState({ ...localState, title: value });
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setLocalState({ ...localState, code: value });
  };

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
            value={localState.title as string} //  Controlled input with the state
            onChange={handleTitleChange}
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
            value={localState.code as string} // Controlled input with the state
            onChange={handleCodeChange}
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
