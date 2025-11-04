import Heading from "./ui/Heading";
import Tagline from "./ui/Tagline";

const Calculator = () => {
  return (
    <div className="flex flex-col items-center py-20 max-w-7xl mx-auto">
      <Heading>ფასის კალკულაცია</Heading>
      <Tagline>შეგახსენებთ რომ კალკულატორი ითვლის დაახლოებით ფასს</Tagline>

      <div className="p-6 border border-slate-300 rounded-xl w-full bg-white mt-8"></div>
    </div>
  );
};

export default Calculator;
