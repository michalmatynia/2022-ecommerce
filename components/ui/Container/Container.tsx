import { FC, ReactNode, ComponentType, HTMLAttributes } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, el: Element = "div" }) => {
  return (
    <Element style={{ maxWidth: "1920px" }} className="px-6 mx-auto max-w-8xl">
      {children}
    </Element>
  );
};

export default Container;
