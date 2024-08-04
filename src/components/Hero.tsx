import { ReactNode } from "react";

interface Props {
  heroClass?: string;
  backgroundImageUrl?: string
  children: ReactNode;
}

const Hero = ({ heroClass='defaultHero', children, backgroundImageUrl }: Props) => {
  return <header style={backgroundImageUrl ? {backgroundImage: `url("${backgroundImageUrl}")`} : {}} className={heroClass}>{children}</header>;
};

export default Hero;
