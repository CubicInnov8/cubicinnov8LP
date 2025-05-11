import { motion } from 'framer-motion'
import { FaHeadset, FaUsers, FaGlobe, FaCheckCircle, FaClock, FaChartLine } from 'react-icons/fa'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <FaHeadset className="w-8 h-8 text-[#3CEFFF]" />,
    title: "24時間365日対応",
    description: "日本語・英語のバイリンガルサポートで、いつでも安心"
  },
  {
    icon: <FaUsers className="w-8 h-8 text-[#3CEFFF]" />,
    title: "専任チーム制",
    description: "お客様専用のチームが一貫してサポート"
  },
  {
    icon: <FaGlobe className="w-8 h-8 text-[#3CEFFF]" />,
    title: "マルチプラットフォーム対応",
    description: "Windows, Mac, iOS, Androidなど、あらゆる環境をサポート"
  },
  {
    icon: <FaClock className="w-8 h-8 text-[#3CEFFF]" />,
    title: "迅速な初期対応",
    description: "15分以内の一次回答で、業務の中断を最小限に"
  }
]

export default function HelpdeskPage() {
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
            ITヘルプデスク
          </h1>
          <p className="text-xl text-[#3CEFFF] mb-8">
            社員の「困った」をすぐに解決
          </p>
          <p className="text-lg text-gray-300 mb-8">
            PCトラブル、アプリケーションの設定、セキュリティ対策など、<br />
            日々のIT関連の「困った」を専任チームが解決します。
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">サービスの特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Support Flow */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">
            サポートの流れ
          </h2>
          <div className="bg-[#001853]/30 p-8 rounded-lg mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#3CEFFF]/20 p-3 rounded-full">
                  <span className="text-[#3CEFFF] font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">問い合わせ受付</h3>
                  <p className="text-gray-300">電話・メール・チャットで問い合わせを受付</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#3CEFFF]/20 p-3 rounded-full">
                  <span className="text-[#3CEFFF] font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">初期切り分け</h3>
                  <p className="text-gray-300">15分以内に一次回答・対応方針をご案内</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#3CEFFF]/20 p-3 rounded-full">
                  <span className="text-[#3CEFFF] font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">リモート対応</h3>
                  <p className="text-gray-300">必要に応じてリモートで直接サポート</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#3CEFFF]/20 p-3 rounded-full">
                  <span className="text-[#3CEFFF] font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">解決確認</h3>
                  <p className="text-gray-300">問題解決の確認と再発防止のアドバイス</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Coverage */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">サポート対応範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
            <h3 className="text-xl font-bold mb-4 text-[#3CEFFF]">基本サポート</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>PCセットアップ</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>メール設定</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>プリンター設定</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>ネットワーク接続</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
            <h3 className="text-xl font-bold mb-4 text-[#3CEFFF]">アプリケーション</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>Office 365</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>Google Workspace</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>Zoom/Teams</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>その他業務アプリ</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
            <h3 className="text-xl font-bold mb-4 text-[#3CEFFF]">セキュリティ</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>ウイルス対策</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>VPN設定</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>パスワード管理</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#3CEFFF]" />
                <span>セキュリティ研修</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Monthly Report */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">月次レポート</h2>
          <div className="bg-[#000B2E]/50 p-8 rounded-lg border border-[#3CEFFF]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <FaChartLine className="text-4xl text-[#3CEFFF] mb-4" />
                <h3 className="text-xl font-bold mb-4">サポート実績</h3>
                <ul className="space-y-2">
                  <li>• 問い合わせ件数と解決率</li>
                  <li>• 対応時間の分析</li>
                  <li>• よくある問い合わせの傾向</li>
                  <li>• ユーザー満足度</li>
                </ul>
              </div>
              <div>
                <FaUsers className="text-4xl text-[#3CEFFF] mb-4" />
                <h3 className="text-xl font-bold mb-4">改善提案</h3>
                <ul className="space-y-2">
                  <li>• トレーニング推奨事項</li>
                  <li>• システム改善案</li>
                  <li>• セキュリティ対策の提案</li>
                  <li>• コスト削減のヒント</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#3CEFFF]">
            まずは無料で相談しませんか？
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            「自社にはどこまで必要？」「今のままで大丈夫？」<br />
            そんな疑問に対して、専門家がわかりやすくご説明します。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://meetings.hubspot.com/cubic-innov8/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3CEFFF] hover:bg-[#00D4FF] text-[#000B2E] font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              無料相談を予約する
            </a>
            <a
              href="https://share.hsforms.com/2xhMDTeU9S16_4MBJ-O5A4gsodm3"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#3CEFFF] hover:bg-[#3CEFFF]/10 text-[#3CEFFF] px-8 py-3 rounded-lg transition-colors"
            >
              資料をダウンロードする
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
