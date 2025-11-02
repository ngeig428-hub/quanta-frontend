export default function StatCard({ label, value, hint, className = "" }) {
  return (
    <div className={`card p-5 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">{value}</p>
        </div>
        {hint ? (
          <div className="text-sm text-gray-600 dark:text-gray-300">{hint}</div>
        ) : null}
      </div>
    </div>
  );
}
