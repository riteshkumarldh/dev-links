export default function LinksFormTop({ title, description }) {
  return (
    <>
      <h2 className="font-bold text-3xl md:text-4xl mb-2">{title}</h2>
      <p className="text-gr-200 mb-10">{description}</p>
    </>
  );
}
