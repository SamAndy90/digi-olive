import { DarkBlock } from "components/Home/DarkBlock";
import { Gallery } from "components/Home/Gallery";
import { GreenBlock } from "components/Home/GreenBlock";
import { Hero } from "components/Home/Hero";
import { RetroCar } from "components/RetroCar";
import { Slider } from "components/Slider";
import { TitleTextSection } from "components/TitleTextSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TitleTextSection
        title={"We Spark Innovative Solutions"}
        text={
          "We specialize in combining technology, design, and data to create effective solutions for Direct-to-Consumer brands. Our approach is based on evidence, using data to develop strategies that address the unique challenges of the consumer market."
        }
        titleClasses={"font-sfpro font-normal"}
      />
      <Gallery />
      <GreenBlock />
      <DarkBlock />
      <RetroCar
        client={"Featured Client"}
        text={
          "“The environment at NYIAS is super inclusive. I love coming here knowing i’m going to have a fun, productive day”"
        }
      />
      <Slider title={"Working w/ Digi Olive"} titleClasses={"max-w-[827px]"} />
    </>
  );
}
