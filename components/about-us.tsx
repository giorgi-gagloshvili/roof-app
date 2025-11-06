import React from "react";
import Heading from "./ui/Heading";

const AboutUs = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-[1312px] px-4 m-auto gap-x-4">
        <div>
          <Heading className="text-center">ჩვენ შესახებ</Heading>
          <div>
            <p className="pb-2 indent-4">
              sakhuravi.ge არის თქვენი საიმედო პარტნიორი სახურავის შეკეთებისა და
              მონტაჟის სფეროში. ჩვენი გუნდი აერთიანებს მაღალკვალიფიციურ
              ხელოსნებს, რომლებსაც მრავალწლიანი გამოცდილება აქვთ ნებისმიერი
              სირთულისა და ტიპის სახურავთან მუშაობაში.
            </p>
            <p className="pb-2 indent-4">
              ჩვენი მისია მარტივია: დავიცვათ თქვენი სახლი ამინდის ნებისმიერი
              ცვლილებისგან, უზრუნველვყოთ ხანგრძლივი სიმშვიდე და მაქსიმალური
              კომფორტი.
            </p>
            <p className="font-tbc-medium">ჩვენი საქმიანობა მოიცავს:</p>
            <ul className="pl-4 ml-2 mt-2">
              <li className="list-item list-disc">
                დაზიანებული მონაკვეთების შეკეთება (გაჟონვის აღმოფხვრა,
                კრამიტის/თუნუქის შეცვლა).
              </li>
              <li className="list-item list-disc">
                ახალი სახურავის მონტაჟი (მეტალოკრამიტი, კრამიტი, ტოლი,
                პროფნასტილი).
              </li>
              <li className="list-item list-disc">
                ჰიდრო და თბოიზოლაციის მოწყობა.
              </li>
              <li className="list-item list-disc">
                ჟოლობებისა და საწრეტი სისტემების მონტაჟი/აღდგენა.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="h-[300px] w-full rounded-xl mt-4"
          style={{
            backgroundImage: 'url("/about.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
  );
};

export default AboutUs;
