import { Profile } from "../types/portfolio.schema";

type GlobalDict = typeof import("@/features/dictionaries/fr.json");

interface AvailabilityBadgeProps {
  status: Profile["status"];
  dict: GlobalDict["status"];
}

export function AvailabilityBadge({ status, dict }: AvailabilityBadgeProps) {
  const isAvailable = status === "available";

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-sage/20 dark:border-neutral-800 shadow-sm w-fit transition-all hover:shadow-md">
      <span className="relative flex h-2.5 w-2.5">
        {isAvailable && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isAvailable
              ? "bg-emerald-500"
              : "bg-neutral-400 dark:bg-neutral-600"
          }`}
        ></span>
      </span>

      <span className="text-xs font-medium text-sage-dark dark:text-neutral-300">
        {isAvailable ? dict.available : dict.busy}
      </span>
    </div>
  );
}
