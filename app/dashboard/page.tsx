// /pages/index.tsx
import FooterNav from "@/components/footerNav";
import ScrollBar from "@/components/scrollBar";
import ScrollFood from "@/components/scrollFood";
import Image from "next/image";
import React from "react";

export default function Home() {
  const items = [
    {
      name: "Gà Rán",
      imageSrc: "/images/Ga.png",
      description: "Thức ăn nhanh",
    },
    {
      name: "Burger",
      imageSrc: "/images/burger.jpg",
      description: "Thức ăn nhanh",
    },
    {
      name: "Bún",
      imageSrc: "/images/noddle.png",
      description: "Thức ăn nhanh",
    },
    {
      name: "Mì",
      imageSrc: "/images/noddle.png",
      description: "Thức ăn nhanh",
    },
    {
      name: "Burger",
      imageSrc: "/images/noddle.png",
      description: "Thức ăn nhanh",
    },
  ];

  const banneritems = [
    { id: "1", name: "anh 1", url: "/images/map1.png" },
    { id: "2", name: "anh 2", url: "/images/map2.png" },
    { id: "3", name: "anh 3", url: "/images/map3.png" },
    { id: "4", name: "anh 4", url: "/images/map4.png" },
  ];

  const TodayFood = {
    title: "Hôm Nay ăn gì",
    items: [
      {
        id: "1",
        name: "Gà Ủ Muối Hoa Tiêu - Food",
        address: "4A Đường Số 71, P. Tân Quy, Quận 7, TP. HCM",
        img: "/food/ga1.jpg",
        kind: "Quan An",
      },
      {
        id: "2",
        name: "Gà Ủ Muối Hoa Tiêu - Food",
        address: "4A Đường Số 71, P. Tân Quy, Quận 7, TP. HCM",
        img: "/food/ga1.jpg",
        kind: "Quan An",
      },
    ],
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-4">
        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3 pt-3 pl-8 pr-8 z-40">
          <div className="flex flex-col fixed bg-white w-full md:w-1/5 rounded-2xl p-5 gap-3 shadow-lg">
            <h2 className="font-bold text-lg">Thực đơn</h2>
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 cursor-pointer hover:bg-slate-100 p-2 rounded-lg"
              >
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={item.imageSrc}
                    width={30}
                    height={30}
                    alt={item.description}
                  />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-9 w-full pt-3 pr-8 flex flex-col gap-5">
          {/* Banner Scroll */}
          <ScrollBar items={banneritems} />
          {/* Food Lists */}
          <ScrollFood items={TodayFood} />
          <ScrollFood items={TodayFood} />
        </div>
      </div>
      {/* Footer */}
      <FooterNav />
    </>
  );
}
