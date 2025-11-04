import ServiceCard from "./service-card";
import { Wrench, Zap, Droplet, Hammer, Wind, Paintbrush } from "lucide-react";

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
    description: "დაზიანებული სახურავის შეკეთება გარანტიით",
  },
  {
    icon: Droplet,
    title: "თბოიზოლაცია და ჰიდროიზოლაცია",
    description: "სხვენში თბოიზოლაციის გაკეთება, გარანტიაა ",
  },
  {
    icon: Hammer,
    title: "ჟოლობების დამზადება",
    description: "საწრეტი მილების და ჟოლობების დამზადება და მონტაჟი.",
  },
  {
    icon: Wind,
    title: "HVAC Services",
    description:
      "Heating and cooling system maintenance, repair, and installation by certified technicians.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description:
      "Interior and exterior painting services with attention to detail and quality finishes.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-les-regular font-bold mb-4 text-foreground">
            ჩვენი სერვისები
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional repair services for every part of your home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
