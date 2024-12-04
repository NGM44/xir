"use client";
import { useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn, limitString } from "@/lib/utils";
import HeroPage from "./overview/Hero";
import CTA1 from "./overview/CTA1";
import CTA3 from "./overview/CTA3";
import FAQ from "./overview/Faq";
import Footer from "./overview/Footer";
import TabSelector from "./Tabs";

export interface CompanyModel {
  name: string;
  subtitle: string;
  description: string;
  link: string;
  key?: string[];
  category: string;
  image: string;
}

export const ParallaxScroll = ({
  companies2,
  className,
}: {
  companies2: CompanyModel[];
  className?: string;
}) => {
  const companies = companies2.filter(
    (company) =>
      company.name &&
      company.image &&
      company.link &&
      company.description &&
      company.category
  );
  const [activeTab, setActiveTab] = useState<string[]>([]);
  const gridRef = useRef(null);
  console.log("company");
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });
  const company = useMemo(() => {
    return activeTab.length === 0
      ? companies
      : companies.filter((ele) => activeTab.includes(ele.category));
  }, [companies, activeTab]);

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const fourth = Math.ceil(company.length / 4);

  const firstPart = company.slice(0, fourth);
  const secondPart = company.slice(fourth, 2 * fourth);
  const thirdPart = company.slice(2 * fourth, 3 * fourth);
  const fourthPart = company.slice(3 * fourth);
  const handleClick = (link:string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col">
      <div className="relative isolate bg-gray-900 h-screen">
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="bg-transparent">
          <div
            className={cn(
              "h-screen items-start bg-transparent overflow-y-auto w-full",
              className
            )}
            ref={gridRef}
          >
            <HeroPage />
            <TabSelector
              selectedTabs={activeTab ?? []}
              setSelectedTabs={setActiveTab}
            />
            <div
              className="grid grid-cols-1 bg-transparent md:grid-cols-2 lg:grid-cols-4 items-start max-w-7xl mx-auto gap-8 py-12 px-6"
              ref={gridRef}
            >
              <div className="grid gap-8 ">
                {firstPart.map((el, idx) => (
                  <motion.div
                    onClick={() => {
                      handleClick(el.link);
                    }}
                    style={{ y: translateFirst }}
                    key={"grid-1" + idx}
                    className="relative group w-full h-80  items-center justify-center rounded-3xl overflow-x-hidden"
                  >
                    {/* Using a placeholder image since the data structure doesn't include an image */}
                    <Image
                      src={el.image}
                      className="h-80 w-full object-contain bg-gradient-to-tr rounded-3xl from-gray-300/30 via-gray-200/20 to-gray-200/30 items-center !m-0 !px-4"
                      height={400}
                      width={400}
                      alt={`${el.name} logo`}
                    />

                    {/* Overlay that appears on hover */}
                    <div className="absolute  inset-0 bg-black/70 opacity-0 rounded-3xl group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div className="">
                        <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {el.name}
                        </h3>
                        {/* <p className="text-white/90 text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {limitString(el.subtitle, 20)}
                      </p> */}
                      </div>
                      <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        {limitString(el.description, 150)}
                      </p>
                      <span className="text-white/70 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                        {el.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-8">
                {secondPart.map((el, idx) => (
                  // <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
                  //   <Image
                  //     src={el.image}
                  //     className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                  //     height="400"
                  //     width="400"
                  //     alt="thumbnail"
                  //   />
                  // </motion.div>

                  <motion.div
                    onClick={() => {
                      handleClick(el.link);
                    }}
                    style={{ y: translateSecond }}
                    key={"grid-2" + idx}
                    className="relative w-full h-80  group cursor-pointer overflow-x-hidden items-center justify-center rounded-3xl"
                  >
                    {/* Using a placeholder image since the data structure doesn't include an image */}
                    <Image
                      src={el.image}
                      className="h-80 w-full object-contain bg-gradient-to-tr rounded-3xl from-gray-300/30 via-gray-200/20 to-gray-200/30 items-center !m-0 !px-4"
                      height={400}
                      width={400}
                      alt={`${el.name} logo`}
                    />

                    {/* Overlay that appears on hover */}
                    <div className="absolute  inset-0 bg-black/70 opacity-0 rounded-3xl group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div className="">
                        <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {el.name}
                        </h3>
                        {/* <p className="text-white/90 text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {limitString(el.subtitle, 20)}
                      </p> */}
                      </div>
                      <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        {limitString(el.description, 150)}
                      </p>
                      <span className="text-white/70 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                        {el.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-8">
                {thirdPart.map((el, idx) => (
                  // <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
                  //   <Image
                  //     src={el.image}
                  //     className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                  //     height="400"
                  //     width="400"
                  //     alt="thumbnail"
                  //   />
                  // </motion.div>

                  <motion.div
                    onClick={() => {
                      handleClick(el.link);
                    }}
                    style={{ y: translateThird }}
                    key={"grid-3" + idx}
                    className="relative w-full h-80 group cursor-pointer overflow-x-hidden items-center justify-center rounded-3xl"
                  >
                    {/* Using a placeholder image since the data structure doesn't include an image */}
                    <Image
                      src={el.image}
                      className="h-80 w-full object-contain bg-gradient-to-tr rounded-3xl from-gray-300/30 via-gray-200/20 to-gray-200/30 items-center !m-0 !px-4"
                      height={400}
                      width={400}
                      alt={`${el.name} logo`}
                    />

                    {/* Overlay that appears on hover */}
                    <div className="absolute  inset-0 bg-black/70 opacity-0 rounded-3xl group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div className="">
                        <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {el.name}
                        </h3>
                        {/* <p className="text-white/90 text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {limitString(el.subtitle, 20)}
                      </p> */}
                      </div>
                      <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        {limitString(el.description, 150)}
                      </p>
                      <span className="text-white/70 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                        {el.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-8">
                {fourthPart.map((el, idx) => (
                  <motion.div
                    onClick={() => {
                      handleClick(el.link);
                    }}
                    style={{ y: translateFourth }}
                    key={"grid-4" + idx}
                    className="relative w-full h-80 group cursor-pointer overflow-x-hidden  items-center justify-center rounded-3xl"
                  >
                    {/* Using a placeholder image since the data structure doesn't include an image */}
                    <Image
                      src={el.image}
                      className="h-80 w-full object-contain bg-gradient-to-tr rounded-3xl from-gray-300/30 via-gray-200/20 to-gray-200/30 items-center !m-0 !px-4"
                      height={400}
                      width={400}
                      alt={`${el.name} logo`}
                    />

                    {/* Overlay that appears on hover */}
                    <div className="absolute  inset-0 bg-black/70 opacity-0 rounded-3xl group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div className="">
                        <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {el.name}
                        </h3>
                        {/* <p className="text-white/90 text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {limitString(el.subtitle, 20)}
                      </p> */}
                      </div>
                      <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        {limitString(el.description, 150)}
                      </p>
                      <span className="text-white/70 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                        {el.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div id="Offerings">
              <CTA1 />
              {/* <CTA2 /> */}
              <CTA3 />
            </div>

            <FAQ />

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
