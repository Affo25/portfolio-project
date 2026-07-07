import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary-300/20 bg-primary-500/10 px-3 py-1 font-mono text-xs text-primary-300",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
