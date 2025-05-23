"use client";

import Image from "next/image";
import Link from "next/link";

export function AccessoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          iPad 左右右臂
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Apple Pencil */}
          <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                <Image
                  src="https://ext.same-assets.com/3468220153/1153671809.svg"
                  alt="Apple Pencil"
                  width={40}
                  height={40}
                  className="mb-4 md:mb-0 md:mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Apple Pencil</h3>
                  <p className="text-gray-600">
                    无与伦比的书写和绘画体验，让你的创意绽放。
                  </p>
                </div>
              </div>

              <div className="relative aspect-video md:aspect-[16/9] w-full">
                <Image
                  src="/apple-pencil.jpg"
                  alt="Apple Pencil with iPad"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-center mt-6">
                <Link
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  了解更多关于 Apple Pencil &gt;
                </Link>
              </div>
            </div>
          </div>

          {/* Keyboards */}
          <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                <Image
                  src="https://ext.same-assets.com/3468220153/2747504011.svg"
                  alt="Apple Keyboard"
                  width={40}
                  height={40}
                  className="mb-4 md:mb-0 md:mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">适用于 iPad 的键盘</h3>
                  <p className="text-gray-600">
                    键盘与触控板的完美结合，带来桌面级的工作体验。
                  </p>
                </div>
              </div>

              <div className="relative aspect-video md:aspect-[16/9] w-full">
                <Image
                  src="/keyboard.jpg"
                  alt="iPad Keyboard"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-center mt-6">
                <Link
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  了解更多关于键盘 &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          在 Apple 购买 iPad 好处多多
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="bg-[#f5f5f7] p-6 rounded-2xl text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Image
                src="https://ext.same-assets.com/3468220153/332163427.svg"
                alt="Free delivery"
                width={28}
                height={28}
              />
            </div>
            <h3 className="text-lg font-medium mb-2">免费送货服务</h3>
            <p className="text-sm text-gray-600">
              所有在线订单均可享受免费送货服务。
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-[#f5f5f7] p-6 rounded-2xl text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Image
                src="https://ext.same-assets.com/3468220153/1226124314.svg"
                alt="Apple experience"
                width={28}
                height={28}
              />
            </div>
            <h3 className="text-lg font-medium mb-2">Apple 专属体验</h3>
            <p className="text-sm text-gray-600">
              个性定制和选购帮助，确保获得最合适的 iPad。
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-[#f5f5f7] p-6 rounded-2xl text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Image
                src="https://ext.same-assets.com/3468220153/3450716328.svg"
                alt="Trade in"
                width={28}
                height={28}
              />
            </div>
            <h3 className="text-lg font-medium mb-2">旧机焕新</h3>
            <p className="text-sm text-gray-600">
              使用 Apple Trade In 换购服务，以旧换新，购新更省钱。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
