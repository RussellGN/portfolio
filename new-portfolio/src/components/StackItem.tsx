import type { Technology } from "../lib/types";

export default function StackItem({ technology }: { technology: Technology }) {
   return (
      <div className="flex flex-col items-center justify-center gap-3 text-center">
         <img src={technology.logoSrc} alt={`${technology.name} logo`} title={technology.name} className="h-9 w-auto max-w-20" />
         {/* <p className="text-xs font-light text-foreground/80">{technology.name}</p> */}
      </div>
   );
}
