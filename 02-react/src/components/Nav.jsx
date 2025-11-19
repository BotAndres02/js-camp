import { Link } from "./Link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Inicio</Link>
      <Link href="/search">Empleos</Link>
      <Link href="">Empresas</Link>
      <Link href="">Salarios</Link>
    </nav>
  );
};

export default Nav;
