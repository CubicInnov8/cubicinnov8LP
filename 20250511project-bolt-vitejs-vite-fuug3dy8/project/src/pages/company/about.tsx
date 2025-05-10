import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000B2E] via-[#001853] to-[#000B2E] text-white pt-20">
      {/* Company Overview Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3CEFFF] to-[#89FF94]">
            会社概要
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-[#001853]/30 rounded-lg p-8">
            <table className="w-full">
              <tbody className="divide-y divide-[#3CEFFF]/20">
                <tr>
                  <th className="py-4 text-left w-1/3 text-[#3CEFFF]">会社名</th>
                  <td className="py-4">株式会社キュービックイノベート</td>
                </tr>
                <tr>
                  <th className="py-4 text-left text-[#3CEFFF]">代表取締役</th>
                  <td className="py-4">塩田祐亮</td>
                </tr>
                <tr>
                  <th className="py-4 text-left text-[#3CEFFF]">資本金</th>
                  <td className="py-4">２５０万円</td>
                </tr>
                <tr>
                  <th className="py-4 text-left text-[#3CEFFF]">取引先銀行</th>
                  <td className="py-4">GMOあおぞら銀行</td>
                </tr>
                <tr>
                  <th className="py-4 text-left text-[#3CEFFF]">顧問税理士</th>
                  <td className="py-4">松崎会計事務所</td>
                </tr>
                <tr>
                  <th className="py-4 text-left text-[#3CEFFF]">主な取引先</th>
                  <td className="py-4">
                    <ul className="list-disc list-inside space-y-2">
                      <li>株式会社CNETメディアサービス</li>
                      <li>行政書士法人YUGE Office</li>
                      <li>株式会社マイトベーシックサービス</li>
                      <li>株式会社Y&Kパートナーズ</li>
                      <li>合同会社ハッピーアトラクション</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">代表者プロフィール</h2>
          
          <div className="bg-[#000B2E]/50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="aspect-square bg-[#3CEFFF]/10 rounded-lg flex items-center justify-center">
                  <FaBriefcase className="w-20 h-20 text-[#3CEFFF]" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">塩田 祐亮 – 代表取締役</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#3CEFFF] mb-2">職歴</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <FaBriefcase className="text-[#3CEFFF] mt-1" />
                        <div>
                          <p className="font-semibold">2024年9月 - 現在</p>
                          <p>株式会社キュービックイノベート 代表取締役</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaBriefcase className="text-[#3CEFFF] mt-1" />
                        <div>
                          <p className="font-semibold">2024年4月 - 9月</p>
                          <p>HAPPY ATTRACTION LLC COO</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaBriefcase className="text-[#3CEFFF] mt-1" />
                        <div>
                          <p className="font-semibold">2020年3月 - 2024年9月</p>
                          <p>弓削行政書士事務所 マーケティング・営業担当</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaBriefcase className="text-[#3CEFFF] mt-1" />
                        <div>
                          <p className="font-semibold">2024年1月 - 2024年8月</p>
                          <p>Kaseya 法人ソフトウェア営業アカウントマネージャー</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaBriefcase className="text-[#3CEFFF] mt-1" />
                        <div>
                          <p className="font-semibold">2022年9月 - 2024年1月</p>
                          <p>American Express カスタマーケア担当</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaBriefcase className="text-[#3CEFFF] mt-1" />
                        <div>
                          <p className="font-semibold">2021年2月 - 2023年4月</p>
                          <p>PERSONAL BEST APPAREL 創業者</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#3CEFFF] mb-2">学歴</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <FaGraduationCap className="text-[#3CEFFF] mt-1" />
                        <div>
                          <p className="font-semibold">2024年8月 - 2024年11月</p>
                          <p>Wharton (University of Pennsylvania Business School) Online</p>
                          <p className="text-sm text-gray-400">Private Equity Certificate</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaGraduationCap className="text-[#3CEFFF] mt-1" />
                        <div>
                          <p className="font-semibold">2019年 - 2022年</p>
                          <p>University of South Australia</p>
                          <p className="text-sm text-gray-400">Bachelor of Information Technology, Cyber Security, Data Analytics and Accounting</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">代表者メッセージ</h2>
          
          <div className="bg-[#001853]/30 rounded-lg p-8">
            <div className="text-lg text-gray-300 space-y-4">
              <p>
                いま、企業を狙うサイバー攻撃は国家や大企業に限られた話ではありません。私たちが支援する中小企業でも、日々「気づかれない攻撃」が水面下で進行しています。
              </p>
              <p>
                ランサムウェア、ファイルレスマルウェア、AIを悪用したゼロデイ攻撃。従来のウイルス対策ソフトだけでは守り切れない時代に入りました。
              </p>
              <p>
                一方で、サイバーセキュリティ対策は「コスト」として扱われがちです。特に中小企業にとって、予算や専門人材の制約は大きな壁です。
              </p>
              <p>
                しかし、サイバー攻撃による業務停止や信頼喪失のリスクは、事業継続に直結します。
              </p>
              <p>
                だからこそ私たちは、セキュリティ対策の"民主化"を掲げ、
              </p>
              <p>
                「必要なものを、必要な分だけ」「誰でも導入できる価格で」提供する、MSITサービス（マネージドセキュリティ＆IT）を構築しました。
              </p>
              <p>
                Cubic Innov8は、IT管理・エンドポイント防御・SOC監視をワンストップで提供する"専属のITセキュリティチーム"として、御社の業務を日々見守り支えます。
                それは、事件が起きてから動くのではなく、「何も起きない状態を保つ」ことに全力を尽くすということ。
              </p>
              <p>
                ブロックされた攻撃の記録、検知された異常通信の傾向、そして「何も起きなかったこと」を証明する月次レポート。
              </p>
              <p>
                Cubic Innov8の仕事は、"静かな成果"でありながら、確実に経営の安心と継続を支えます。
              </p>
              <p>
                まずは無料相談から、御社の状況をお聞かせください。
              </p>
              <p>
                その一歩が、会社全体を守る"転換点"になるはずです。
              </p>
              <p className="text-right mt-8">
                株式会社キュービックイノベート　代表取締役　塩田祐亮
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#3CEFFF]">お問い合わせ</h2>
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