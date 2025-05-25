"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative">
      {/* iPad title section */}
      <div className="text-center pt-8 pb-4">
        <h1 className="text-5xl md:text-6xl font-semibold mb-2">iCard</h1>
        <p className="text-xl text-gray-500 font-normal">
          多彩、强大、好玩。
          <br className="md:hidden" />
          全新体验超乎想象。
        </p>
      </div>

      {/* Main iPad image */}
      <div className="relative w-full max-w-5xl mx-auto px-4 pt-8">
        <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden">
          <div className="relative aspect-video w-full max-w-4xl mx-auto">
            <Image
              src="https://p1.ssl.qhmsg.com/t01da55a424f930a725.jpg"
              alt="iPad"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* "来了解更多 iPad" section */}
      <div className="text-center pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">来了解更多 iCard</h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 max-w-5xl mx-auto px-4">
          {/* Card 1 */}
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#f5f5f7] hover:shadow-md transition-shadow">
            <Link href="#">
              <div className="aspect-[3/4] relative">
                <Image
                  src="https://ts1.tc.mm.bing.net/th/id/R-C.33d937868143012e3cb9d2b94b0859ec?rik=cvCAQAXsPHPavw&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20200801ac%2f254%2fw640h414%2f20200801%2f3a3b-ixeeirz1839906.jpg"
                  alt="Person using iPad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-medium">生产力</h3>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#f5f5f7] hover:shadow-md transition-shadow">
            <Link href="#">
              <div className="aspect-[3/4] relative">
                <Image
                  src="https://puui.qpic.cn/vpic_cover/z3231xmman9/z3231xmman9_hz.jpg"
                  alt="Cat on iPad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-medium">自由性</h3>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#f5f5f7] hover:shadow-md transition-shadow">
            <Link href="#">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/image-placeholder-3.jpg"
                  alt="Person reading on iPad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-medium">出入</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* iPad product showcase */}
      <div className="text-center pt-10 pb-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">全系列产品超值推荐</h2>

        <div className="overflow-x-auto whitespace-nowrap pb-6 px-4">
          <div className="inline-flex gap-4 md:gap-8">
            <div className="w-40 md:w-52">
              <div className="bg-[#f5f5f7] rounded-2xl p-4 h-40 md:h-48 flex items-center justify-center">
                <div className="relative w-28 h-28 md:w-36 md:h-36">
                  <Image
                    src="https://d.uther.cn/2022/03/1648717407-0cdc5921898b917.jpg"
                    alt="iPad Pro"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-medium">iCard Plus</h3>
                <p className="text-sm text-gray-500">人人都爱。人人都能拥有。</p>
              </div>
            </div>

            <div className="w-40 md:w-52">
              <div className="bg-[#f5f5f7] rounded-2xl p-4 h-40 md:h-48 flex items-center justify-center">
                <div className="relative w-28 h-28 md:w-36 md:h-36">
                  <Image
                    src="https://tse1-mm.cn.bing.net/th/id/OIP-C.5l_U22VSNQp5eG5GOjqauQHaIB?cb=iwc2&rs=1&pid=ImgDetMain"
                    alt="iPad Air"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-medium">iCard Pro</h3>
                <p className="text-sm text-gray-500">功能强大，出众非凡。</p>
              </div>
            </div>

            <div className="w-40 md:w-52">
              <div className="bg-[#f5f5f7] rounded-2xl p-4 h-40 md:h-48 flex items-center justify-center">
                <div className="relative w-28 h-28 md:w-36 md:h-36">
                  <Image
                    src="https://pic.nximg.cn/file/20181005/26001490_103343858000_2.jpg"
                    alt="iPad"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-medium">iCard Studio</h3>
                <p className="text-sm text-gray-500">轻盈，多彩，强大。</p>
              </div>
            </div>
          </div>
        </div>

        <Link href="#" className="inline-block text-blue-600 font-medium text-lg hover:underline">
          比较所有 iCard 产品 &gt;
        </Link>
      </div>
    </section>
  );
}
