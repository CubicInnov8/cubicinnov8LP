import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaShieldAlt, FaServer, FaChartLine, FaExclamationTriangle, FaChartBar, FaUserShield, FaLaptopCode, FaHeadset, FaCheckCircle, FaGlobe, FaUsers, FaMobile, FaArrowRight, FaFileAlt, FaBrain } from 'react-icons/fa'

export default function Home() {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [challengesRef, challengesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const securityPhases = [
    {
      title: "特定 Identify",
      japaneseTitle: "正常の棚卸し",
      icon: <FaFileAlt className="w-12 h-12 text-blue-500" />,
      description: "何がどこにあるかを把握",
      color: "bg-blue-500",
    },
    {
      title: "防御 Protect",
      japaneseTitle: "アクセス制御/ゼロトラスト運用",
      icon: <FaShieldAlt className="w-12 h-12 text-emerald-500" />,
      description: "内部犯行・誤操作のリスクを大幅に削減",
      color: "bg-emerald-500",
    },
    {
      title: "防止 Prevent",
      japaneseTitle: "SOCによる常時監視",
      icon: <FaExclamationTriangle className="w-12 h-12 text-emerald-500" />,
      description: "攻撃兆候や異常通信をリアルタイムで検知",
      color: "bg-emerald-500",
    },
    {
      title: "検知 Detect",
      japaneseTitle: "インシデント対応プロセス",
      icon: <FaCheckCircle className="w-12 h-12 text-blue-500" />,
      description: "事象の封じ込め・報告・再発防止策",
      color: "bg-blue-500",
    },
    {
      title: "対応 Respond",
      japaneseTitle: "データバックアップと復旧支援",
      icon: <FaServer className="w-12 h-12 text-blue-500" />,
      description: "万が一の損失にも備え、業務再開までをサポート",
      color: "bg-blue-500",
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000B2E] via-[#001853] to-[#000B2E] text-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <img
              src="/080125_CUBIC_youtube_chanel_art.png"
              alt="ハッカーはあなたのデータとお金を狙っています"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3CEFFF] to-[#89FF94]">
            何も起きなかったことが効果の証
          </h1>
          <p className="text-xl text-[#3CEFFF] mb-8">
            セキュリティ強化にお金と体制をつくる時代
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://meetings.hubspot.com/cubic-innov8/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3CEFFF] hover:bg-[#00D4FF] text-[#000B2E] font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              無料相談
            </a>
            <a
              href="https://share.hsforms.com/2xhMDTeU9S16_4MBJ-O5A4gsodm3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#89FF94] hover:bg-[#60FF6C] text-[#000B2E] font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              資料ダウンロード
            </a>
           
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#3CEFFF]">数字で実感するセキュリティの現実</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#001853]/50 backdrop-blur-sm p-8 rounded-lg border border-[#3CEFFF]/20 text-center">
            <FaChartBar className="text-5xl text-[#3CEFFF] mb-4 mx-auto" />
            <h3 className="text-3xl font-bold text-[#3CEFFF] my-4">18万件以上</h3>
            <p className="text-gray-300">年間の不審アクセス検出数（中小企業）</p>
          </div>
          <div className="bg-[#001853]/50 backdrop-blur-sm p-8 rounded-lg border border-[#3CEFFF]/20 text-center">
            <FaExclamationTriangle className="text-5xl text-[#3CEFFF] mb-4 mx-auto" />
            <h3 className="text-3xl font-bold text-[#3CEFFF] my-4">1,345件</h3>
            <p className="text-gray-300">月間ランサムウェア検知数</p>
          </div>
          <div className="bg-[#001853]/50 backdrop-blur-sm p-8 rounded-lg border border-[#3CEFFF]/20 text-center">
            <FaUserShield className="text-5xl text-[#3CEFFF] mb-4 mx-auto" />
            <h3 className="text-3xl font-bold text-[#3CEFFF] my-4">70%以上</h3>
            <p className="text-gray-300">ヒューマンエラーによる情報漏洩</p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section ref={challengesRef} className="container mx-auto px-4 py-16 bg-[#001853]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={challengesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#3CEFFF]">あなたの会社も、すでに"狙われている"かもしれません。</h2>
          <p className="text-xl text-gray-300">アンチウイルスだけでは守れない、現代のサイバー脅威</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#000B2E]/50 backdrop-blur-sm p-6 rounded-lg border border-[#3CEFFF]/20 hover:border-[#3CEFFF]/40 transition-colors">
            <FaLaptopCode className="text-4xl text-[#3CEFFF] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#3CEFFF]">マルウェアの進化</h3>
            <p className="text-gray-300">ランサムウェア・ファイルレス攻撃が日々進化し、従来の対策では検知が困難に</p>
          </div>
          <div className="bg-[#000B2E]/50 backdrop-blur-sm p-6 rounded-lg border border-[#3CEFFF]/20 hover:border-[#3CEFFF]/40 transition-colors">
            <FaShieldAlt className="text-4xl text-[#3CEFFF] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#3CEFFF]">巧妙化するフィッシング</h3>
            <p className="text-gray-300">本物そっくりのメール・Webサイトを使用した情報窃取の手口が増加</p>
          </div>
          <div className="bg-[#000B2E]/50 backdrop-blur-sm p-6 rounded-lg border border-[#3CEFFF]/20 hover:border-[#3CEFFF]/40 transition-colors">
            <FaExclamationTriangle className="text-4xl text-[#3CEFFF] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#3CEFFF]">ゼロデイ攻撃</h3>
            <p className="text-gray-300">OSやアプリの脆弱性を即座に狙う攻撃、AIを活用した新たな脅威も</p>
          </div>
        </div>
      </section>

      {/* AI Security Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#3CEFFF] flex items-center justify-center gap-3">
              <FaBrain className="text-3xl" />
              AI × 自動化セキュリティ — 守りのスピードを100倍に
            </h2>
            <p className="text-xl text-[#3CEFFF] mb-4">🔹 AIと自動化で、"守る"が進化する時代へ。</p>
            <p className="text-gray-300">
              Cubic Innov8では、AIと機械学習を活用した次世代サイバーセキュリティを導入企業に提供しています。<br />
              人の目だけに頼らず、EDR・SOC・ログ分析・復旧支援まで、一連の防御サイクルを自動化。<br />
              365日、攻撃を「検知して終わらせる」体制を構築します。
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-[#001853]/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#3CEFFF]">🧩 AI対応の主な技術スタック</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[#3CEFFF] mb-2">Datto EDR</h4>
                    <p className="text-gray-300">AIでファイルレス攻撃やランサムウェアをリアルタイム検知／自動隔離</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3CEFFF] mb-2">Defender for Endpoint</h4>
                    <p className="text-gray-300">ユーザーの行動・通信パターンをAIが分析し、未知の脅威も予測検出</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[#3CEFFF] mb-2">Kaseya VSA</h4>
                    <p className="text-gray-300">ソフト更新・脆弱性パッチをAIが判断し自動配信</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3CEFFF] mb-2">SOC監視（AI＋人）</h4>
                    <p className="text-gray-300">大量ログから異常をAIが分類・通知。人は"本当に危険なもの"だけに集中</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#001853]/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#3CEFFF]">📈 Before / After で見る、セキュリティの変化</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#3CEFFF] mb-4">従来型対策</h4>
                  <ul className="space-y-2">
                    <li>検知スピード：手動チェック／遅延あり</li>
                    <li>アラート数：数百〜数千件／手動選別</li>
                    <li>復旧対応：担当者頼み／属人化</li>
                    <li>月次報告・可視化：エクセル手作業</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#3CEFFF] mb-4">Cubic Innov8 AI型セキュリティ</h4>
                  <ul className="space-y-2">
                    <li>検知スピード：AIで即時検知 → 自動隔離</li>
                    <li>アラート数：AIが自動分類 → 人の対応は必要最小限</li>
                    <li>復旧対応：ワンクリック復旧 → 業務継続性UP</li>
                    <li>月次報告・可視化：ダッシュボード＋攻撃傾向分析</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#001853]/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#3CEFFF]">💬 利用企業の声</h3>
              <div className="space-y-4">
                <div className="bg-[#000B2E]/50 p-4 rounded-lg">
                  「AIでアラート数が激減し、本当に見るべきインシデントに集中できるようになった」
                </div>
                <div className="bg-[#000B2E]/50 p-4 rounded-lg">
                  「検知から対応まで自動化されていて、IT人員が少ない当社でも安心して任せられる」
                </div>
                <div className="bg-[#000B2E]/50 p-4 rounded-lg">
                  「ランサムウェアの被害ゼロを維持できているのが何よりの成果」
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues and Solutions Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#001853]/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-[#3CEFFF] text-center">よくある課題とCubic Innov8の解決例</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#000B2E]/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-[#3CEFFF]">課題</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-[#FF6B6B]" />
                  <span>警告が多すぎて"本当に危険なもの"を見逃してしまう</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-[#FF6B6B]" />
                  <span>セキュリティ担当が1人で限界</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-[#FF6B6B]" />
                  <span>手動パッチや復旧作業が属人化している</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-[#FF6B6B]" />
                  <span>クラウド・テレワーク端末の管理に不安がある</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#000B2E]/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-[#3CEFFF]">解決策</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#89FF94]" />
                  <span>AIで即時検知 → 自動隔離</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#89FF94]" />
                  <span>Cubic Innov8の専任サポートチームが代行</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#89FF94]" />
                  <span>ワンクリック復旧 → 業務継続性UP</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#89FF94]" />
                  <span>ゼロトラスト×MDM導入支援</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Flow Section */}
      <section className="container mx-auto px-4 py-16 bg-[#001853]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center text-[#3CEFFF]">
            守りの流れ（NIST SP-800準拠）
          </h2>
          <p className="text-xl mb-8 text-center text-gray-300">
            「何かが起きてから」では遅い。だから私たちは"先に動く"。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
              >
                <div className={`${phase.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#3CEFFF]">{phase.title}</h3>
                <h4 className="text-lg font-semibold mb-2 text-gray-300">{phase.japaneseTitle}</h4>
                <p className="text-gray-400">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Strengths */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#3CEFFF] text-center">サービスの強み</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <FaGlobe className="text-[#3CEFFF] text-2xl flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">グローバル展開</h3>
              <p className="text-gray-300">京都・東京・シドニーに拠点を持ち、サイバーセキュリティで最先端を走るアメリカ、オーストラリアのテクノロジーを日本国内で提供</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaUsers className="text-[#3CEFFF] text-2xl flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">グローバル対応</h3>
              <p className="text-gray-300">英語サポート＋グローバル基準の対応力</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaShieldAlt className="text-[#3CEFFF] text-2xl flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">豊富な実績</h3>
              <p className="text-gray-300">外資企業・上場企業対応の実績</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMobile className="text-[#3CEFFF] text-2xl flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">柔軟な導入</h3>
              <p className="text-gray-300">デバイス5台からでも導入可（スモールスタート）</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#3CEFFF] text-center">導入ステップ</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="bg-[#001853]/30 p-6 rounded-lg text-center flex-1">
            <div className="text-4xl font-bold mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">お問い合わせ・ヒアリング</h3>
            <FaHeadset className="text-[#3CEFFF] text-4xl mx-auto my-4" />
          </div>
          <FaArrowRight className="text-[#3CEFFF] text-2xl transform rotate-90 md:rotate-0" />
          <div className="bg-[#001853]/30 p-6 rounded-lg text-center flex-1">
            <div className="text-4xl font-bold mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">提案書＆お見積もり提出</h3>
            <FaFileAlt className="text-[#3CEFFF] text-4xl mx-auto my-4" />
          </div>
          <FaArrowRight className="text-[#3CEFFF] text-2xl transform rotate-90 md:rotate-0" />
          <div className="bg-[#001853]/30 p-6 rounded-lg text-center flex-1">
            <div className="text-4xl font-bold mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">導入準備＆運用スタート</h3>
            <FaChartLine className="text-[#3CEFFF] text-4xl mx-auto my-4" />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#3CEFFF] text-center">料金プラン例</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#001853]/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">スターター</h3>
            <ul className="space-y-2 mb-6">
              <li>PC10台</li>
              <li>UTM管理</li>
              <li>サポート</li>
            </ul>
            <p className="text-2xl font-bold text-[#3CEFFF]">¥80,000〜<span className="text-sm">/月（税抜）</span></p>
          </div>
          <div className="bg-[#001853]/30 p-6 rounded-lg border-2 border-[#3CEFFF]">
            <h3 className="text-xl font-bold mb-4">ベーシック</h3>
            <ul className="space-y-2 mb-6">
              <li>AV/EDR</li>
              <li>Cloud導入支援</li>
            </ul>
            <p className="text-2xl font-bold text-[#3CEFFF]">¥120,000〜<span className="text-sm">/月（税抜）</span></p>
          </div>
          <div className="bg-[#001853]/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">プレミアム</h3>
            <ul className="space-y-2 mb-6">
              <li>セキュリティ監視</li>
              <li>ヘルプデスク</li>
              <li>駆けつけ対応</li>
            </ul>
            <p className="text-2xl font-bold text-[#3CEFFF]">¥180,000〜<span className="text-sm">/月（税抜）</span></p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#3CEFFF]">まずは無料で相談しませんか？</h2>
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
