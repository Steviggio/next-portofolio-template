"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {

    console.error("Critical Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream dark:bg-neutral-950 p-6 text-center">
      <div className="mb-6 flex justify-center">
        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-full">
          <AlertCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-sage-dark dark:text-cream mb-4">
        Oops! Something went wrong
      </h2>

      <p className="text-sage/80 dark:text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">
        An unexpected error occurred. This might be due to a translation loading
        failure or a temporary service interruption.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="flex items-center justify-center gap-2 px-8 py-3 bg-sage text-cream rounded-full font-semibold hover:bg-sage-dark transition-all active:scale-95 shadow-sm"
        >
          <RefreshCcw className="h-4 w-4" />
          Try Again
        </button>

        <Link
          href="/"
          className="px-8 py-3 bg-transparent border border-sage/30 text-sage-dark dark:text-cream rounded-full font-semibold hover:bg-sage/5 transition-all"
        >
          Back to Home
        </Link>
      </div>

      {error.digest && (
        <p className="mt-8 text-xs font-mono text-sage/40 dark:text-neutral-600">
          Error ID: {error.digest}
        </p>
      )}
    </div>
  );
}
