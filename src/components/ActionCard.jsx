export default function ActionCard({ title, desc, onClick, variant = "primary" }) {
  const variants = {
    primary: "button-primary",
    accent: "button-accent",
    muted: "button-muted",
  };

  return (
    <div className="card p-5 flex items-center justify-between">
      <div>
        <p className="text-base font-medium text-gray-900 dark:text-gray-100">{title}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
      </div>
      <button className={`${variants[variant]}`} onClick={onClick}>
        Continue
      </button>
    </div>
  );
}
