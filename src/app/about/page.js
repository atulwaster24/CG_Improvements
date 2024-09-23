import Image from "next/image";
import Link from "next/link";
import React from "react";
import CTA from "../components/CTA";

const About = () => {
  let data = [
    {
      subheading: "Fight Against Corruption",
      content:
        "Throughout her tenure, Geeta Jain has been a staunch advocate for transparency and anti-corruption measures. Her efforts in tackling corruption have earned her recognition as a principled leader committed to ethical governance.",
    },
    {
      subheading: "Infrastructure Development",
      content:
        "Geeta has played a pivotal role in the development of key infrastructure projects, including metro development and Water RORO (Roll-On/Roll-Off) services. These initiatives have been instrumental in enhancing the city's connectivity and overall quality of life.",
    },
    {
      subheading: "COVID-19 Response",
      content:
        "During the COVID-19 pandemic, Geeta Jain demonstrated exceptional leadership by implementing effective measures to safeguard public health. Her initiatives included coordinating relief efforts and ensuring the availability of essential services for the community.",
    },
    {
      subheading: "Secure Funds",
      content:
        "Geeta has been successful in securing crucial funds for various projects in Mira Bhayander, contributing to the city's growth and development. Her ability to mobilize resources has been a key factor in advancing the region's progress.",
    },
  ];
  return (
    <div className="container flex lg:gap-10 flex-col">
      <div>
        <div className="flex w-full items-center justify-center h-auto py-12 px-2">
          <Image
            src="/assets/Header_Banner.png"
            alt="Geeta Bharat Jain"
            width={850}
            height={200}
          />
        </div>
      </div>

      {/* About Section Body */}
      <div className="about-section rounded-lg p-8 pb-24 lg:p-12">
        <div className="mb-8">
          <h1 className="text-CG_Blue text-center text-xl uppercase lg:text-4xl font-bold">
            Detailed Biography
          </h1>
        </div>

        <div className="flex flex-col justify-center lg:flex-row gap-12 flex-wrap">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="border-2 basis-1/2 p-4 lg:p-12 flex gap-8 flex-col rounded-lg hover:shadow-2xl transition-transform duration-300 ease-in hover:scale-105  hover:bg-amber-50 hover:text-CG_Blue">
              <div className="text-center">
                <h1 className="font-bold text-2xl text-CG_Blue underline">
                  Background
                </h1>
              </div>
              <div className=" border border-CG_Orange rounded-lg p-4">
              <p>
              <span className="text-2xl">G</span>eeta Jain is a prominent political leader known for her
                dedication and significant contributions to the development of
                Mira Bhayander.<br /><br /> With a strong commitment to public service, she
                has become a notable figure in the political landscape of the
                region.<br /><br /> Her leadership is characterized by a focus on integrity,
                effective governance, and progressive initiatives aimed at
                improving the quality of life for her constituents.
              </p>
              </div>
            </div>
            <div className="border-2 basis-1/2 p-4 lg:p-12 flex gap-8 flex-col rounded-lg hover:shadow-2xl transition-transform duration-300 ease-in hover:scale-105   hover:bg-amber-50 hover:text-CG_Blue">
              <div className="text-center">
                <h1 className="font-bold text-2xl text-CG_Blue underline">
                  Education
                </h1>
              </div>
              <div className=" border border-CG_Orange rounded-lg p-4">
                <p>
                  <span className="text-2xl">G</span>eetaji&apos;s academic journey began at M.A. School in
                  Andheri, where she completed her 10th standard education with
                  distinction. Her quest for knowledge continued as she pursued
                  higher secondary education in the science stream at the
                  prestigious Bhavans College in Mumbai. Her diligence and
                  intelligence were prominent throughout her school years,
                  reflecting her unwavering commitment to learning.<br /><br /> Furthering
                  her education, Geetaji enrolled at P.V.T. Polytechnic College
                  in Santacruz, where she obtained a Diploma in Medical
                  Laboratory Technology (DMLT). This specialized degree equipped
                  her with essential skills in medical diagnostics, enhancing
                  her capability to contribute effectively in the healthcare
                  sector. Her educational journey was marked by a profound
                  understanding of the value of knowledge, which she believed
                  was an invaluable inheritance that could not be claimed by
                  others.
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 basis-2/3 p-4 lg:p-12 flex gap-8 flex-col rounded-lg hover:shadow-2xl transition-transform duration-300 ease-in hover:scale-105 hover:bg-amber-50 hover:text-CG_Blue">
            <div className="text-center">
              <h1 className="font-bold text-2xl text-CG_Blue underline">
                Career Milestones
              </h1>
            </div>
            <div>
              <h3 className="text-xl text-center">
                Geeta Jain&apos;s career is marked by a series of significant
                milestones that underscore her contributions to Mira Bhayandar.
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="w-[90%] lg:w-[75%] border border-CG_Orange rounded-lg p-4"
                >
                  <p className="">
                    <span className="font-bold ">
                      {item.subheading + " : "}
                    </span>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold text-center">Geeta Jain&apos;s career is a testament to her unwavering dedication to public service and her commitment to driving positive change in her community. There&apos;s much more to her story than can be captured here.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default About;
