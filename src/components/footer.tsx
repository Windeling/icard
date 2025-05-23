"use client";

import Link from "next/link";

type FooterColumn = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "选购及了解",
    links: [
      { label: "商店", href: "#" },
      { label: "Mac", href: "#" },
      { label: "iPad", href: "#" },
      { label: "iPhone", href: "#" },
      { label: "Watch", href: "#" },
      { label: "AirPods", href: "#" },
      { label: "iCard Care+", href: "#" },
    ],
  },
  {
    title: "服务",
    links: [
      { label: "Apple Music", href: "#" },
      { label: "iCloud+", href: "#" },
      { label: "Apple TV+", href: "#" },
      { label: "Apple Books", href: "#" },
      { label: "Apple Podcast", href: "#" },
      { label: "App Store", href: "#" },
    ],
  },
  {
    title: "Apple 价值观",
    links: [
      { label: "无障碍", href: "#" },
      { label: "环境", href: "#" },
      { label: "隐私", href: "#" },
      { label: "供应商责任", href: "#" },
    ],
  },
  {
    title: "关于 Apple",
    links: [
      { label: "Newsroom", href: "#" },
      { label: "管理团队", href: "#" },
      { label: "职业机会", href: "#" },
      { label: "投资者", href: "#" },
      { label: "活动", href: "#" },
      { label: "联系 Apple", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-xs">
      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-12 pb-8">
        <div className="border-b border-gray-300 pb-8">
          <p className="mb-3 leading-relaxed">
            * 月供价仅供符合条件的借款人参考，实际付款金额取决于你的最终还款期限、银行实际批准的结果、你的信用记录和其他可能影响实际放款的因素。
          </p>
          <p className="mb-3 leading-relaxed">
            ① 可回收材料包括相应产品（iPad、Apple Pencil、Magic Keyboard 或 Smart
            Folio）中的部分回收材料。
          </p>
          <p className="leading-relaxed">
            Apple 公司保留随时修改任何产品价格的权利，恕不另行通知。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#1d1d1f] hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="mb-2">更多选购方式：<Link href="#" className="text-blue-600 hover:underline">查找你附近的 Apple Store 零售店</Link> 或其他<Link href="#" className="text-blue-600 hover:underline">授权经销商</Link></p>
            <p>Copyright © 2025 Apple Inc. 保留所有权利。</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#1d1d1f] hover:underline">隐私政策</Link>
            <Link href="#" className="hover:text-[#1d1d1f] hover:underline">使用条款</Link>
            <Link href="#" className="hover:text-[#1d1d1f] hover:underline">销售政策</Link>
            <Link href="#" className="hover:text-[#1d1d1f] hover:underline">法律信息</Link>
            <Link href="#" className="hover:text-[#1d1d1f] hover:underline">网站地图</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
