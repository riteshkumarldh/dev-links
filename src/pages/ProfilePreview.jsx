import PreviewTopBar from "../components/PreviewTopBar";
import ProfileLinksPreview from "../components/ProfileLinksPreview";

export default function ProfilePreview() {
  return (
    <main className="h-[140vh]">
      <div className="h-96 bg-blue-700 rounded-bl-3xl rounded-br-3xl pt-10 px-10 ">
        <PreviewTopBar />
        <ProfileLinksPreview />
      </div>
    </main>
  );
}
