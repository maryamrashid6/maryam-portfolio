import { GirlBanner, GitHubSVG, HeroImage, LinkedInSVG } from "./assets";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="m-auto md:p-10 p-2 flex flex-col gap-10">
      <div className="flex md:flex-row flex-col gap-10 items-center justify-center">
        <div className="md:w-2/3 w-full flex flex-col gap-8">
          <div>
            <h1 className="font-h1 ">
              Hello, I'm{" "}
              <span className="text-primary extrabold">Maryam Rashid</span>
            </h1>

            <h1 className="font-h1 ">
              <span className="text-primary semibold">Frontend</span> Developer
            </h1>

            <h1 className="font-h1 ">
              Based In <span className="text-primary semibold">Pakistan</span>
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-p">
              Results-driven Front-End Software Engineer with 5 years of
              experience building high-performance web applications using modern
              JavaScript frameworks.
            </p>

            <p className="font-p">
              Adept at delivering engaging, mobile-first interfaces, optimizing
              performance, and collaborating cross-functionally to create
              seamless user experiences.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <Image src={HeroImage} alt="Hero Image" className="m-auto" />
        </div>
      </div>

      <div className="flex flex-row gap-4 justify-center md:justify-start">
        <Image
          src={GitHubSVG}
          alt="GitHub"
          width={50}
          height={50}
          className="hover:scale-110 transition-all duration-300"
        />

        <Image
          src={LinkedInSVG}
          alt="LinkedIn"
          width={100}
          height={100}
          className="hover:scale-110 transition-all duration-300"
        />
      </div>
    </div>
  );
}
