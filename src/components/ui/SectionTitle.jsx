function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16">

      <p className="text-blue-500 uppercase tracking-[4px] mb-3">

        {subtitle}

      </p>

      <h2 className="text-5xl font-bold text-white">

        {title}

      </h2>

    </div>
  );
}

export default SectionTitle;