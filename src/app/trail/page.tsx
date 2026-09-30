import { redirect } from "next/navigation";

// The trail map lives on the homepage now — /trail forwards there.
export default function TrailRedirectPage() {
  redirect("/");
}
