export default function Section({ title, children }: { title: string; children?: React.ReactNode }) {
   return (
      <section id={title} className="min-h-[200px] flex flex-col justify-center  ">
         <div className="w-full">
            <h2 className="  capitalize text-lg mb-4    text-foreground">{title}</h2>
            <div>{children}</div>
         </div>
      </section>
   );
}
