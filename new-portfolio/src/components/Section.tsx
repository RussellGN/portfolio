export default function Section({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={title} className="flex min-h-[200px] flex-col justify-center">
      <div className="w-full">
        <h2 className="text-foreground mb-4 text-lg capitalize">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
