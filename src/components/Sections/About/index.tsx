import Image from "next/image";
import { Label } from "../../Label";
import aboutProfile from "@/assets/about_profile.jpg";

export const AboutSection = () => (
  <section
    className="flex flex-col items-center justify-center  px-4 py-16 bg-sub-background lg:px-28 lg:py-24"
    id="about"
  >
    <Label title="About me" />    

    <div className="flex flex-col mt-24 gap-12 justify-center items-start w-full lg:flex-row">
      <div className="flex items-center justify-center w-2/4">
        <div className="relative">
          <Image
            src={aboutProfile}
            alt=""
            className="absolute w-[17.5rem] h-[23rem] left-5 bottom-5 border-[6px] border-sub-background lg:left-10 lg:bottom-10 lg:w-[40rem] lg:h-[30rem]"
          />
          <div className="bg-label w-[20rem] h-[22.5rem] border-[6px] border-sub-background lg:w-[25rem] lg:h-[30rem]"></div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-6 lg:w-2/4">
        <h2 className="text-title text-3xl">
          Curious? Here’s a little bit about me:
        </h2>

        <div className="flex flex-col gap-4 leading-6">
          <p className="text-text">
            Full Stack Developer with experience in logistics, e-commerce, and
            administration. Focused in web applications using React and Node.js,
            developing ERPs and management solutions. Worked in software houses,
            creating custom solutions for various industries. Currently focused
            on LCAP, integrations, and system analyses for large companies, such
            as Livelo and Renner, in addition to develo ping inventory and
            management applications for Sony.
          </p>
        </div>
      </div>
    </div>
  </section>
);
