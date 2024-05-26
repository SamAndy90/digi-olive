import { RetroCar } from "components/RetroCar";
import { Slider } from "components/Slider";
import { StudioHero } from "components/StudioHero";
import { StudioRobotoText } from "components/StudioRobotoText";
import { TitleTextSection } from "components/TitleTextSection";

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <TitleTextSection
        title={"We Spark Innovative Solutions"}
        text={
          "We specialize in combining technology, design, and data to create effective solutions for Direct-to-Consumer brands. Our approach is based on evidence, using data to develop strategies that address the unique challenges of the consumer market."
        }
      />
      <StudioRobotoText />
      <RetroCar
        client={"Featured Client"}
        text={
          "“The environment at NYIAS is super inclusive. I love coming here knowing i’m going to have a fun, productive day”"
        }
      />
      <Slider title={"Want to Host w/ Digi Olive?"} />
    </>
  );
}
