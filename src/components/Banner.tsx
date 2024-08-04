import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const Banner = ({ title, subtitle, children }: Props) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
