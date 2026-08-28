export default function Footer() {
  return (
    <footer className="bg-tactical-dark text-zinc-400 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-white font-bold text-lg">Tactical Solutions</p>
          <p className="text-sm text-zinc-500 mt-1">
            Proyectos y servicios electromecánicos para la industria de la construcción.
          </p>
        </div>
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Tactical Solutions SAC. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}