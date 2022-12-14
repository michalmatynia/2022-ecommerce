import { FC } from "react";
import styles from "./Usernav.module.css";
import Link from "next/link";
import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";

const Usernav: FC = () => {
  const { openSidebar } = useUI();

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Cart onClick={openSidebar} />
        </li>
        <li className={styles.item}>
          <Link href="/wishlist" legacyBehavior>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
