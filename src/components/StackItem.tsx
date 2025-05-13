import type { Technology } from "../lib/types";

export default function StackItem({ technology }: { technology: Technology }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      <img
        src={import.meta.env.BASE_URL + technology.logoSrc}
        alt={`${technology.name} logo`}
        title={technology.name}
        className="h-6 w-auto max-w-20 md:h-9"
      />
      <p className="text-foreground/80 text-xs font-light">{technology.name}</p>
    </div>
  );
}
