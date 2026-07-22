import Container from "../ui/Container";
import profile from "../../data/profile";

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">

      <Container className="flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>

        <p className="text-slate-500">
          Desarrollado con React + Tailwind CSS
        </p>

      </Container>

    </footer>
  );
}

export default Footer;