function Button({
  children,
  href,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-slate-700 hover:bg-slate-900 text-white",
  };

  return (
    <a
      href={href}
      className={`
      px-7
      py-3
      rounded-xl
      font-semibold
      transition
      ${styles[variant]}
      `}
    >
      {children}
    </a>
  );
}

export default Button;