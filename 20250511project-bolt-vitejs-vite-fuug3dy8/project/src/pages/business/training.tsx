import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaLock, FaGlobe, FaUsers, FaChalkboardTeacher, FaFileAlt, FaCheckCircle, FaClock, FaUserTie, FaTools } from 'react-icons/fa'

export default function TrainingPage() {
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
            ヒューマンエラー対策セキュリティ研修
          </h1>
          <p className="text-xl text-[#3CEFFF] mb-8">
            「うっかり」が会社を危険にさらさないために
          </p>
        </motion.div>
      </section>

      <div className="mb-8">
            <img
              src="/Proton-featured-image - Copy.jpg"
              alt="ハッカーはあなたのデータとお金を狙っています"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

      {/* Why Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">
            なぜ今、パスワードマネージャーとVPNが必要なのか？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <FaShieldAlt className="text-[#3CEFFF] text-3xl mb-4" />
              <p className="text-gray-300">約8割の情報漏洩は「人のミス（ヒューマンエラー）」が原因</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <FaLock className="text-[#3CEFFF] text-3xl mb-4" />
              <p className="text-gray-300">弱いパスワードや使い回しは、攻撃者に最も狙われるポイント</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <FaGlobe className="text-[#3CEFFF] text-3xl mb-4" />
              <p className="text-gray-300">フリーWi-Fiや在宅勤務でVPNを使わないと、通信内容が盗み見される危険性あり</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">
            ワークショップ概要（Proton Pass / VPN 使い方講座）
          </h2>
          <div className="bg-[#000B2E]/50 p-8 rounded-lg border border-[#3CEFFF]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaUsers className="text-[#3CEFFF] text-xl" />
                  <div>
                    <h3 className="font-bold">形式</h3>
                    <p className="text-gray-300">Zoomによるオンライン講義（録画可）</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-[#3CEFFF] text-xl" />
                  <div>
                    <h3 className="font-bold">時間</h3>
                    <p className="text-gray-300">60分（講義＋操作実演＋質疑応答）</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaUserTie className="text-[#3CEFFF] text-xl" />
                  <div>
                    <h3 className="font-bold">対象</h3>
                    <p className="text-gray-300">一般社員、総務／情シス部門、在宅勤務者など</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaFileAlt className="text-[#3CEFFF] text-xl" />
                  <div>
                    <h3 className="font-bold">費用</h3>
                    <p className="text-gray-300">1法人様 5万円（最大10名まで）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Structure */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">内容構成</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
              <h3 className="text-xl font-bold mb-4 text-[#3CEFFF]">前半40分：座学＋操作レクチャー</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#3CEFFF] mt-1" />
                  <span>ヒューマンエラーとは？過去の重大インシデント事例</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#3CEFFF] mt-1" />
                  <span>安全なパスワード設計と、Proton Passの実践的活用法</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#3CEFFF] mt-1" />
                  <span>VPNの必要性とProton VPNの導入・設定デモ</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#3CEFFF] mt-1" />
                  <span>「仕事で何を守らなければならないのか」を可視化する知識提供</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20">
              <h3 className="text-xl font-bold mb-4 text-[#3CEFFF]">後半20分：テスト＋質疑応答</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#3CEFFF] mt-1" />
                  <span>クイズ形式の理解度テスト</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#3CEFFF] mt-1" />
                  <span>テスト結果は部署別・職種別レポートとして翌営業日報告</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">受講者の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "今まで名前だけ聞いていたツールの実用価値がよくわかった",
              "社員の意識が目に見えて変わり始めた",
              "テスト結果が数字で出るので、部門ごとの教育指針にもなった"
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
              >
                <p className="text-gray-300 italic">「{testimonial}」</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Flow */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">実施までの流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: 1,
                title: "30分の事前打ち合わせ（Zoom）",
                icon: <FaUsers className="text-[#3CEFFF] text-3xl" />
              },
              {
                step: 2,
                title: "実施日時と対象者確定 → 本番実施",
                icon: <FaChalkboardTeacher className="text-[#3CEFFF] text-3xl" />
              },
              {
                step: 3,
                title: "テスト＆レポート提出（翌営業日）",
                icon: <FaFileAlt className="text-[#3CEFFF] text-3xl" />
              },
              {
                step: 4,
                title: "追加支援（希望者向け）",
                icon: <FaUsers className="text-[#3CEFFF] text-3xl" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
              >
                <div className="flex items-center gap-4">
                  {step.icon}
                  <div>
                    <div className="text-sm text-[#3CEFFF] mb-1">STEP {step.step}</div>
                    <h3 className="font-bold">{step.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended For */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">このような企業様におすすめ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "リモートワーク導入企業（VPNやID管理の周知が不十分）",
              "情報管理の属人化・ルール不在に不安がある",
              "IT担当者が多忙／外注管理が中心の中小企業"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
              >
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#3CEFFF]">お申し込み・ご相談</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://share.hsforms.com/2xhMDTeU9S16_4MBJ-O5A4gsodm3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3CEFFF] hover:bg-[#00D4FF] text-[#000B2E] font-semibold px-8 py-6 rounded-lg transition-colors flex flex-col items-center gap-2"
            >
              <FaFileAlt className="text-2xl" />
              <span>サービス資料をダウンロード</span>
            </a>
            <a
              href="https://meetings.hubspot.com/cubic-innov8/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#89FF94] hover:bg-[#60FF6C] text-[#000B2E] font-semibold px-8 py-6 rounded-lg transition-colors flex flex-col items-center gap-2"
            >
              <FaUserTie className="text-2xl" />
              <span>実施日程のご相談</span>
            </a>
            <Link
              to="/contact/estimate"
              className="border-2 border-[#3CEFFF] hover:bg-[#3CEFFF]/10 text-[#3CEFFF] px-8 py-6 rounded-lg transition-colors flex flex-col items-center gap-2"
            >
              <FaTools className="text-2xl" />
              <span>お見積もり・請求書対応可</span>
            </Link>
          </div>
          <p className="mt-8 text-gray-300">
            ※訪問型研修や30名以上の受講も対応可能です。ご相談ください。<br />
            本研修は「日本語・英語」いずれでもご提供可能です。
          </p>
        </div>
      </section>
    </div>
  )
}
