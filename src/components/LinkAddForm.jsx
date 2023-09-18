import { useLink } from "../utils/uselink";

import SinglePlateFormGroup from "./SinglePlateFormGroup";

export default function LinkAddForm() {
  const { links } = useLink();

  console.log(links);

  return (
    <div className="mt-10 flex flex-col gap-11">
      {links?.map((link, index) => {
        return <SinglePlateFormGroup key={link.id} link={link} index={index} />;
      })}
    </div>
  );
}
