import clsx from 'clsx';

function StatusBadge({ status }) {
  const baseClasses = "px-3 py-1.5 text-xs font-semibold rounded-full inline-flex items-center";
  
  const statusClasses = {
    APPROVED: "bg-emerald-100 text-emerald-800 border border-emerald-200",
    REJECTED: "bg-rose-100 text-rose-800 border border-rose-200",
    PENDING: "bg-amber-100 text-amber-800 border border-amber-200"
  };

  const statusDot = {
    APPROVED: "bg-emerald-500",
    REJECTED: "bg-rose-500",
    PENDING: "bg-amber-500"
  };

  return (
    <span className={clsx(baseClasses, statusClasses[status])}>
      <span className={clsx("w-1.5 h-1.5 rounded-full mr-2", statusDot[status])}></span>
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </span>
  );
}

export default StatusBadge;