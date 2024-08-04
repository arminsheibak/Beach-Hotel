import { ReactNode } from "react";

interface Props {
  heroClass?: string;
  children: ReactNode;
}

const Hero = ({ heroClass='defaultHero', children }: Props) => {
  return <header className={heroClass}>{children}</header>;
};

export default Hero;
