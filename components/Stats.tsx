import Reveal from "./Reveal";

const stats = [
  {
    number: "10+",
    label: "Projects Planned",
  },
  {
    number: "100%",
    label: "Responsive Design",
  },
  {
    number: "SEO",
    label: "Optimized",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <Reveal>
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            {stats.map((item) => (

              <div
                key={item.label}
                className="text-center"
              >

                <h2 className="text-5xl font-bold text-blue-400">
                  {item.number}
                </h2>

                <p className="mt-3 text-slate-400">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}