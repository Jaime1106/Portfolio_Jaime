import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import experience from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-32">

      <Container>

        <SectionTitle
          subtitle="TRAYECTORIA"
          title="Mi recorrido"
        />

        <div className="space-y-8">

          {experience.map((item) => (

            <div
              key={item.year + item.title}
              className="border-l-2 border-blue-500 pl-8"
            >

              <p className="text-blue-500 font-bold">

                {item.year}

              </p>

              <h3 className="text-2xl font-semibold mt-2">

                {item.title}

              </h3>

              <p className="text-slate-400 mt-2">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Experience;