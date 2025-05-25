"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function ProductComparison() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* iPad Pro */}
          <div className="flex flex-col">
            <div className="h-48 bg-[#f5f5f7] rounded-t-xl flex items-center justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src="https://pic.nximg.cn/file/20181005/26001490_103343858000_2.jpg"
                  alt="iPad Pro"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1 border border-gray-200 rounded-b-xl p-6">
              <h3 className="text-xl font-medium mb-1">iCard Studio</h3>
              <p className="text-sm text-gray-500 mb-4">轻盈，多彩，强大。</p>
              <p className="text-sm font-medium mb-2">
                RMB 8999 起
              </p>
              <div className="space-y-3 mt-6">
                <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700">购买</Button>
                <Button variant="outline" className="w-full rounded-full">了解更多</Button>
              </div>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/2116946807.svg"
                    alt="M4 chip"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>M3 芯片</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="text-center">
                    <p className="font-medium">13"</p>
                    <p className="text-xs text-gray-500">或</p>
                    <p className="font-medium">11"</p>
                  </div>
                  <div className="text-center">
                    <p>Liquid Retina XDR 显示屏</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/739323769.svg"
                    alt="Camera"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>1200万像素点阵打印</p>
                  <p className="text-xs text-gray-500">4K ProRes 辨析度</p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/2178348899.svg"
                    alt="Front camera"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>1200万像素超广角前置摄像头</p>
                  <p className="text-xs text-gray-500">支持 Center Stage</p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/1261842590.svg"
                    alt="USB-C"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>Card-B 接口</p>
                  <p className="text-xs text-gray-500">支持 Thunderbolt</p>
                </div>

                <div className="flex flex-col items-center">
                  <p>支持</p>
                  <p className="font-medium">iCard 挂绳</p>
                  <p>及</p>
                  <p className="font-medium">iCard 保护套</p>
                </div>
              </div>
            </div>
          </div>

          {/* iPad Air */}
          <div className="flex flex-col">
            <div className="h-48 bg-[#f5f5f7] rounded-t-xl flex items-center justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src="https://tse1-mm.cn.bing.net/th/id/OIP-C.5l_U22VSNQp5eG5GOjqauQHaIB?cb=iwc2&rs=1&pid=ImgDetMain"
                  alt="iPad Air"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1 border border-gray-200 rounded-b-xl p-6">
              <h3 className="text-xl font-medium mb-1">iCard Pro</h3>
              <p className="text-sm text-gray-500 mb-4">终极 iCard 体验。</p>
              <p className="text-sm font-medium mb-2">
                RMB 4799 起
              </p>
              <div className="space-y-3 mt-6">
                <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700">购买</Button>
                <Button variant="outline" className="w-full rounded-full">了解更多</Button>
              </div>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/3514963093.svg"
                    alt="M3 chip"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>A17 Pro 芯片</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="text-center">
                    <p className="font-medium">13"</p>
                    <p className="text-xs text-gray-500">或</p>
                    <p className="font-medium">11"</p>
                  </div>
                  <div className="text-center">
                    <p>Liquid Retina 显示屏</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/3802305963.svg"
                    alt="Camera"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>1200万像素点阵打印</p>
                  <p className="text-xs text-gray-500">4K 视频</p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/2178348899.svg"
                    alt="Front camera"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>1200万像素超广角前置摄像头</p>
                  <p className="text-xs text-gray-500">支持 Center Stage</p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/1261842590.svg"
                    alt="USB-C"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>USB-C 接口</p>
                </div>

                <div className="flex flex-col items-center">
                  <p>支持</p>
                  <p className="font-medium">iCard 挂绳</p>
                  <p>及</p>
                  <p className="font-medium">iCard 保护套</p>
                </div>
              </div>
            </div>
          </div>

          {/* iPad */}
          <div className="flex flex-col">
            <div className="h-48 bg-[#f5f5f7] rounded-t-xl flex items-center justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src="https://d.uther.cn/2022/03/1648717407-0cdc5921898b917.jpg"
                  alt="iPad"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1 border border-gray-200 rounded-b-xl p-6">
              <h3 className="text-xl font-medium mb-1">iCard Plus</h3>
              <p className="text-sm text-gray-500 mb-4">人人都爱。人人都能拥有。</p>
              <p className="text-sm font-medium mb-2">
                RMB 2999 起
              </p>
              <div className="space-y-3 mt-6">
                <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700">购买</Button>
                <Button variant="outline" className="w-full rounded-full">了解更多</Button>
              </div>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/2995127573.svg"
                    alt="A16 Bionic chip"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>A16 仿生芯片</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="text-center">
                    <p className="font-medium">11"</p>
                  </div>
                  <div className="text-center">
                    <p>Liquid Retina 显示屏</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/3802305963.svg"
                    alt="Camera"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>1200万像素摄像头</p>
                  <p className="text-xs text-gray-500">4K 视频</p>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://ext.same-assets.com/3468220153/2178348899.svg"
                    alt="Front camera"
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <p>1200万像素超广角前置摄像头</p>
                  <p className="text-xs text-gray-500">支持 Center Stage</p>
                </div>

                <div className="flex flex-col items-center">
                  <p>支持</p>
                  <p className="font-medium">iCard 挂绳</p>
                  <p>及</p>
                  <p className="font-medium">iCard 保护套</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
