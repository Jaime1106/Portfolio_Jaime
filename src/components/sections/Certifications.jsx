import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="py-32">

      <Container>

        <SectionTitle
          subtitle="CERTIFICACIONES"
          title="Formación Complementaria"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {certifications.map((cert) => (

            <Card key={cert.id}>

              <img
                src={cert.image}
                alt={cert.title}
                className="w-16 h-16 object-contain"
              />

              <h3 className="mt-6 text-xl font-semibold">

                {cert.title}

              </h3>

              <p className="text-slate-400 mt-2">

                {cert.issuer}

              </p>

              <p className="text-slate-500 text-sm mt-1">

                {cert.date}

              </p>

              <a
                href={cert.url}
                target="_blank"
                className="inline-block mt-6 text-blue-500 hover:text-blue-400"
              >
                Ver certificado →
              </a>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Certifications;