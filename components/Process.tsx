import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-5xl text-blue-500" />,
    title: "Discover",
    description:
      "Understand your business, goals and target audience before starting the project.",
  },
  {
    icon: <FaPencilRuler className="text-5xl text-purple-500" />,
    title: "Design",
    description:
      "Create a modern, user-friendly design that reflects your brand identity.",
  },
  {
    icon: <FaCode className="text-5xl text-green-500" />,
    title: "Develop",
    description:
      "Build a fast, responsive and SEO-friendly website using modern technologies.",
  },
  {
    icon: <FaRocket className="text-5xl text-orange-500" />,
    title: "Launch",
    description:
      "Deploy your website, test everything and provide support after launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            My Process
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            From Idea to Launch
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 text-lg">
            I follow a simple and transparent process to deliver websites that
            are modern, responsive and built to help your business grow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="flex justify-center">{step.icon}</div>

              <div className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {index + 1}
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}