import { Container } from "common/Container";

export function StudioRobotoText() {
  return (
    <section>
      <Container>
        <div
          className={
            "mx-auto min-h-screen max-w-[90%] py-11 text-center font-inconsolata text-2xl leading-8 md:max-w-[75%] md:text-3xl md:leading-10"
          }
        >
          <p className={"mb-10"}>
            We’re all about creating tech that really works for
            Direct-to-Consumer brands. By combining technology, design, and
            data, we build solutions that make a real difference. Our approach
            is straightforward: use solid data to create strategies that tackle
            the unique challenges you face in the consumer market.
          </p>
          <p>
            We don’t just guess what might work; we use evidence to guide our
            decisions. This means you get strategies and solutions that are
            proven to be effective. Whether it’s improving how your customers
            interact with your brand, making your operations smoother, or
            boosting your digital presence, our bespoke tech stack is tailored
            to deliver results that matter.
          </p>
        </div>
      </Container>
    </section>
  );
}
