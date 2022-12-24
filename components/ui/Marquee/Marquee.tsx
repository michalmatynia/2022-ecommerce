import { ReactNode, FC } from "react";
import styles from "./Marquee.module.css";
import cx from "classnames";

interface Props {
  children: ReactNode[];
  variant?: "primary" | "secondary";
}

export const Marquee: FC<Props> = ({ children, variant = "primary" }) => {
  const rootClassName = cx(styles.root, {
    [styles.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Marquee;
