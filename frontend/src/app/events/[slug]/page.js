import { redirect } from "next/navigation";

export default async function Page({ params }) {
    redirect(`/events#${params.slug}`);
}
