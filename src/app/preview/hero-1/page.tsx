import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import "./index.css";

const HeroOne = () => {
  return (
    <>
      <Header />

      <IntroSection
        title="Increase your revenue, reduce costs and cut down risk."
        description=" Put a short description with a maximum length of 150 characters here, this description should be considered as something your users would see first."
        logos={[
          {
            imgSrc: "/img/partners/1.svg",
            alt: "",
          },
          {
            imgSrc: "/img/partners/2.svg",
            alt: "",
          },
          {
            imgSrc: "/img/partners/3.svg",
            alt: "",
          },
          {
            imgSrc: "/img/partners/4.svg",
            alt: "",
          },
          {
            imgSrc: "/img/partners/5.svg",
            alt: "",
          },
        ]}
      >
        <button
          type="button"
          className="btn glass text-white  mt-5 w-max rounded-xl"
        >
          Call to action
        </button>
      </IntroSection>
    </>
  );
};

export default HeroOne;
