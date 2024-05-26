import Image from "next/image";

import { Container } from "common/Container";
import { Title } from "common/Title";
import DocIcon from "components/static/icons/doc-black.svg";
import MessageQuestionIcon from "components/static/icons/message-question.svg";
import PeopleIcon from "components/static/icons/people.svg";
import RocketIcon from "components/static/icons/rocket-black.svg";
import ScanIcon from "components/static/icons/scan-black.svg";
import SmsIcon from "components/static/icons/sms.svg";

export function TextColumns() {
  return (
    <section>
      <Container>
        <div
          className={
            "grid min-h-screen grid-cols-1 gap-x-8 gap-y-5 py-14 sm:grid-cols-2 md:grid-cols-3 md:py-20"
          }
        >
          {data.map((item, Idx) => (
            <div
              key={item.title + Idx}
              className={"flex flex-col gap-y-4 font-inconsolata"}
            >
              <Image
                src={item.icon}
                alt={"Icon"}
                className={"fill-black stroke-black text-black"}
              />
              <Title className={"text-base md:text-base"} component={"h4"}>
                {item.title}
              </Title>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export const data = [
  {
    icon: RocketIcon,
    title: "Server-less Hosting",
    text: "Our Server-less Hosting solutions empower your applications to run without the need to manage any underlying infrastructure. We provide automatic scaling based on demand, ensuring you only pay for the compute time you actually use, optimizing cost efficiency and performance.",
  },
  {
    icon: DocIcon,
    title: "Data First Solutions",
    text: "We prioritize data in every decision with our Data First Solutions. From collection and storage to advanced analytics, we turn your data into actionable insights, driving smarter decisions and operational efficiency across your business.",
  },
  {
    icon: ScanIcon,
    title: "A.I. Implementation",
    text: "Our A.I. Implementation services integrate cutting-edge artificial intelligence into your business processes. We develop and deploy machine learning models, natural language processing tools, and automation solutions to boost productivity and enhance decision-making capabilities.",
  },
  {
    icon: RocketIcon,
    title: "Tech Support",
    text: "Our Tech Support team is here to resolve your IT issues swiftly and efficiently. From troubleshooting connectivity and equipment problems to maintaining your IT infrastructure, we ensure your operations run smoothly with minimal downtime.",
  },
  {
    icon: PeopleIcon,
    title: "Saas App Development",
    text: "We specialize in SaaS App Development, creating scalable, cloud-based applications that offer flexibility and cost-efficiency. Our solutions are designed to be accessible anytime, anywhere, providing seamless service to your users.",
  },
  {
    icon: SmsIcon,
    title: "UX/UI Design",
    text: "Our UX/UI Design services focus on crafting intuitive, visually appealing, and functional interfaces. We enhance user satisfaction and engagement by designing experiences that are as beautiful as they are easy to use.",
  },
  {
    icon: RocketIcon,
    title: "Creative Direction",
    text: "Our Creative Direction service guides the visual and conceptual development of your brand or project. From idea generation to execution, we ensure all creative assets align with your brand’s vision and goals.",
  },
  {
    icon: DocIcon,
    title: "Brand Strategy",
    text: "Our Brand Strategy service defines and builds your brand’s identity, positioning, and messaging. Through market research and strategic planning, we create a cohesive brand that resonates with your target audience and stands out in the market.",
  },
  {
    icon: ScanIcon,
    title: "Conversion Rate Optimization",
    text: "Our Conversion Rate Optimization (CRO) service is designed to increase the percentage of visitors who take desired actions on your website. By analyzing user behavior and testing changes, we implement strategies to enhance your conversion rates and drive results.",
  },
  {
    icon: MessageQuestionIcon,
    title: "eCommerce Development",
    text: "We provide comprehensive eCommerce Development services to create and maintain your online store. From user-friendly design to secure payment integration, we optimize your site for search engines to drive traffic and boost sales.",
  },
  {
    icon: PeopleIcon,
    title: "Networking Opportunities",
    text: "Our Networking Opportunities connect you with professionals across various industries. These platforms facilitate knowledge sharing, collaboration, and the building of relationships that can lead to new business opportunities and partnerships.",
  },
  {
    icon: SmsIcon,
    title: "Project Management",
    text: "Our Project Management services ensure that your projects are completed on time, within budget, and to the highest standards. We provide comprehensive planning, execution, and monitoring, ensuring your project's success from start to finish.",
  },
];
