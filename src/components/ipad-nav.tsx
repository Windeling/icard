"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const ipadNavItems = [
  {
    name: "iCard Studio",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/4276368771.svg"
  },
  {
    name: "iCard Pro",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/1127930875.svg"
  },
  {
    name: "iCard Plus",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/4276368771.svg"
  },
  {
    name: "iCard",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/1829770525.svg"
  },
  {
    name: "iCard Mini",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/1829770525.svg"
  },
  {
    name: "iCard SE",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/1829770525.svg"
  },
  {
    name: "比较",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/3832343559.svg"
  },
  {
    name: "挂绳",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/1829770525.svg"
  },
  {
    name: "保护套",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/2747504011.svg"
  },
  {
    name: "iCardOS",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/3318717428.svg"
  },
  {
    name: "购买",
    href: "#",
    icon: "https://ext.same-assets.com/3468220153/2549036110.svg"
  },
];

export function IPadNav() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full bg-white ${sticky ? "sticky top-12 shadow-sm z-40" : ""}`}>
      <div className="max-w-screen-lg mx-auto px-4 md:px-6">
        <div className="overflow-x-auto">
          <nav className="flex justify-start md:justify-center py-2 min-w-max">
            <ul className="flex space-x-5 md:space-x-8">
              {ipadNavItems.map((item) => (
                <li key={item.name} className="text-center">
                  <Link
                    href={item.href}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-9 h-9 mb-1 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={30}
                        height={30}
                        className="opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-xs text-gray-800 group-hover:text-black">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
