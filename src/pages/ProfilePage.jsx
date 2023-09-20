import { useState } from "react";

import HeaderSection from "../components/HeaderSection";
import LinksFrame from "../components/LinksFrame";
import ProfileDetails from "../components/ProfileDetails";

export default function ProfilePage() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <>
      <div className="bg-gray-100 flex flex-col gap-6">
        <HeaderSection />
        <main className="min-h-screen">
          <div className="container mx-auto flex gap-6 items-stretch">
            <LinksFrame details={details} />
            <ProfileDetails setDetails={setDetails} />
          </div>
        </main>
      </div>
    </>
  );
}
