import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "案例展示 - 北京黑帝斯科技有限公司",
  description: "查看黑帝斯科技为各行业客户交付的成功案例。",
};

const cases = [
  {
    category: "金融行业",
    title: "某银行智能风控系统",
    desc: "为某城市商业银行打造智能风控平台，整合多维度数据源，实现实时风险评估与预警，不良贷款率降低 35%。",
    tags: ["大数据", "风控模型", "实时计算"],
    color: "from-blue-500 to-blue-600",
  },
  {
    category: "医疗健康",
    title: "区域医疗信息化平台",
    desc: "为某区域卫健委构建医疗信息共享平台，连通区域内 20+ 家医疗机构，实现电子病历互认与检验结果共享。",
    tags: ["HL7/FHIR", "微服务", "数据安全"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    category: "智能制造",
    title: "工业 IoT 数据中台",
    desc: "为某制造企业构建 IoT 数据中台，接入 5000+ 设备传感器，实现设备状态实时监控与预测性维护，设备停机率降低 40%。",
    tags: ["IoT", "时序数据库", "数据可视化"],
    color: "from-orange-500 to-orange-600",
  },
  {
    category: "教育科技",
    title: "在线教育 SaaS 平台",
    desc: "为某教育集团打造在线教育 SaaS 平台，支持直播授课、录播回放、在线考试等功能，服务 10 万+ 学员。",
    tags: ["SaaS", "音视频", "高并发"],
    color: "from-purple-500 to-purple-600",
  },
  {
    category: "电子商务",
    title: "跨境电商 ERP 系统",
    desc: "为某跨境电商企业定制 ERP 系统，打通 Amazon、Shopify 等多平台订单、库存与物流数据，运营效率提升 60%。",
    tags: ["多平台对接", "ERP", "自动化"],
    color: "from-pink-500 to-pink-600",
  },
  {
    category: "物流运输",
    title: "智慧物流调度平台",
    desc: "为某物流企业构建智能调度系统，基于算法优化配送路线，结合实时路况动态调整，配送时效提升 25%。",
    tags: ["路径优化", "GIS", "实时调度"],
    color: "from-cyan-500 to-cyan-600",
  },
];

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">案例展示</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              精选客户成功案例，展示我们在不同行业领域的技术实力与交付能力。
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`h-48 bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                  <span className="text-white/90 text-5xl font-bold opacity-20">
                    {c.category.slice(0, 2)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-primary mb-2">{c.category}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">想了解更多案例细节？</h2>
          <p className="text-lg text-gray-600 mb-8">
            我们可以为您提供更详细的案例介绍与针对性的解决方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            联系我们
          </Link>
        </div>
      </section>
    </>
  );
}
