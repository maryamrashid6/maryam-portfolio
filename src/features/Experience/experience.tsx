import Image from "next/image";
import { BeyondOneLogo, ZaytricsLogo, Folio3Logo } from "./assets";

export default function Experience() {
  const experience = [
    {
      company: "Beyond One",
      title: "Software Engineer-II",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      logo: BeyondOneLogo,
      startDate: "May 2025",
      endDate: "Present",
    },
    {
      company: "Folio3",
      title: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      logo: Folio3Logo,
      startDate: "Aug 2021",
      endDate: "May 2025",
    },
    {
      company: "Zaytrics Solutions",
      title: "Junior Software Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      logo: ZaytricsLogo,
      startDate: "May 2021",
      endDate: "Aug 2021",
    },
  ];
  return (
    <div className="m-auto md:p-10 p-2 flex flex-col gap-3">
      {experience.map((experience) => (
        <div
          key={experience.company}
          className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-4"
        >
          <div className="flex sm:flex-row flex-col gap-2 justify-between sm:items-center items-start">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={50}
                height={50}
              />
              <h3 className="text-primary semibold">
                {experience.title} at {experience.company}
              </h3>
            </div>
            <div>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
          </div>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
}
