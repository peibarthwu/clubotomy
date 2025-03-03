import { type SanityDocument } from "next-sanity";
import { sanityClient } from "../lib/sanityClient";
import CardLayout from "@/components/CardLayout";

// Adjust the query to fetch the single "home" document
const HOME_QUERY = `*[
  _type == "home"
  && defined(slug.current)
][0]{_id, title, date, slug, text}`;

const options = { next: { revalidate: 86400 } };

export default async function IndexPage() {
  // Fetch the single "home" document
  const homeDocument = await sanityClient.fetch<SanityDocument>(HOME_QUERY, {}, options);

  // If there is no home document, return a message
  if (!homeDocument) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <h1 className="text-4xl font-bold mb-8">Home Document Not Found</h1>
      </main>
    );
  }

  return (
    <main>
      <CardLayout title={homeDocument.title} date={new Date(homeDocument.date).toLocaleDateString()} link={homeDocument.slug.current} text={homeDocument.text} socialurl={homeDocument.social_slug} socialusername={homeDocument.social_username}/>
    </main>
  );
}
