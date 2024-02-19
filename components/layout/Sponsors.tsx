import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "RADcube",
  },
  {
    icon: <Radar size={34} />,
    name: "Ford Motor Company",
  },
  {
    icon: <Radar size={34} />,
    name: "MedTronic",
  },
  {
    icon: <Radar size={34} />,
    name: "Versante",
  },
  {
    icon: <Radar size={34} />,
    name: "IU Health",
  },
  {
    icon: <Radar size={34} />,
    name: "MotorVault",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Investors and Partners
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
