import type { Product } from "../lib/types";

export default function ShowcaseItem({ product }: { product: Product }) {
  return (
    <div className="flex items-center justify-center gap-5">
      {product.desktopScreenShotSrc && (
        <img
          src={import.meta.env.BASE_URL + product.desktopScreenShotSrc}
          alt={product.name + " desktop screenshot"}
          className="h-auto w-1/3"
        />
      )}

      {/* {product.mobileScreenShotSrc && <img src={import.meta.env.BASE_URL + product.mobileScreenShotSrc} alt={product.name + " mobile screenshot"} className="w-1/2 h-auto" />} */}

      <div>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 block font-semibold"
        >
          {product.name}
        </a>

        <p className="max-w-prose text-sm">{product.description}</p>
      </div>
    </div>
  );
}
