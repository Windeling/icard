"use client";

import Image from "next/image";
import Link from "next/link";

export function AccessoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          iCard 左膀右臂
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Apple Pencil */}
          <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                <Image
                  src="https://cbu01.alicdn.com/img/ibank/O1CN01v7sPEh1UJfjDyi27J_!!2812532497-0-cib.jpg"
                  alt="Apple Pencil"
                  width={40}
                  height={40}
                  className="mb-4 md:mb-0 md:mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">iCard 挂绳</h3>
                  <p className="text-gray-600">
                    无与伦比的安全和保护体验，让你的iCard免于丢失。
                  </p>
                </div>
              </div>

              <div className="relative aspect-video md:aspect-[16/9] w-full">
                <Image
                  src="https://cbu01.alicdn.com/img/ibank/O1CN01ih2cRm1UJfdHwjn8X_!!2812532497-0-cib.jpg"
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
                  了解更多关于 iCard 挂绳 &gt;
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
                  <h3 className="text-2xl font-semibold mb-2">适用于 iCard 保护套</h3>
                  <p className="text-gray-600">
                    挂绳与保护套的完美结合，带来每时每刻的守护体验。
                  </p>
                </div>
              </div>

              <div className="relative aspect-video md:aspect-[16/9] w-full">
                <Image
                  src="https://img.alicdn.com/i3/827073576/O1CN01oIhxAc1cHqw8WIvZR_!!827073576.jpg"
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
                  了解更多关于iCard 保护套 &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          在 Windelingの間 购买 iCard 好处多多
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
            <h3 className="text-lg font-medium mb-2">专属体验</h3>
            <p className="text-sm text-gray-600">
              个性定制和选购帮助，确保获得最合适的 iCard。
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
              使用 Windelingの間 Trade In 换购服务，以旧换新，购新更省钱。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
