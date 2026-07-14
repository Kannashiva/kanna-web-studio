import Reveal from "./Reveal";
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical business website takes around 2-4 weeks depending on the number of pages and features required.",
  },

  {
    question: "Do you provide domain and hosting?",
    answer:
      "Yes, I can help you choose the right domain and hosting provider and assist with the complete setup.",
  },

  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website is designed to be fully responsive and optimized for mobile, tablet and desktop screens.",
  },

  {
    question: "Can I update my website in the future?",
    answer:
      "Yes. You can request updates anytime, and maintenance plans are available for continuous support.",
  },

  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. Websites are built with SEO-friendly structure, performance optimization and best practices.",
  },
];


export default function FAQ() {

  return (
  <Reveal>
    <section
      id="faq"
      className="bg-slate-950 py-24 text-white"
    >

      <div className="max-w-5xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center">

          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-400">
            Everything you need to know before starting your project.
          </p>

        </div>



        {/* Questions */}

        <div className="mt-12 space-y-5">


          {faqs.map((faq,index)=>(

            <div
              key={index}
              className="
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              p-6
              hover:border-blue-500
              transition
              "
            >

              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>


              <p className="mt-3 text-slate-400 leading-7">
                {faq.answer}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
        </Reveal>

  );
}