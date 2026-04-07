import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务项目 - 北京黑帝斯科技有限公司",
  description: "定制软件开发、系统集成、移动应用开发、技术咨询等专业软件服务。",
};

const services = [
  {
    title: "定制软件开发",
    desc: "基于对客户业务的深入理解，量身定制企业级软件系统。从需求调研、方案设计到开发测试、上线运维，提供全流程专业服务。",
    features: [
      "企业管理系统（ERP/CRM/OA）",
      "数据中台与BI分析平台",
      "业务流程自动化系统",
      "SaaS 平台开发",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "系统集成服务",
    desc: "打通企业内部各系统之间的数据壁垒，实现数据互通与流程自动化，提升整体运营效率。",
    features: [
      "API 网关与微服务架构",
      "企业数据总线（ESB）",
      "异构系统对接",
      "数据迁移与同步方案",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "移动应用开发",
    desc: "覆盖 iOS 与 Android 双平台，提供原生开发与跨平台开发方案，助力企业移动化战略落地。",
    features: [
      "iOS / Android 原生应用",
      "React Native / Flutter 跨平台",
      "企业移动办公 App",
      "小程序与 H5 应用",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "技术咨询服务",
    desc: "为企业提供专业的技术规划与咨询服务，帮助企业选择合适的技术路线，避免走弯路。",
    features: [
      "技术选型与架构设计",
      "性能优化与安全评估",
      "技术团队培训",
      "DevOps 流程建设",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "云服务与运维",
    desc: "提供云架构方案设计、部署实施与日常运维服务，确保系统高可用、高性能运行。",
    features: [
      "云架构设计与迁移",
      "容器化与 Kubernetes 编排",
      "CI/CD 持续集成部署",
      "7x24 系统监控与运维",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "AI 与大数据",
    desc: "利用人工智能与大数据技术，帮助企业实现智能决策、精准营销与业务自动化。",
    features: [
      "大模型应用开发",
      "智能客服与聊天机器人",
      "数据分析与可视化",
      "推荐系统与预测模型",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const process = [
  { step: "01", title: "需求调研", desc: "深入沟通，梳理业务需求与技术要求" },
  { step: "02", title: "方案设计", desc: "输出技术方案、架构设计与项目计划" },
  { step: "03", title: "开发实施", desc: "敏捷迭代开发，定期演示与反馈" },
  { step: "04", title: "测试交付", desc: "全面测试验收，部署上线与培训" },
  { step: "05", title: "持续运维", desc: "7x24 技术支持，持续优化迭代" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">服务项目</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              覆盖软件开发全生命周期，从技术咨询到运维保障，为企业提供端到端的专业服务。
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">服务流程</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">需要技术合作伙伴？</h2>
          <p className="text-lg text-white/80 mb-8">
            联系我们，获取免费的项目评估与技术方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            获取免费方案
          </Link>
        </div>
      </section>
    </>
  );
}
