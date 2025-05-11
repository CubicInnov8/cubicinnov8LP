import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaShieldAlt } from 'react-icons/fa'

export default function GoalkeeperPage() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook className="text-2xl" />,
      url: "https://www.facebook.com/profile.php?id=61572299890558",
      description: "経営層のためのサイバーセキュリティ対策"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      url: "https://www.instagram.com/cybersecurity_goalkeeper_jp/",
      description: "サイバーセキュリティゴールキーパー"
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="text-2xl" />,
      url: "https://www.youtube.com/shorts/UtnqZF4zwME",
      description: "サイバーセキュリティゴールキーパー"
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="text-2xl" />,
      url: "https://www.tiktok.com/@cybersecurity_goalkeeper",
      description: "サイバーセキュリティゴールキーパー"
    }
  ]

  const topics = [
    "フィッシング（フリーキック）やDDoS攻撃（コーナーキック）をブロックする方法",
    "実際のハッキング事件やサイバーインシデントのエピソード",
    "最新のサイバー関連ニュースとトレンド",
    "AIを活用したデータ保護のためのセキュリティ対策"
  ]

  const hashtags = [
    "サイバーセキュリティ", "サイバー攻撃", "倫理的ハッキング", "ハッキング対策",
    "オンラインセキュリティ", "情報セキュリティ", "フィッシング防止", "DDoS対策",
    "ランサムウェア防御", "マルウェア対策", "ネットワークセキュリティ", "サイバー防御",
    "AIとセキュリティ", "ゼロデイ脆弱性", "データ漏洩", "クラウドセキュリティ",
    "デジタル安全", "プライバシー保護", "サイバー意識", "サイバーハック"
  ]

  const youtubeShorts = [
    {
      url: "https://www.youtube.com/shorts/cWGeCqVfI1s",
      title: "サイバーセキュリティショート 1"
    },
    {
      url: "https://www.youtube.com/shorts/dBpkrV8q5Kc",
      title: "サイバーセキュリティショート 2"
    },
    {
      url: "https://www.youtube.com/shorts/4wykiskwqXM",
      title: "サイバーセキュリティショート 3"
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
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <img
              src="/080125_CUBIC_youtube_chanel_art.png"
              alt="ハッカーはあなたのデータとお金を狙っています"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-8">
            <img
              src="/080125_CUBIC_character_profile.png"
              alt="サイバーセキュリティゴールキーパーキャラクター"
              className="w-48 h-48 mx-auto rounded-full border-4 border-[#3CEFFF]"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3CEFFF] to-[#89FF94]">
            サイバーセキュリティゴールキーパー
          </h1>
          <p className="text-xl text-[#3CEFFF] mb-8">
            日本語チャンネル for サイバーニュース、対策、AIデータセキュリティ
          </p>
          <p className="text-lg text-gray-300 mb-8">
            サイバーセキュリティに特化したチャンネルへようこそ！サッカーのゴールキーパーを比喩に、フィッシング、DDoS攻撃、ゼロデイ脆弱性といった複雑なサイバー脅威をわかりやすく解説し、デジタル世界を守る力をサポートします！
          </p>
        </motion.div>
      </section>

      {/* YouTube Shorts Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">最新動画</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {youtubeShorts.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-[9/16] w-full"
            >
              <iframe
                className="w-full h-full rounded-lg"
                src={`${video.url.replace('/shorts/', '/embed/')}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Topics Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">主なトピック</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20"
            >
              <div className="flex items-start gap-3">
                <FaShieldAlt className="text-[#3CEFFF] text-xl mt-1" />
                <p>{topic}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">フォローはこちら</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000B2E]/50 p-6 rounded-lg border border-[#3CEFFF]/20 hover:border-[#3CEFFF]/40 transition-colors text-center"
            >
              <div className="flex flex-col items-center gap-3">
                {social.icon}
                <h3 className="font-bold">{social.name}</h3>
                <p className="text-sm text-gray-300">{social.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Hashtags Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#3CEFFF]">関連ハッシュタグ</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {hashtags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-[#000B2E]/50 px-4 py-2 rounded-full border border-[#3CEFFF]/20 text-sm"
            >
              #{tag}
            </motion.span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 bg-[#001853]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#3CEFFF]">最新情報をチェック</h2>
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
