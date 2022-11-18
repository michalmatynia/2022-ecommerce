import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className={styles.root}>
        <div className={styles.productTag}>
          <h3 className={styles.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={styles.productPrice}>14 USD</span>
        </div>
        {product.images && (
          <Image
            alt={product.name ?? "Product image"}
            src={product.images[0].url ?? placeholderImage}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
