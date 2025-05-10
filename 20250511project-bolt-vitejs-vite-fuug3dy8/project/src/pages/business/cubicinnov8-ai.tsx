import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaDatabase, FaClock, FaCheckCircle, FaQuestionCircle, FaChartLine, FaCode, FaTools, FaUserTie, FaFileAlt } from 'react-icons/fa'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface UseCase {
  category: string
  description: string
}

interface CopilotFeature {
  product: string
  description: string
}

const features: Feature[] = [
  {
    icon: <FaClock className="w-8 h-8 text-[#3CEFFF]" />,
    title: "最短3日納品",
    description: "スピーディーな導入で、すぐに効果を実感"
  },
  {
    icon: <FaUserTie className="w-8 h-8 text-[#3CEFFF]" />,
    title: "現場ヒアリングから専用設計",
    description: "業務プロセスに最適化されたAIソリューション"
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-[#3CEFFF]" />,
    title: "主要CRMと連携",
    description: "Zoho, HubSpot, Salesforceなどとシームレスに統合"
  },
  {
    icon: <FaCode className="w-8 h-8 text-[#3CEFFF]" />,
    title: "豊富なAPI対応",
    description: "LINE, Teams, ChatGPT APIなど多様な連携が可能"
  }
]

const useCases: UseCase[] = [
  {
    category: "問い合わせ対応",
    description: "AIチャットで社内外を24時間対応、自動振り分け"
  },
  {
    category: "採用・人事",
    description: "候補者対応、面接調整、応募前Q&Aの自動回答"
  },
  {
    category: "社内サポート",
    description: "経費・勤怠・総務FAQをBotで一元化"
  },
  {
    category: "マーケ・営業",
    description: "リード育成、CRM連携、ナーチャリング自動対応"
  },
  {
    category: "経理・法務",
    description: "契約・請求の質問対応、自動誤入力チェック"
  },
  {
    category: "教育・研修",
    description: "トレーニング進捗管理、社内リマインド通知"
  }
]

const copilotFeatures: CopilotFeature[] = [
  {
    product: "Copilot for Personal Use",
    description: "日報作成、会議要約Bot、Outlookメール自動分類など個人AI支援"
  },
  {
    product: "Microsoft 365 Copilot",
    description: "Excel／Teams連携AI展開、社内運用支援"
  },
  {
    product: "Copilot+ PCs 対応",
    description: "ローカルPC上でのAI高速処理／セキュリティ統合"
  },
  {
    product: "Copilot Studio",
    description: "独自Copilot構築（Power Apps／Power Automate連携）"
  },
  {
    product: "Azure AI Foundry",
    description: "Azure OpenAI／Cognitive Services／AI Search設計"
  }
]

export default function CubicInnov8AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000B2E] via-[#001853] to-[#000B2E] text-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3CEFFF] to-[#89FF94]">
            Cubic Innov8 AI
          </h1>
          <p className="text-xl text-[#3CEFFF] mb-8">
            貴社独自のAIで、業務を"楽"に、劇的に効率化
          </p>
          <div className="bg-[#001853]/50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">こんなお悩みありませんか？</h2>
            <ul className="text-left space-y-2">
              <li className="flex items-center gap-2">
                <FaQuestionCircle className="text-[#3CEFFF]" />
                <span>毎日問い合わせ対応に追われて、本来の業務に集中できない…</span>
              </li>
              <li className="flex items-center gap-2">
                <FaQuestionCircle className="text-[#3CEFFF]" />
                <span>採用に時間がかかりすぎて、他の仕事が後回しに…</span>
              </li>
              <li className="flex items-center gap-2">
                <FaQuestionCircle className="text-[#3CEFFF]" />
                <span>社員からの「同じ質問」に何度も対応している…</span>
              </li>
            </ul>
            <p className="text-lg mt-4 font-bold text-[#89FF94]">
              ➡️ それ、Cubic Innov8 AIで全部解決します！
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">Cubic Innov8 AIとは？</h2>
        <p className="text-xl text-center mb-12 text-gray-300">
          完全カスタム型AIソリューション<br />
          業務プロセスに最適化されたAIで、問い合わせ・採用・社内管理・申請処理を自動化。<br />
          CRMやチャット連携、クラウド活用も含め、最短3日で導入可能です。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#3CEFFF]">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">導入ステップ（最短3日）</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { step: 1, title: "お問い合わせ・課題ヒアリング", note: "無料" },
            { step: 2, title: "要件定義・プロセス整理", note: "現場インタビューあり" },
            { step: 3, title: "プロトタイプ納品＆仮導入" },
            { step: 4, title: "運用レクチャー・社内展開支援" },
            { step: 5, title: "KPI・効果測定＆レポート" },
            { step: 6, title: "24時間の保守・改善・メンテナンス" }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <div className="text-3xl font-bold text-[#3CEFFF] mb-4">STEP.{step.step}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              {step.note && (
                <p className="text-[#89FF94]">{step.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">よくある業務活用例（Use Case）</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <h3 className="text-xl font-bold mb-2 text-[#3CEFFF]">{useCase.category}</h3>
              <p className="text-gray-300">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Microsoft Integration */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#3CEFFF]">
            Copilot・Azure・生成AI連携で、業務はさらに"加速"する
          </h2>
          <p className="text-xl text-gray-300">
            Microsoft 365・Azureを活用したCopilot型AI導入にも完全対応。<br />
            既存IT環境を活かした"実践型AI運用"を構築します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {copilotFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <h3 className="text-xl font-bold mb-2 text-[#3CEFFF]">{feature.product}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#000B2E]/50 p-8 rounded-lg border border-[#3CEFFF]/20">
          <h3 className="text-2xl font-bold mb-6 text-[#3CEFFF]">カスタムCopilot活用例</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#3CEFFF] mt-1" />
              <span>社内ナレッジBot（資料検索・SOP応答・Teams通知）</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#3CEFFF] mt-1" />
              <span>営業日報の要約とCRMパイプライン登録自動化</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#3CEFFF] mt-1" />
              <span>顧客チャット→自動振り分け→CRM→営業通知</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#3CEFFF] mt-1" />
              <span>会議録画の文字起こし＋要点抽出＋共有まで自動化</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">対応技術スタック</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
            <h3 className="text-xl font-bold mb-4 text-[#3CEFFF]">M365 Copilot</h3>
            <p className="text-gray-300">Outlook, Excel, Teams, Planner, Word 連携</p>
          </div>
          <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
            <h3 className="text-xl font-bold mb-4 text-[#3CEFFF]">Azure AI</h3>
            <p className="text-gray-300">Azure OpenAI, AI Search, Form Recognizer, Translator</p>
          </div>
          <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
            <h3 className="text-xl font-bold mb-4 text-[#3CEFFF]">Power Platform</h3>
            <p className="text-gray-300">Power Automate, Power Apps, Power Virtual Agents</p>
          </div>
          <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
            <h3 className="text-xl font-bold mb-4 text-[#3CEFFF]">他クラウド</h3>
            <p className="text-gray-300">Google Workspace, Slack, Notion, LINE公式, HubSpot, Salesforceなど連携可</p>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">導入後の期待効果</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { metric: "問い合わせ対応時間", result: "最大60%削減" },
            { metric: "採用関連業務", result: "40%以上効率化" },
            { metric: "手動のナレッジ管理", result: "属人化を解消" },
            { metric: "営業活動の自動化", result: "リード転換率2倍" },
            { metric: "社内申請処理", result: "ミス・二度手間ゼロ化" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <FaChartLine className="text-[#3CEFFF] text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.metric}</h3>
              <p className="text-[#89FF94] text-lg font-bold">{item.result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">よくあるご質問</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              q: "初回相談やヒアリングに費用は？",
              a: "無料です（Zoom／現地対応）"
            },
            {
              q: "対応可能な業種は？",
              a: "全業種対応。特にIT、人材、教育、医療、製造に実績多数"
            },
            {
              q: "自社システムやクラウドとの連携は？",
              a: "はい。API／RPA／Webhookで柔軟に対応します"
            },
            {
              q: "費用体系は？",
              a: "初期構築費10万円〜＋月額。規模・業務範囲に応じ個別見積もり"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <h3 className="text-xl font-bold mb-2 text-[#3CEFFF] flex items-start gap-2">
                <FaQuestionCircle className="mt-1" />
                {item.q}
              </h3>
              <p className="text-gray-300">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#3CEFFF]">資料請求・導入相談</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/contact/document"
              className="bg-[#3CEFFF] hover:bg-[#00D4FF] text-[#000B2E] font-semibold px-8 py-6 rounded-lg transition-colors flex flex-col items-center gap-2"
            >
              <FaFileAlt className="text-2xl" />
              <span>サービス資料をダウンロード</span>
            </Link>
            <Link
              to="/contact/consultation"
              className="bg-[#89FF94] hover:bg-[#60FF6C] text-[#000B2E] font-semibold px-8 py-6 rounded-lg transition-colors flex flex-col items-center gap-2"
            >
              <FaUserTie className="text-2xl" />
              <span>AI導入に関する無料相談を予約</span>
            </Link>
            <div className="border-2 border-[#3CEFFF] text-[#3CEFFF] px-8 py-6 rounded-lg flex flex-col items-center gap-2 opacity-50 cursor-not-allowed">
              <FaTools className="text-2xl" />
              <span>他社の導入事例を見る（準備中）</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}