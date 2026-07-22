import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import profile from "../../data/profile";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionTitle
          subtitle="CONTACTO"
          title="¿Hablamos?"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <a
            href={`mailto:${profile.email}`}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
          >
            <FaEnvelope size={30} className="text-blue-500" />

            <h3 className="mt-5 text-xl font-semibold">
              Correo
            </h3>

            <p className="text-slate-400 mt-2 break-all">
              {profile.email}
            </p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
          >
            <FaGithub size={30} className="text-blue-500" />

            <h3 className="mt-5 text-xl font-semibold">
              GitHub
            </h3>

            <p className="text-slate-400 mt-2">
              Ver perfil
            </p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
          >
            <FaLinkedin size={30} className="text-blue-500" />

            <h3 className="mt-5 text-xl font-semibold">
              LinkedIn
            </h3>

            <p className="text-slate-400 mt-2">
              Conectar
            </p>
          </a>

          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
          >
            <FaWhatsapp size={30} className="text-blue-500" />

            <h3 className="mt-5 text-xl font-semibold">
              WhatsApp
            </h3>

            <p className="text-slate-400 mt-2">
              Escríbeme
            </p>
          </a>

        </div>
      </Container>
    </section>
  );
}

export default Contact;