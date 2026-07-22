import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import skills from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-32">

      <Container>

        <SectionTitle
          subtitle="TECNOLOGÍAS"
          title="Stack Tecnológico"
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {skills.map((category) => (

            <Card key={category.title}>

              <h3 className="text-2xl font-bold mb-8">

                {category.title}

              </h3>

              <div className="grid grid-cols-2 gap-5">

                {category.items.map((skill) => {

                  const Icon = skill.icon;

                  return (

                    <div
                      key={skill.name}
                      className="flex items-center gap-4"
                    >

                      <Icon
                        className="text-blue-500"
                        size={26}
                      />

                      <span>

                        {skill.name}

                      </span>

                    </div>

                  );

                })}

              </div>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Skills;