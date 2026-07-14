import Reveal from "./Reveal";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Discover",
    description:
      "We understand your business, goals, customers and requirements to create the right strategy.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design",
    description:
      "I create a modern design focused on user experience, brand identity and customer trust.",
  },
  {
    icon: <FaCode />,
    title: "Develop",
    description:
      "Your website is built using modern technologies with responsive design and strong performance.",
  },
  {
    icon: <FaRocket />,
    title: "Launch",
    description:
      "After testing everything, your website goes live with ongoing support when needed.",
  },
];


export default function Process() {

  return (
  <Reveal>
    <section
      id="process"
      className="bg-slate-900 py-24"
    >
    

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center">


          <p className="text-blue-400 font-semibold uppercase tracking-[4px]">
            My Process
          </p>


          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Simple Process.
            <br />
            Powerful Results.
          </h2>


          <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
            From the first conversation to the final launch,
            I follow a clear process to build websites that help
            businesses grow online.
          </p>


        </div>



        {/* Steps */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {steps.map((step,index)=>(

            <div
              key={step.title}
              className="
              group
              relative
              rounded-2xl
              border
              border-slate-800
              bg-slate-950
              p-8
              transition-all
              duration-300
              hover:-translate-y-3
              hover:border-blue-500
              "
            >


              {/* Number */}

              <div className="absolute top-5 right-5 text-5xl font-bold text-slate-800 group-hover:text-blue-900 transition">
                0{index + 1}
              </div>



              {/* Icon */}

              <div className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              text-3xl
              text-white
              "
              >
                {step.icon}
              </div>



              <h3 className="mt-8 text-2xl font-bold text-white">
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
        </Reveal>

  );
}