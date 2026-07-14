export default function Founder() {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-blue-600 font-semibold">
            Founder
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Building Digital Experiences
            <br />
            That Help Businesses Grow
          </h2>

        </div>


        <div className="grid md:grid-cols-2 gap-12 items-center">


          {/* Image */}

          <div className="flex justify-center">

            <div className="w-72 h-72 rounded-2xl bg-gray-100 flex items-center justify-center shadow-lg">

              <span className="text-gray-400">
                Your Photo
              </span>

            </div>

          </div>



          {/* Content */}

          <div>

            <h3 className="text-3xl font-bold mb-5">
              Hi, I'm Shiva 👋
            </h3>


            <p className="text-gray-600 leading-relaxed mb-6">

              I create modern, responsive and SEO-friendly websites
              for restaurants, startups and local businesses.
              My goal is to help businesses establish a strong
              online presence with websites that look professional
              and perform smoothly.

            </p>


            <div className="space-y-3">


              <p>
                ✅ Responsive Website Development
              </p>

              <p>
                ✅ Modern UI/UX Design
              </p>

              <p>
                ✅ SEO Optimized Websites
              </p>

              <p>
                ✅ Business Growth Focused Solutions
              </p>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}