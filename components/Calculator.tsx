import Heading from "./ui/Heading";
import Tagline from "./ui/Tagline";

const Calculator = () => {
  return (
    <div className="flex flex-col items-center py-12 lg:py-20 max-w-7xl mx-auto px-4 md:px-6">
      <Heading>ფასის კალკულაცია</Heading>
      <Tagline>შეგახსენებთ რომ კალკულატორი ითვლის დაახლოებით ფასს</Tagline>

      <div className="p-6 border border-slate-300 rounded-xl w-full bg-white mt-8"></div>
    </div>
  );
};

export default Calculator;
