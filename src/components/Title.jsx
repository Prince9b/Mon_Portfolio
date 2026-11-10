function Title({ title }) {
  return (
    <div className="mb-10 space-y-3 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        Portfolio
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div
        className="mx-auto h-1 w-12 rounded-full bg-accent"
        aria-hidden="true"
      />
    </div>
  );
}

export default Title;
