import { motion } from 'framer-motion'
import { FaServer, FaCloud, FaCheckCircle, FaDatabase, FaShieldAlt, FaLaptop, FaNetworkWired } from 'react-icons/fa'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface Product {
  name: string
  description: string
  features: string[]
}

const features: Feature[] = [
  {
    icon: <FaServer className="w-8 h-8 text-[#3CEFFF]" />,
    title: "リアルタイムの自動バックアップ",
    description: "PC・サーバ両対応のリアルタイムバックアップで、データを常に保護します。"
  },
  {
    icon: <FaCloud className="w-8 h-8 text-[#3CEFFF]" />,
    title: "ローカル＋クラウドの二重保存",
    description: "Datto Cloudへの自動転送で、オフサイトバックアップを実現します。"
  },
  {
    icon: <FaLaptop className="w-8 h-8 text-[#3CEFFF]" />,
    title: "仮想マシンによる即時復旧",
    description: "仮想環境で即座に業務を再開できる「すぐ使える」リカバリ環境を提供。"
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-[#3CEFFF]" />,
    title: "物理障害・ウイルス被害からの復旧",
    description: "ハードウェア故障やランサムウェア被害からの迅速な復旧を支援します。"
  }
]

const dattoProducts: Product[] = [
  {
    name: "SIRIS",
    description: "中～大規模向けBCDR基盤",
    features: ["オンプレミス＆クラウドバックアップ", "仮想マシンによる即時復旧", "ランサムウェア検知"]
  },
  {
    name: "ALTO",
    description: "小規模企業向け簡易BCDRモデル",
    features: ["クラウドファースト設計", "シンプルな運用", "コスト効率の良い保護"]
  },
  {
    name: "Endpoint Backup",
    description: "PC単位の保護",
    features: ["エンドポイントの直接保護", "シームレスなバックアップ", "柔軟な復元オプション"]
  },
  {
    name: "Azure Backup",
    description: "クラウド環境保護",
    features: ["Azure環境の保護", "クラウドネイティブ", "スケーラブルな運用"]
  }
]

export default function BCDRPage() {
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
            DattoのBCDRソリューション — 「止まらない会社」をつくる仕組
          </h1>
          <p className="text-xl text-[#3CEFFF] mb-8">
            もしも業務サーバー、PCが壊れたら？
          </p>
          <p className="text-lg text-gray-300 mb-8">
            突然のサイバー攻撃、PCの故障、災害によって業務データが失われると、会社の信用や収益に直結します。<br />
            だからこそ、今求められるのは「ただのバックアップではない」即復旧できる 事業継続・災害復旧（BCDR）ソリューションです。
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">Datto SIRISとは？</h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Datto SIRIS は、バックアップと災害復旧（DR）を統合した、中小企業・MSP向けのオールインワンBCDRシステムです。
        </p>
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

      {/* Backup Flow Diagram */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">
            データ保護の基本「3-2-1ルール」とは？
          </h2>
          <div className="bg-[#001853]/30 p-8 rounded-lg mb-8">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#3CEFFF] w-6 h-6 flex-shrink-0" />
                <span>3： データを3つ保持（元データ＋2コピー）</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#3CEFFF] w-6 h-6 flex-shrink-0" />
                <span>2： 2種類の異なるメディアに保存（例：HDDとクラウド）</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#3CEFFF] w-6 h-6 flex-shrink-0" />
                <span>1： 少なくとも1つはオフサイト（外部環境）に保管</span>
              </li>
            </ul>
            <p className="mt-6 text-gray-300">
              Datto SIRISはこの3-2-1ルールを自動で実現。<br />
              社内外にデータを分散保管し、仮想化で<strong className="text-[#3CEFFF]">「すぐに戻れる」</strong>状態をキープします。
            </p>
          </div>
        </div>
      </section>

      {/* Datto Products */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">関連プロダクト（Datto社）</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dattoProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <h3 className="text-xl font-bold mb-2 text-[#3CEFFF]">{product.name}</h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#3CEFFF] rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#3CEFFF]">
            Cubic Innov8では導入から運用までフルサポート
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
              <FaServer className="w-8 h-8 text-[#3CEFFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold">貴社環境に合わせたBCDR設計</h3>
            </div>
            <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
              <FaDatabase className="w-8 h-8 text-[#3CEFFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold">監視・復旧支援・レポート自動化</h3>
            </div>
            <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
              <FaNetworkWired className="w-8 h-8 text-[#3CEFFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Microsoft 365・Google Workspaceとの連携も可能</h3>
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