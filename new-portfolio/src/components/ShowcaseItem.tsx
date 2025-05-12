import type { Product } from "../lib/types";

export default function ShowcaseItem({ product }: { product: Product }) {
   return (
      <div className=" flex  gap-5 justify-center items-center">
         {product.desktopScreenShotSrc && <img src={product.desktopScreenShotSrc} alt={product.name + " desktop screenshot"} className="w-1/3 h-auto" />}

         {/* {product.mobileScreenShotSrc && <img src={product.mobileScreenShotSrc} alt={product.name + " mobile screenshot"} className="w-1/2 h-auto" />} */}

         <div>
            <a href={product.url} target="_blank" rel="noopener noreferrer" className="block font-semibold">
               {product.name}
            </a>

            <p className="max-w-prose text-xs">{product.description}</p>
         </div>
      </div>
   );
}
