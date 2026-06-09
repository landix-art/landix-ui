import Image from "next/image";
import { ReactNode } from "react";

interface Logo {
  imgSrc: string;
  alt: string;
}

interface IntroSectionProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  logos?: Logo[];
  addClassName?: string;
}

const IntroSection = ({
  title = "",
  description = "",
  children = null,
  logos = [],
  addClassName = "",
}: IntroSectionProps) => {
  return (
    <section
      className={`${addClassName} relative z-10 overflow-hidden after:content-[''] after:absolute after:block after:-right-16 after:-top-24 after:bg-[#62613886] after:rounded-full after:blur-[100px] after:w-75 after:h-75 
      before:content-[''] before:absolute before:block before:-left-16 before:top-[30%] before:bg-[#8f8d6d50] before:rounded-full before:blur-[150px] before:w-175 before:h-75
    `}
    >
      <div className="container mt-48 mb-24 flex flex-col flex-wrap justify-center relative z-10">
        <h1 className="text-center lg:text-left lg:w-212.5">{title}</h1>
        <p className="text-center lg:w-187.5 lg:text-left lg:text-lg lg:mt-5 lg:mb-0 mb-5 mt-7 text-gray-300">
          {description}
        </p>
        <ul className="flex gap-10 items-center my-7">
          {logos.map((e, i) => (
            <li key={i}>
              <Image
                src={e.imgSrc}
                alt={e.alt}
                width={1000}
                height={1000}
                className="w-25 h-auto brightness-0 invert object-contain"
              />
            </li>
          ))}
        </ul>
        <div className="text-center lg:text-left">{children}</div>
      </div>
    </section>
  );
};

export default IntroSection;
