"use server";
import { redirect } from "next/navigation";
import { db } from "@/db";
export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect(`/`);
}

export async function createSnippet(
  currentState: { message: string },
  formData: FormData
) {
  // Check the user's inputs and make sure they are valid
  const title = formData.get("title");
  const code = formData.get("code");

  try {
    if (typeof title !== "string" || title.length < 8) {
      return {
        message: "Title must be longer",
      };
    }

    if (typeof code !== "string" || code.length < 8) {
      return {
        message: "Code must be longer",
      };
    }

    // Database operation
    const snippet = await db.snippet.create({ data: { title, code } });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Something went wrong",
      };
    }
    // Redirect the user back to the root route
  }
  redirect("/");
}
