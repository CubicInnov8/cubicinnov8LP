import { motion } from 'framer-motion'
import { FaShieldAlt, FaCloud, FaHeadset, FaChartLine, FaEnvelope, FaUsers, FaCheckCircle } from 'react-icons/fa'

interface JobPosting {
  id: string
  title: string
  type: string
  location: string
  description: string
  requirements: string[]
  welcomeSkills: string[]
  schedule?: {
    day: string
    hours: string
  }[]
  benefits: string[]
}

const jobPostings: JobPosting[] = [
  {
    id: "sales-intern",
    title: "営業インターン｜IT・セキュリティ業界で実践的な営業スキルを磨きたい方へ",
    type: "無給インターン",
    location: "Sydney",
    description: `Cubic Innov8（キュービック・イノベイト）は、日豪連携のIT・サイバーセキュリティベンチャーです。現在、法人向けITサービス（MSIT）の営業支援を担っていただける営業インターンを募集しています。

IT業界やスタートアップに関心のある方、将来は法人営業やグローバル環境での仕事に挑戦したい方にとって、リアルな現場で力を試せるポジションです。`,
    requirements: [
      "週10時間程度の稼働ができる方（目安：3ヶ月以上）",
      "PC作業に慣れており、ビジネスチャット／Zoomなどのツールが使える方",
      "Sydney在住で、木曜出勤が可能な方"
    ],
    welcomeSkills: [
      "営業・カスタマーサポート・接客経験",
      "HubSpot、Notion、M365などのツール利用経験",
      "IT業界、サイバーセキュリティ分野への知識・学習意欲"
    ],
    schedule: [
      { day: "月", hours: "時間指定なし（2時間）" },
      { day: "火", hours: "時間指定なし（1時間）" },
      { day: "水", hours: "時間指定なし（1時間）" },
      { day: "木", hours: "13:00 - 18:00（5時間） ※Sydney Startup Hubへ出勤" },
      { day: "金", hours: "時間指定なし（1時間）" }
    ],
    benefits: [
      "業務成果やスキル次第で報酬付きポジションへの昇格の可能性あり",
      "グローバル環境での実践的な営業経験",
      "IT・セキュリティ業界のナレッジ習得"
    ]
  },
  {
    id: "marketing-intern",
    title: "サイバーセキュリティゴールキーパー／マーケティング/YouTube企画インターン",
    type: "無給インターン",
    location: "フルリモート",
    description: `Cubic Innov8（キュービック・イノベイト）は、サイバーセキュリティやITの世界に興味はあるけど、「自分にも発信できるかな…？」と不安に思う方に向けて、グローバルなITベンチャーで学びながらコンテンツを企画・発信できる、ワクワクするインターン募集のお知らせです。

チャンネル：サイバーセキュリティゴールキーパー`,
    requirements: [
      "週に合計5〜10時間程度のコミットメントが可能なこと（授業や他の予定との両立もOK）",
      "サイバーセキュリティやIT、またはマーケティング・動画制作に対する興味・関心",
      "基本的なPCスキル（Web検索やOfficeツールの使用など）と安定したインターネット環境",
      "オンラインでの円滑なコミュニケーションができること"
    ],
    welcomeSkills: [
      "Premiere Pro・CapCut・Edits などを用いた動画編集スキル（独学レベルでもOK）",
      "Photoshop・Canva等を用いた簡単なデザインスキル（サムネイル作成など）",
      "SNS運用やコンテンツ企画の実践経験（自身のアカウントでの発信経験でもOK）",
      "サイバーセキュリティ分野の知識や学習経験（興味がある程度でも大丈夫）"
    ],
    benefits: [
      "セキュリティ＆ITの実践知識が身につく",
      "グローバルベンチャーでのコンテンツ発信経験",
      "キャリアに直結する実績作り",
      "成果次第で有給ポジションへの移行可能性あり"
    ]
  }
]

export default function CareersPage() {
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
            採用情報
          </h1>
          <p className="text-xl text-[#3CEFFF] mb-8">
            Cubic Innov8で、あなたの可能性を広げませんか？
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">Cubic Innov8について</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300">
                京都・東京・シドニーに拠点を持ち、サイバーセキュリティとIT運用支援を専門としています。中小企業向けに下記のようなサービスを提供しています：
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#3CEFFF]" />
                  <span>マネージドセキュリティ＆IT（MSIT）サービス</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaUsers className="text-[#3CEFFF]" />
                  <span>脆弱性診断・SOC運用支援</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCloud className="text-[#3CEFFF]" />
                  <span>M365・Google Workspace・VPNなどのクラウド導入支援</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaHeadset className="text-[#3CEFFF]" />
                  <span>英語対応のITヘルプデスク</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChartLine className="text-[#3CEFFF]" />
                  <span>セキュリティ研修やフィッシング対策</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Team working together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">募集ポジション</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {jobPostings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#001853]/30 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#3CEFFF]">{job.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-[#3CEFFF]/20 px-3 py-1 rounded-full text-[#3CEFFF] text-sm">
                    {job.location}
                  </span>
                  <span className="bg-[#3CEFFF]/20 px-3 py-1 rounded-full text-[#3CEFFF] text-sm">
                    {job.type}
                  </span>
                </div>
                <div className="prose prose-invert max-w-none mb-6">
                  <p className="text-gray-300 whitespace-pre-line">{job.description}</p>
                </div>

                <div className="space-y-6">
                  {job.schedule && (
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-[#3CEFFF]">勤務時間</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {job.schedule.map((time, index) => (
                          <div key={index} className="bg-[#000B2E]/50 p-3 rounded-lg">
                            <span className="font-bold">{time.day}：</span>
                            {time.hours}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-[#3CEFFF]">応募条件</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheckCircle className="text-[#3CEFFF] mt-1" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-[#3CEFFF]">歓迎スキル</h4>
                    <ul className="space-y-2">
                      {job.welcomeSkills.map((skill, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheckCircle className="text-[#3CEFFF] mt-1" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-[#3CEFFF]">得られる経験・メリット</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheckCircle className="text-[#3CEFFF] mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center pt-4">
                    <a
                      href="https://meetings.hubspot.com/cubic-innov8/recruit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3CEFFF] hover:bg-[#00D4FF] text-[#000B2E] font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <FaEnvelope />
                      このポジションに応募する
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#3CEFFF]">お問い合わせ</h2>
          <p className="text-xl mb-8 text-gray-300">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://meetings.hubspot.com/cubic-innov8/recruit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3CEFFF] hover:bg-[#00D4FF] text-[#000B2E] font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <FaEnvelope />
              カジュアル面談を予約
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}