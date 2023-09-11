import HeaderSection from "../components/HeaderSection";
import LinksForm from "../components/LinksForm";
import LinksFrame from "../components/LinksFrame";

export default function HomePage() {
  return (
    <div className="bg-gray-100 flex flex-col gap-6">
      <HeaderSection />
      <main className="min-h-screen">
        <div className="container mx-auto flex gap-6 items-stretch">
          <LinksFrame />
          <LinksForm />
        </div>
      </main>
    </div>
  );
}
