import { ReactNode } from "react";

const Card = ({
  children,
  classes = "",
}: {
  children: ReactNode;
  classes: string;
}) => {
  return (
    <div
      className={`card ${
        Array.isArray(classes) ? classes.join(" ") : classes
      }`}>
      {children}
    </div>
  );
};

export default Card;
