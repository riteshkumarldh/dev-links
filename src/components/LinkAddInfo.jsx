import infoImage from "../assets/images/started.svg";

export default function LinkAddInfo() {
  return (
    <div className="py-20 rounded-3xl mt-6 flex flex-col items-center bg-[#FAFAFA]">
      <figure className="mb-10">
        <img src={infoImage} alt="infoImage" />
      </figure>
      <h2 className="font-bold text-3xl md:text-4xl text-gr-300 mb-2 text-center">
        Let’s get you started
      </h2>
      <p className="text-gr-200 text-center max-w-md mx-auto">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
}
