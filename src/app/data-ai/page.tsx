import { DataAIHero } from "components/DataAIHero";
import { DataAIRobotoText } from "components/DataAIRobotoText";
import { RetroCar } from "components/RetroCar";
import { Slider } from "components/Slider";
import { TitleTextSection } from "components/TitleTextSection";

export default function DataAIPage() {
  return (
    <>
      <DataAIHero />
      <TitleTextSection
        title={"We Spark Innovative Solutions"}
        text={
          "We specialize in combining technology, design, and data to create effective solutions for Direct-to-Consumer brands. Our approach is based on evidence, using data to develop strategies that address the unique challenges of the consumer market. Collaboration is central to our work, encouraging brands to work with us to navigate market complexities, aiming to increase growth, improve customer experiences, and make operations more efficient."
        }
        titleClasses={"text-do_red-500"}
        link={{ label: "Let’s Talk", href: "" }}
      />
      <DataAIRobotoText />
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
