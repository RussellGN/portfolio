export default function Section({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={title}
      className="flex flex-col justify-center max-md:min-h-[300px] md:min-h-[250px]"
    >
      <div className="w-full">
        <h2 className="text-foreground mb-4 text-lg capitalize">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
