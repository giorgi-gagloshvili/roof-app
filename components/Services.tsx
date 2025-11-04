import ServiceCard from "./service-card";
import { Wrench, Zap, Droplet, Hammer, Wind, Paintbrush } from "lucide-react";
import Heading from "./ui/Heading";

const services = [
  {
    icon: Wrench,
    title: "გადახურვა და მონტაჟი",
    description:
      "ძველი სახურავის მოსხნა, ხის ან რკინის კონსტრუქციის აწყობა. გადახურვა ნებისმიერი მასალით",
  },
  {
    icon: Zap,
    title: "შეკეთება და აღდგენა",
    description: "დაზიანებული სახურავის მონაკვეთის შეკეთება და აღდგენა",
  },
  {
    icon: Droplet,
    title: "თბოიზოლაცია და ჰიდროიზოლაცია",
    description:
      "სხვენში თბოიზოლაციის გაკეთება (დათბუნება). ჰიდროიზოლაცია შენობის დაცვა ნესტისგან.",
  },
  {
    icon: Hammer,
    title: "ჟოლობების დამზადება",
    description: "საწრეტი მილების და ჟოლობების დამზადება და მონტაჟი.",
  },
  // {
  //   icon: Wind,
  //   title: "HVAC Services",
  //   description:
  //     "Heating and cooling system maintenance, repair, and installation by certified technicians.",
  // },
  // {
  //   icon: Paintbrush,
  //   title: "Painting",
  //   description:
  //     "Interior and exterior painting services with attention to detail and quality finishes.",
  // },
];

const Services = () => {
  return (
    <section className="py-12 lg:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Heading>ჩვენი სერვისები</Heading>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            პროფესიონალიზმი და სანდოობა ჩვენი მომსახურების ქვაკუთხედია
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
