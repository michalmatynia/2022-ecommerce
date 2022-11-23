import {
  ImageEdge,
  MoneyV2,
  CurrencyCode,
  Product as ShopifyProduct,
} from "../schema";

import { Product, ProductPrice } from "@common/types/product";

const normalizeProductImages = ({ edges }: { edges: ImageEdge[] }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
  }));

const normalizeProductPrice = ({
  currencyCode,
  amount,
}: {
  currencyCode: CurrencyCode;
  amount: string;
}): MoneyV2 => ({
  amount: +amount,
  currencyCode,
});

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageConnection,
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(ImageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}
