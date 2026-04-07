import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 - 北京黑帝斯科技有限公司",
  description: "了解北京黑帝斯科技有限公司的发展历程、核心团队与企业文化。",
};

const timeline = [
  { year: "2018", title: "公司成立", desc: "北京黑帝斯科技有限公司正式注册成立，开启创业征程" },
  { year: "2019", title: "团队扩展", desc: "核心研发团队组建完成，承接首批企业级定制开发项目" },
  { year: "2020", title: "业务突破", desc: "累计服务客户突破 20 家，涉及金融、医疗等多个行业" },
  { year: "2021", title: "产品化转型", desc: "推出自研产品线，实现从纯项目制向产品+服务模式转型" },
  { year: "2023", title: "规模增长", desc: "团队规模翻倍，累计交付项目超 150 个" },
  { year: "2025", title: "持续创新", desc: "深耕 AI 与大模型应用，助力企业智能化升级" },
];

const values = [
  { title: "技术为本", desc: "坚持技术驱动，持续跟进前沿技术，确保方案的先进性与可靠性" },
  { title: "客户至上", desc: "深入理解客户业务，以客户成功为导向，提供超预期的服务体验" },
  { title: "质量为先", desc: "严格的代码审查、自动化测试与持续集成，确保每一行代码的质量" },
  { title: "协作共赢", desc: "与客户建立长期合作伙伴关系，共同成长、共创价值" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">关于我们</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              北京黑帝斯科技有限公司成立于 2018 年，是一家专注于企业级软件开发的高新技术企业。
              我们致力于用前沿技术帮助企业实现数字化转型，提升运营效率。
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">我们的使命</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                以技术创新为核心驱动力，为企业客户提供高质量、可扩展的软件解决方案，助力各行各业实现数字化升级与业务增长。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我们相信，优秀的软件不仅仅是代码的堆砌，更是对业务深度理解的体现。从需求分析到架构设计，从开发实现到持续运维，我们在每个环节追求卓越。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-gray-600">年技术积累</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-gray-600">交付项目</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-gray-600">企业客户</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">30+</div>
                  <div className="text-sm text-gray-600">技术团队</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">核心价值观</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">发展历程</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{t.title}</h3>
                  <p className="text-sm text-gray-600">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
