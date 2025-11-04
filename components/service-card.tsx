import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg bg-slate-50 rounded-xl shadow-sm duration-300 border-gray-300">
      <CardHeader className="items-center lg:items-start">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex border bg-white border-slate-300 items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-[#2564c4]" />
        </div>
        <CardTitle className="text-lg md:text-xl text-gray-800 font-les-regular">
          {title}
        </CardTitle>
        <CardDescription className="text-base text-center md:text-left">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <Button className="">Request Service</Button> */}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
