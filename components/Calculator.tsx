"use client";
import { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import Tagline from "./ui/Tagline";
import { Select } from "radix-ui";

type MaterialType = {
  id: number;
  name: string;
  price: number;
};

const materials = [
  {
    id: 1,
    name: "ჟეშტი",
    price: 15,
  },
  {
    id: 2,
    name: "კრამიტი",
    price: 20,
  },
];

const services = [
  {
    id: 1,
    name: "კონსტრუქციის აწყობა/გადახურვა",
    price: 50,
  },
  {
    id: 2,
    name: "გადახურვა",
    price: 30,
  },
];

const Calculator = () => {
  const [initialPrice, setInitialPrice] = useState<string | number>(0);
  const [material, setMaterial] = useState<null | string>(null);
  const [area, setArea] = useState<string | number>("");
  const [totalPrice, setTotalPrice] = useState<null | number>(null);
  const [materialPrice, setMaterialPrice] = useState<null | number>(null);

  useEffect(() => {
    setTotalPrice(Number(area) * Number(initialPrice));
    const finded = materials.find(
      (item) => item.id === Number(material)
    )?.price;

    console.log(finded);

    if (finded) {
      setMaterialPrice(Number(area) * finded);
    }
  }, [area, material, initialPrice]);

  return (
    <div className="flex flex-col items-center py-12 lg:py-20 max-w-[1312px] mx-auto px-4">
      <Heading>ფასის კალკულაცია</Heading>
      <Tagline>შეგახსენებთ რომ კალკულატორი ითვლის დაახლოებით ფასს</Tagline>

      <div className="p-4 md:p-6 border border-slate-300 rounded-xl w-full bg-white mt-8">
        <p className="border border-blue-600/75 p-3 rounded-lg bg-blue-600/10">
          ხელობის ფასის დასათვლელად შეიყვანეთ ფართობი და მომსახურების ტიპი
        </p>
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 w-full mt-2">
          <div className="grow">
            <input
              type="text"
              className="border border-gray-300 rounded-md w-full px-4 py-2.5"
              placeholder="ჩაწერეთ ფართობი"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <div className="grow">
            {/* <Select.Root value={value} onValueChange={setValue}>
            <Select.Trigger className="border border-slate-300 rounded-md px-4 py-2 relative">
              <Select.Value aria-label={value}>{value}</Select.Value>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="relative">
                <Select.Viewport className="absolute top-8 left-0 border rounded-md">
                  {materials.map((item) => (
                    <Select.Item
                      value={item.name}
                      key={item.id}
                      className="bg-gray-50 p-1"
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root> */}
            <select
              className="border border-gray-300 px-4 rounded-md py-2.5 w-full outline-none"
              onChange={(e) => setInitialPrice(e.target.value)}
            >
              <option value="">მომსახურების არჩევა</option>
              {services.map((item) => (
                <option key={item.id} value={item.price}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grow">
            <select
              className="border border-gray-300 px-4 rounded-md py-2.5 w-full outline-none"
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option value="">საშენი მასალის არჩევა</option>
              {materials.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between">
            <p className="font-tbc-medium">ხელობის ფასი</p>{" "}
            <span className="text-lg">
              {totalPrice && initialPrice ? totalPrice?.toFixed(2) : "0.00"}{" "}
              ლარი
            </span>
          </div>
          {materialPrice ? (
            <div className="flex justify-between mt-4">
              <p className="font-tbc-medium">მასალის ფასი</p>{" "}
              <span className="text-lg">{materialPrice?.toFixed(2)} ლარი</span>
            </div>
          ) : null}
          {totalPrice || materialPrice ? (
            <div className="flex justify-between mt-4 border-t border-gray-300 pt-4">
              <p className="font-tbc-medium">ჯამური ფასი</p>{" "}
              <span className="text-lg">
                {totalPrice && materialPrice
                  ? (totalPrice + materialPrice).toFixed(2)
                  : totalPrice && !materialPrice
                  ? totalPrice.toFixed(2)
                  : materialPrice && !totalPrice
                  ? materialPrice.toFixed(2)
                  : "0.00"}{" "}
                ლარი
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
