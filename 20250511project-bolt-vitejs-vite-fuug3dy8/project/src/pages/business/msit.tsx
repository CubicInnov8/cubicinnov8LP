import { FaShieldAlt, FaServer, FaHeadset, FaChartLine, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MSITPage() {
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
            MSIT（マネージドセキュリティ＆IT）サービス
          </h1>
          <p className="text-xl text-[#3CEFFF] mb-8">
            24時間365日、御社のITインフラを見守り続けます
          </p>
          <p className="text-lg text-gray-300 mb-8">
            サイバー攻撃対策から日々のIT運用まで、包括的なマネージドサービスを提供。<br />
            専任チームによる監視・運用で、セキュリティと業務効率を両立します。
          </p>
        </motion.div>
      </section>

      {/* Service Features */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">主なサービス内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
          >
            <FaShieldAlt className="text-4xl text-[#3CEFFF] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#3CEFFF]">セキュリティ監視・対策</h3>
            <p className="text-gray-300">24時間体制でのセキュリティ監視、インシデント対応、脆弱性管理を提供</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
          >
            <FaServer className="text-4xl text-[#3CEFFF] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#3CEFFF]">IT資産管理・運用</h3>
            <p className="text-gray-300">IT資産の可視化、パッチ管理、バックアップ運用を自動化</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
          >
            <FaHeadset className="text-4xl text-[#3CEFFF] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#3CEFFF]">ヘルプデスク</h3>
            <p className="text-gray-300">日本語・英語対応のITヘルプデスクで、ユーザーの業務をサポート</p>
          </motion.div>
        </div>
      </section>

      {/* Monthly Reports */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">月次レポート</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#000B2E]/50 p-8 rounded-lg border border-[#3CEFFF]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <FaChartLine className="text-4xl text-[#3CEFFF] mb-4" />
                <h3 className="text-xl font-bold mb-4">セキュリティレポート</h3>
                <ul className="space-y-2">
                  <li>• 検知・ブロックした脅威の数と種類</li>
                  <li>• セキュリティインシデントの詳細</li>
                  <li>• 脆弱性スキャン結果</li>
                  <li>• セキュリティ推奨事項</li>
                </ul>
              </div>
              <div>
                <FaFileAlt className="text-4xl text-[#3CEFFF] mb-4" />
                <h3 className="text-xl font-bold mb-4">IT運用レポート</h3>
                <ul className="space-y-2">
                  <li>• システム稼働状況</li>
                  <li>• パッチ適用状況</li>
                  <li>• バックアップ成功率</li>
                  <li>• ヘルプデスク対応実績</li>
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
  );
}