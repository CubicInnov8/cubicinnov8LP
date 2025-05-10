
import { motion } from 'framer-motion'
import { FaShieldAlt, FaServer, FaCloud, FaCheck} from 'react-icons/fa'

interface SoftwareVendor {
  name: string
  description: string
  icon: React.ReactNode
}

const softwareVendors: SoftwareVendor[] = [
  {
    name: "Kaseya VSA",
    description: "IT資産管理・監視・パッチ管理のRMMツール",
    icon: <FaServer className="w-12 h-12 text-[#3CEFFF]" />
  },
  {
    name: "Microsoft",
    description: "Microsoft 365, Azure, Defender for Endpoint など",
    icon: <FaCloud className="w-12 h-12 text-[#3CEFFF]" />
  },
  {
    name: "Datto",
    description: "EDR・バックアップ・災害復旧ソリューション",
    icon: <FaShieldAlt className="w-12 h-12 text-[#3CEFFF]" />
  },
  {
    name: "AssetView",
    description: "IT資産管理・情報漏洩対策ツール",
    icon: <FaServer className="w-12 h-12 text-[#3CEFFF]" />
  },
  {
    name: "ヤマハ / Palo Alto Networks",
    description: "UTM・次世代ファイアウォール",
    icon: <FaShieldAlt className="w-12 h-12 text-[#3CEFFF]" />
  },
  {
    name: "Google",
    description: "Google Workspace, Cloud Platform",
    icon: <FaCloud className="w-12 h-12 text-[#3CEFFF]" />
  },
  {
    name: "One Identity",
    description: "特権アクセス管理・ID管理",
    icon: <FaShieldAlt className="w-12 h-12 text-[#3CEFFF]" />
  },
  {
    name: "CyberReason",
    description: "AIベースのEDRソリューション",
    icon: <FaShieldAlt className="w-12 h-12 text-[#3CEFFF]" />
  },
  {
    name: "Acronis",
    description: "統合バックアップ・サイバー保護",
    icon: <FaShieldAlt className="w-12 h-12 text-[#3CEFFF]" />
  }
]

export default function PartnersPage() {
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
            パートナー企業
          </h1>
          <p className="text-xl text-[#3CEFFF] mb-8">
            信頼できるパートナーと共に、お客様のビジネスを支援します
          </p>
        </motion.div>
      </section>

      {/* Featured Partner Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">主要パートナー</h2>
          
          <div className="bg-[#000B2E]/50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img
                  src="https://www.cnet-ms.com/company/images/logo.png"
                  alt="CNET Media Service"
                  className="w-full"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">株式会社CNETメディアサービス</h3>
                <p className="text-gray-300 mb-4">平成20年6月に創業。ITサービス企業。</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#3CEFFF] mb-4">主な事業内容</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#001853]/50 p-4 rounded-lg text-center">
                        <h5 className="font-semibold mb-2">デジタルサイネージ事業</h5>
                        <p className="text-sm text-gray-300">オムニバス・ビジョン販売</p>
                      </div>
                      <div className="bg-[#001853]/50 p-4 rounded-lg text-center">
                        <h5 className="font-semibold mb-2">インフラ構築事業</h5>
                        <p className="text-sm text-gray-300">ネットワーク・CTI構築</p>
                      </div>
                      <div className="bg-[#001853]/50 p-4 rounded-lg text-center">
                        <h5 className="font-semibold mb-2">運用・サポート事業</h5>
                        <p className="text-sm text-gray-300">企業向けITサポート</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#3CEFFF] mb-4">強み</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <FaCheck className="text-[#3CEFFF]" />
                        <span>自社データセンター（戸田・台湾）を保有</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheck className="text-[#3CEFFF]" />
                        <span>ワンストップ・サポートツールの提供</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheck className="text-[#3CEFFF]" />
                        <span>豊富な運用技術とサポート技術</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Vendors Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">ソフトウェアベンダーパートナー</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {softwareVendors.map((vendor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <div className="mb-4">{vendor.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#3CEFFF]">{vendor.name}</h3>
              <p className="text-gray-300">{vendor.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#3CEFFF]">
            パートナー企業と共に、お客様のビジネスを支援します
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            最適なソリューションについて、お気軽にご相談ください。
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
              資料をダウンロード
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}