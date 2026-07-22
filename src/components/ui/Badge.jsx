function Badge({ children }) {
  return (
    <span
      className="
      px-4
      py-2
      rounded-full
      bg-slate-800
      text-slate-300
      text-sm
      "
    >
      {children}
    </span>
  );
}

export default Badge;