import { ChevronsRight } from "lucide-react";
import Section from "./components/Section";
import ShowcaseItem from "./components/ShowcaseItem";
import StackItem from "./components/StackItem";
import { PRODUCTS, SOCIALS, TECHNOLOGIES } from "./lib/constants";

export default function App() {
   return (
      <div className="flex flex-col min-h-screen ">
         <header></header>

         <main className="container p-4 justify-around grow mx-auto flex flex-col gap-10 text-foreground/80 flex-1">
            <Section title="bio">
               <p className="max-w-[50ch]">Hi, Im Russell. I build for the Web, desktop & mobile. Anything that can be programmed!</p>
            </Section>

            <Section title="stack">
               <div className="flex flex-wrap items-center">
                  {TECHNOLOGIES.map((technology, index) => (
                     <>
                        <StackItem key={technology.name} technology={technology} />
                        {index !== TECHNOLOGIES.length - 1 && <div className=" w-7 h-[2px] bg-foreground/20 mx-1" />}
                     </>
                  ))}
               </div>
            </Section>

            <Section title="showcase">
               <div>
                  <a href="https://github.com/russellgn" target="_blank" rel="noopener noreferrer" className="flex  items-center gap-1 text-xs">
                     <ChevronsRight />
                     More on GitHub...
                  </a>
                  <div className="grid grid-cols-2 gap-30">
                     {PRODUCTS.map((product) => (
                        <ShowcaseItem key={product.name} product={product} />
                     ))}
                  </div>
               </div>
            </Section>

            <Section title="social">
               <div className="flex gap-5 items-center">
                  {SOCIALS.map((social) => (
                     <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mb-2 transition-all duration-75 hover:opacity-100 opacity-90 ">
                        <img src={social.logoSrc} alt={`${social.name} logo`} className="size-6 bg-foreground rounded-md" />
                        {social.name}
                     </a>
                  ))}
               </div>
            </Section>
         </main>

         <footer></footer>
      </div>
   );
}
