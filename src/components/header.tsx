"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const navItems = [
  { name: "商店", href: "https://www.apple.com.cn/cn/shop/goto/store" },
  { name: "Mac", href: "https://www.apple.com.cn/mac/" },
  { name: "iCard", href: "#", active: true },
  { name: "iPhone", href: "https://www.apple.com.cn/iphone/" },
  { name: "Watch", href: "https://www.apple.com.cn/watch/" },
  { name: "Vision", href: "https://www.apple.com.cn/apple-vision-pro/" },
  { name: "AirPods", href: "https://www.apple.com.cn/airpods/" },
  { name: "家居", href: "https://www.apple.com.cn/apple-home/" },
  { name: "娱乐", href: "https://www.apple.com.cn/entertainment/" },
  { name: "配件", href: "https://www.apple.com.cn/cn/shop/goto/buy_accessories" },
  { name: "支持", href: "https://support.apple.com/zh-cn/?cid=gn-ols-home-hp-tab" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff99] backdrop-blur-md border-b border-gray-200/20">
      <div className="flex items-center justify-between px-4 md:px-6 h-12">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-gray-700 focus:outline-none"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 max-w-xs">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="text-black">
                      <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1468 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3465 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                    </svg>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-700 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
                <nav className="flex-1 overflow-auto py-4">
                  <ul className="space-y-2 px-2">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`block py-2 px-3 text-base ${
                            item.active
                              ? "text-blue-500 font-medium"
                              : "text-gray-800"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Apple Logo - always visible */}
        <Link href="/" className="text-gray-800">
          <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="text-black">
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1468 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3465 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
          </svg>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-xs font-normal ${
                    item.active
                      ? "text-blue-500"
                      : "text-gray-800 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons on the right */}
        <div className="flex items-center space-x-4">
          <button className="p-1 text-gray-700 focus:outline-none" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="p-1 text-gray-700 focus:outline-none" aria-label="Shopping bag">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
