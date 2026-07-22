import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import profile from "../../data/profile";
import {
    FaGraduationCap,
    FaCode,
    FaMapMarkerAlt,
    FaAward
} from "react-icons/fa";

function About() {

    const cards = [

        {
            icon: <FaGraduationCap />,
            title: "Universidad",
            value: profile.university
        },

        {
            icon: <FaMapMarkerAlt />,
            title: "Ubicación",
            value: profile.location
        },

        {
            icon: <FaCode />,
            title: "Especialidad",
            value: "Full Stack"
        },

        {
            icon: <FaAward />,
            title: "Certificaciones",
            value: "Cisco + CertiProf"
        }

    ];

    return (

        <section
            id="about"
            className="py-36"
        >

            <Container>

                <SectionTitle
                    subtitle="CONÓCEME"
                    title="Sobre mí"
                />

                <div className="grid lg:grid-cols-2 gap-16">

                    <div>

                        <p className="text-slate-400 leading-9 text-lg">

                            {profile.description}

                        </p>

                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">

                        {cards.map((card) => (

                            <div
                                key={card.title}
                                className="bg-slate-900 rounded-3xl border border-slate-800 p-7"
                            >

                                <div className="text-blue-500 text-3xl">

                                    {card.icon}

                                </div>

                                <h3 className="mt-5 font-semibold">

                                    {card.title}

                                </h3>

                                <p className="text-slate-400 mt-2">

                                    {card.value}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </Container>

        </section>

    );

}

export default About;