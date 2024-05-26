import { HostingHero } from "components/HostingHero";
import { HostingRobotoText } from "components/HostingRobotoText";
import { RetroCar } from "components/RetroCar";
import { TextColumns } from "components/TextColumns";
import { TitleTextSection } from "components/TitleTextSection";

export default function HostingPage() {
  return (
    <>
      <HostingHero />
      <TitleTextSection
        title={"Bespoke Tech Stack"}
        text={
          "We specialize in combining technology, design, and data to create effective solutions for Direct-to-Consumer brands. Our approach is based on evidence, using data to develop strategies that address the unique challenges of the consumer market. Collaboration is central to our work, encouraging brands to work with us to navigate market complexities, aiming to increase growth, improve customer experiences, and make operations more efficient."
        }
        link={{ label: "Let’s Talk", href: "" }}
      />
      <HostingRobotoText />
      <RetroCar
        client={"Featured Client"}
        text={
          "“The environment at NYIAS is super inclusive. I love coming here knowing i’m going to have a fun, productive day”"
        }
      />
      <TextColumns />
    </>
  );
}
