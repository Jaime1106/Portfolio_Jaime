function Card({ children }) {
  return (
    <div
      className="
      bg-slate-900
      rounded-3xl
      border
      border-slate-800
      p-8
      transition
      hover:border-blue-500
      hover:-translate-y-2
      duration-300
      "
    >
      {children}
    </div>
  );
}

export default Card;