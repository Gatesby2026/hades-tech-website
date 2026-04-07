import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="黑帝斯科技"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  黑帝斯科技
                </div>
                <div className="text-xs text-gray-500">HADES TECHNOLOGY</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              专注于企业级软件开发，以技术驱动业务增长，为客户提供高质量的数字化解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2.5">
              {[
                { label: "关于我们", href: "/about" },
                { label: "服务项目", href: "/services" },
                { label: "案例展示", href: "/cases" },
                { label: "联系我们", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2.5">
              {[
                "定制软件开发",
                "系统集成服务",
                "移动应用开发",
                "技术咨询服务",
              ].map((item) => (
                <li key={item} className="text-sm text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                北京市
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contact@hades-tech.cn
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 010 18M12 3a14.5 14.5 0 000 18"
                  />
                </svg>
                www.hades-tech.cn
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                010-XXXX-XXXX
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} 北京黑帝斯科技有限公司
            版权所有
          </p>
          <p className="text-sm text-gray-500">京ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}
