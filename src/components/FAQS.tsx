import { Container } from "common/Container";
import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Title } from "common/Title";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: ["Lorem ipsum dolor sit amet"],
  },
  {
    question: "Lorem ipsum dolor sit amet",
    answer: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet consectetur. Non nisl auctor vehicula dignissim. Mauris gravida id massa nulla nullam.",
    ],
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Pharetra ultricies tortor dictumst lectus odio adipiscing in augue. At nam.",
    answer: ["Lorem ipsum dolor sit amet"],
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Vel ut dis bibendum enim et congue facilisi. Elit sed enim pretium sed.",
    answer: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet consectetur. Non nisl auctor vehicula dignissim. Mauris gravida id massa nulla nullam.",
    ],
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Non nisl auctor vehicula dignissim. Mauris gravida id massa nulla nullam.",
    answer: ["Lorem ipsum dolor sit amet"],
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Urna vel diam diam tortor pulvinar consectetur quisque. Sed pharetra ut.",
    answer: ["Lorem ipsum dolor sit amet"],
  },
];

export function FAQS() {
  return (
    <section className={"bg-do_green-500 py-16 text-white md:py-20"}>
      <div className={"min-h-screen"}>
        <Container>
          <Title
            className={"mb-12 font-sfpro text-8xl leading-none md:mb-[72px]"}
          >
            FAQ’S
          </Title>
        </Container>
        <Disclosure className={"text-xl font-light md:text-2xl"}>
          {faqs.map((faq, Idx) => (
            <DisclosureItem key={faq.question + Idx} trigger={faq.question}>
              <div className={"flex flex-col gap-y-3"}>
                {faq.answer.map((answer) => (
                  <p key={answer[0]}>{answer}</p>
                ))}
              </div>
            </DisclosureItem>
          ))}
        </Disclosure>
      </div>
    </section>
  );
}
