import React from "react";
import Section from "./components/Section";
import StackItem from "./components/StackItem";
import ShowcaseItem from "./components/ShowcaseItem";
import { ChevronsRight } from "lucide-react";
import { PRODUCTS, SOCIALS, TECHNOLOGIES } from "./lib/constants";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="text-foreground/80 container mx-auto flex flex-1 grow flex-col justify-around gap-10 p-4">
        <Section title="bio">
          <p className="max-w-[50ch]">
            Hi, Im Russell. I build for the Web, desktop & mobile. Code is my
            craft!
          </p>
        </Section>

        <Section title="stack">
          <div className="flex flex-wrap items-center">
            {TECHNOLOGIES.map((technology, index) => (
              <React.Fragment key={index}>
                <StackItem technology={technology} />
                {index !== TECHNOLOGIES.length - 1 && (
                  <div className="bg-foreground/20 mx-1 mb-5 h-[2px] w-7" />
                )}
              </React.Fragment>
            ))}
          </div>
        </Section>

        <Section title="showcase">
          <div>
            <a
              href="https://github.com/RussellGN?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1 text-xs"
            >
              <ChevronsRight />
              More on GitHub...
            </a>
            <div className="grid grid-cols-2 gap-30">
              {PRODUCTS.map((product, index) => (
                <ShowcaseItem key={index} product={product} />
              ))}
            </div>
          </div>
        </Section>

        <Section title="social">
          <div className="flex items-center gap-5">
            {SOCIALS.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 flex items-center gap-2"
              >
                <img
                  src={social.logoSrc}
                  alt={`${social.name} logo`}
                  className="bg-foreground size-6 rounded-md"
                />
                {social.name}
              </a>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
