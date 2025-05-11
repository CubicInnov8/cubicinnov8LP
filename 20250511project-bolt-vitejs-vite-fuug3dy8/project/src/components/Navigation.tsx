import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  import { useState, useEffect } from 'react'  // ← useEffectを追加！
import { Link, useLocation } from 'react-router-dom' // ← useLocationも追加！

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation() // ← ここ追加！

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location]) // ← ページ遷移時にメニューを閉じる

  // 以下はそのまま（メニューのJSXなど）


  const caseStudies = [
    {
      title: "金融",
      description: "VC、投資ファンドなどにおける弊社ソリューションをご紹介します。",
    },
    {
      title: "士業",
      description: "税理士、会計士、行政書士、社労士、弁護士事務所における弊社ソリューションをご紹介します。",
    },
    {
      title: "ホテル業",
      description: "ホテル、ゲストハウス、旅館など宿泊業における弊社ソリューションをご紹介します。",
    },
    {
      title: "工場・製造業",
      description: "製造業や生産ラインを持つ企業におけるサイバーセキュリティ・IT導入事例をご紹介します。",
    },
    {
      title: "Enterprise (大企業向け)",
      description: "大手企業における、IT資産管理・情報漏洩対策・EDR導入の活用事例をご紹介します。",
    },
    {
      title: "教育機関",
      description: "学校、大学、専門学校などの教育分野での情報セキュリティ対策や学生データ保護への取り組みをご紹介します。",
    },
    {
      title: "医療機関",
      description: "病院・クリニックにおける個人情報保護・ランサムウェア対策の事例をご紹介します。",
    },
    {
      title: "小売・EC業界",
      description: "POS、顧客データ、在庫情報などを扱う業界でのサイバー攻撃対策・セキュアな運用事例をご紹介します。",
    },
    {
      title: "建設・不動産業",
      description: "設計図面、契約情報など機密情報の保護とDX推進を支援する事例をご紹介します。",
    }
  ]

  return (
    <nav className="bg-[#000B2E]/80 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="h-8">
            <img src="/logo.png" alt="Cubic Innov8" className="h-full" />
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#3CEFFF]"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-[#3CEFFF] hover:text-[#89FF94] transition-colors">ホーム</Link>
            
            {/* 事業内容 Dropdown */}
            <div className="relative group">
              <span className="text-[#3CEFFF] hover:text-[#89FF94] transition-colors cursor-default">事業内容</span>
              <div className="absolute left-0 mt-2 w-96 bg-[#000B2E]/95 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <Link to="/business/msit" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">MSIT（マネージドセキュリティ＆IT）サービスとSOC運用</Link>
                <Link to="/business/penetration" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">脆弱性診断・ペネトレーションテスト</Link>
                <Link to="/business/bcdr" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">BCDR（バックアップ＆災害復旧）</Link>
                <Link to="/business/helpdesk" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">ITヘルプデスク</Link>
                <Link to="/business/cloud" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">クラウド、DXツール構築、導入</Link>
                <Link to="/business/training" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">ヒューマンエラー対策</Link>
              </div>
            </div>

            {/* ソリューション Dropdown */}
            <div className="relative group">
              <span className="text-[#3CEFFF] hover:text-[#89FF94] transition-colors cursor-default">ソリューション</span>
              <div className="absolute left-0 mt-2 w-48 bg-[#000B2E]/95 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <Link to="/solutions/products" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">製品</Link>
                <Link to="/solutions/solutions" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">ソリューション</Link>
              </div>
            </div>

            {/* 導入事例 Dropdown */}
            <div className="relative group">
              <span className="text-[#3CEFFF] hover:text-[#89FF94] transition-colors cursor-default">導入事例</span>
              <div className="absolute left-[-200px] mt-2 w-[600px] bg-[#000B2E]/95 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {caseStudies.map((study, index) => (
                  <div key={index} className="px-6 py-3 hover:bg-[#001853]/50">
                    <div className="flex flex-col">
                      <h3 className="text-[#3CEFFF] font-medium text-lg">{study.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">{study.description}</p>
                      <span className="text-[#FF6B6B] text-sm mt-1">Coming soon</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 企業情報 Dropdown */}
            <div className="relative group">
              <span className="text-[#3CEFFF] hover:text-[#89FF94] transition-colors cursor-default">企業情報</span>
              <div className="absolute left-0 mt-2 w-64 bg-[#000B2E]/95 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <Link to="/company/about" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">会社概要</Link>
                <Link to="/company/partners" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">パートナー企業</Link>
                <Link to="/company/careers" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">採用情報</Link>
                <Link to="/company/news" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">ニュース＆トピックス</Link>
              </div>
            </div>

            {/* ナレッジ Dropdown */}
            <div className="relative group">
              <span className="text-[#3CEFFF] hover:text-[#89FF94] transition-colors cursor-default">ナレッジ</span>
              <div className="absolute left-0 mt-2 w-64 bg-[#000B2E]/95 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <Link to="/knowledge/cybersecurity-goalkeeper" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">サイバーセキュリティゴールキーパー</Link>
                <Link to="/knowledge/blog" className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50">ブログ</Link>
              </div>
            </div>

            {/* お問い合わせ Dropdown */}
            <div className="relative group">
              <span className="text-[#3CEFFF] hover:text-[#89FF94] transition-colors cursor-default">お問い合わせ</span>
              <div className="absolute right-0 mt-2 w-48 bg-[#000B2E]/95 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <a
                  href="https://share.hsforms.com/2xhMDTeU9S16_4MBJ-O5A4gsodm3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50"
                >
                  資料請求
                </a>
                <a
                  href="https://meetings.hubspot.com/cubic-innov8/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#3CEFFF] hover:bg-[#001853]/50"
                >
                  無料相談
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <Link to="/" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">ホーム</Link>
            
            {/* Mobile submenus */}
            <div className="space-y-2">
              <div className="font-semibold text-[#3CEFFF]">事業内容</div>
              <div className="pl-4 space-y-2">
                <Link to="/business/msit" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">MSIT（マネージドセキュリティ＆IT）サービスとSOC運用</Link>
                <Link to="/business/penetration" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">脆弱性診断・ペネトレーションテスト</Link>
                <Link to="/business/bcdr" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">BCDR（バックアップ＆災害復旧）</Link>
                <Link to="/business/helpdesk" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">ITヘルプデスク</Link>
                <Link to="/business/cloud" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">クラウド、DXツール構築、導入</Link>
                <Link to="/business/training" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">ヒューマンエラー対策</Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-[#3CEFFF]">ソリューション</div>
              <div className="pl-4 space-y-2">
                <Link to="/solutions/products" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">製品</Link>
                <Link to="/solutions/solutions" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">ソリューション</Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-[#3CEFFF]">導入事例</div>
              <div className="pl-4 space-y-4">
                {caseStudies.map((study, index) => (
                  <div key={index} className="py-2">
                    <div>
                      <h3 className="text-[#3CEFFF] font-medium">{study.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">{study.description}</p>
                      <span className="text-[#FF6B6B] text-sm inline-block mt-1">Coming soon</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-[#3CEFFF]">企業情報</div>
              <div className="pl-4 space-y-2">
                <Link to="/company/about" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">会社概要</Link>
                <Link to="/company/partners" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">パートナー企業</Link>
                <Link to="/company/careers" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">採用情報</Link>
                <Link to="/company/news" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">ニュース＆トピックス</Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-[#3CEFFF]">ナレッジ</div>
              <div className="pl-4 space-y-2">
                <Link to="/knowledge/cybersecurity-goalkeeper" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">サイバーセキュリティゴールキーパー</Link>
                <Link to="/knowledge/blog" className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors">ブログ</Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-[#3CEFFF]">お問い合わせ</div>
              <div className="pl-4 space-y-2">
                <a
                  href="https://share.hsforms.com/2xhMDTeU9S16_4MBJ-O5A4gsodm3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors"
                >
                  資料請求
                </a>
                <a
                  href="https://meetings.hubspot.com/cubic-innov8/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#3CEFFF] hover:text-[#89FF94] transition-colors"
                >
                  無料相談
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
