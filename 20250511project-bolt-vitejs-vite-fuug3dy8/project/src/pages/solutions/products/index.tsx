import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaServer, FaCloud, FaLock, FaDesktop, FaNetworkWired, FaGoogle, FaTimes } from 'react-icons/fa'

interface Product {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  icon: React.ReactNode
  imageUrl: string
  features: string[]
}

const products: Product[] = [
  {
    id: 'kaseya-vsa',
    name: 'Kaseya VSA',
    shortDescription: 'IT資産の監視・更新・パッチ管理・リモート対応のRMMツール',
    fullDescription: 'Kaseya VSAは、IT資産の監視、パッチ管理、リモート対応などを一元的に行えるRMM（Remote Monitoring and Management）ツールです。セキュリティパッチの迅速な適用により攻撃対象領域を最小化し、エンドポイントのセキュリティを維持します。ダッシュボードでは、パッチ、アンチウイルス、バックアップの状態を可視化でき、SOCチームによる監視と連携が容易です。また、リモート操作機能により、トラブル発生時の迅速な対応が可能です。',
    icon: <FaDesktop className="w-12 h-12 text-[#3CEFFF]" />,
    imageUrl: '/kaseya.png',
    features: [
      'リアルタイムの資産監視',
      'パッチ管理の自動化',
      'リモートアクセスとトラブルシューティング',
      'セキュリティ状態の可視化'
    ]
  },
  {
    id: 'microsoft-defender',
    name: 'Microsoft Defender for Endpoint',
    shortDescription: '機械学習とビッグデータ解析により、既知・未知の脅威をリアルタイムで検知・防御',
    fullDescription: 'Microsoft Defender for Endpointは、機械学習とビッグデータ解析を活用し、既知・未知の脅威をリアルタイムで検出・防御するエンドポイントセキュリティソリューションです。EDR（Endpoint Detection and Response）機能により、攻撃の兆候を早期に察知し、自動的に対処します。また、Microsoft Intuneとの統合により、デバイスのリスクベースの条件付きアクセス制御が可能です。SOCとの連携により、インシデントの迅速な対応と詳細な分析が実現します。',
    icon: <FaShieldAlt className="w-12 h-12 text-[#3CEFFF]" />,
    imageUrl: 'https://www.microsoft.com/favicon.ico',
    features: [
      'AIベースの脅威検知',
      'エンドポイント保護',
      '自動対応と隔離',
      'クラウドベース管理'
    ]
  },
  {
    id: 'datto',
    name: 'Datto AV / EDR / Backup',
    shortDescription: 'リアルタイム検知・脅威ブロック・自動隔離・バックアップ復元',
    fullDescription: 'DattoのAV（アンチウイルス）、EDR（高度な脅威検出と自動隔離）、Backup（バックアップと自動復元）ソリューションは、エンドポイントのリアルタイム保護と迅速な復旧を提供します。リアルタイム検知により、マルウェアやランサムウェアの侵入を即座に検出し、自動的に隔離・ブロックします。また、定期的なバックアップにより、万が一のデータ損失時にも迅速な復旧が可能です。SOCとの連携により、脅威の監視と対応が強化されます。',
    icon: <FaLock className="w-12 h-12 text-[#3CEFFF]" />,
    imageUrl: '/0000573_datto_550.png',
    features: [
      'マルウェア対策',
      'ランサムウェア保護',
      '自動バックアップ',
      '迅速な復旧'
    ]
  },
  {
    id: 'assetview',
    name: 'AssetView',
    shortDescription: 'USB制御・稼働ログ収集・勤怠把握などIT統制',
    fullDescription: 'AssetViewは、USB制御、稼働ログ収集、勤怠把握などを通じて、IT資産の可視化と内部統制を強化するソリューションです。USBデバイスの使用制限やログの収集により、情報漏洩リスクを低減します。また、勤怠情報の把握により、労務管理の効率化が図れます。SOCとの連携により、内部からの脅威に対する監視と対応が可能です。',
    icon: <FaServer className="w-12 h-12 text-[#3CEFFF]" />,
    imageUrl: '/asset_view_00.png',
    features: [
      'デバイス制御',
      'ログ管理',
      '資産追跡',
      'コンプライアンス対応'
    ]
  },
  {
    id: 'yamaha-utm',
    name: 'ヤマハ UTM',
    shortDescription: '中小企業向けネットワークファイアウォール＆脅威対策',
    fullDescription: 'ヤマハのUTX100は、中小企業向けに最適化されたUTM（Unified Threat Management）ソリューションです。ファイアウォール、アンチウイルス、IPS（侵入防止システム）、URLフィルタリングなどの機能を統合し、外部からの脅威を多層的に防御します。ヤマハルーターとの連携により、ネットワークの一元管理が可能です。',
    icon: <FaNetworkWired className="w-12 h-12 text-[#3CEFFF]" />,
    imageUrl: 'https://network.yamaha.com/favicon.ico',
    features: [
      'ファイアウォール保護',
      'URLフィルタリング',
      'VPN機能',
      'トラフィック分析'
    ]
  },
  {
    id: 'paloalto-utm',
    name: 'Palo Alto Networks UTM',
    shortDescription: '次世代ファイアウォールによる高度な脅威対策',
    fullDescription: 'Palo Alto Networksの次世代ファイアウォールは、高度な脅威検知と防御機能を提供します。アプリケーションの可視化と制御、脅威の防御、URLフィルタリング、暗号化トラフィックの検査など、包括的なセキュリティ機能を統合しています。クラウドベースの脅威インテリジェンスにより、最新の脅威に対する保護を実現します。',
    icon: <FaNetworkWired className="w-12 h-12 text-[#3CEFFF]" />,
    imageUrl: 'https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo-reverse-rgb.png',
    features: [
      '次世代ファイアウォール',
      'アプリケーション制御',
      '脅威インテリジェンス',
      'SSL/TLS復号化'
    ]
  },
  {
    id: 'm365',
    name: 'Microsoft 365（M365）',
    shortDescription: 'Outlook, Teams, OneDrive, Intune などを統合した業務・セキュリティ基盤',
    fullDescription: 'Microsoft 365は、Outlook、Teams、OneDrive、Intuneなどを統合した業務・セキュリティ基盤です。メール、チャット、ファイル共有、デバイス管理を一元化し、業務の効率化を実現します。Intuneとの連携により、デバイスのセキュリティポリシーを一括で適用・管理できます。また、Microsoft Defender for Endpointとの統合により、エンドポイントのセキュリティが強化されます。',
    icon: <FaCloud className="w-12 h-12 text-[#3CEFFF]" />,
    imageUrl: '/08a45d57f28e47229fd636b6dfeda900.png',
    features: [
      'メール・チャット',
      'ファイル共有',
      'デバイス管理',
      'セキュリティ統合'
    ]
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    shortDescription: 'Gmail, Google Drive, Meet, 管理コンソールによる統合クラウド業務環境',
    fullDescription: 'Google Workspaceは、Gmail、Google Drive、Meet、管理コンソールなどを統合したクラウドベースの業務環境です。リアルタイムの共同編集やビデオ会議、ファイル共有などにより、柔軟な働き方を支援します。管理コンソールを通じて、ユーザーやデバイスの管理、セキュリティポリシーの適用が可能です。また、AIによるスマート機能が業務の効率化を促進します。',
    icon: <FaGoogle className="w-12 h-12 text-[#3CEFFF]" />,
    imageUrl: '/business_googleworkspace_intro.png',
    features: [
      'クラウドストレージ',
      'ビデオ会議',
      'リアルタイム共同編集',
      'セキュリティ管理'
    ]
  }
]

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000B2E] via-[#001853] to-[#000B2E] text-white pt-20">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#3CEFFF] text-center">製品一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#001853]/50 rounded-lg overflow-hidden border border-[#3CEFFF]/20 hover:border-[#3CEFFF]/40 transition-all"
            >
              <div className="relative h-48 bg-white flex items-center justify-center p-8">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-[#3CEFFF]">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.shortDescription}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#3CEFFF] mb-2">主な機能</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-[#3CEFFF] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-[#3CEFFF]/10 hover:bg-[#3CEFFF]/20 border border-[#3CEFFF] text-[#3CEFFF] py-2 rounded-lg transition-colors"
                  >
                    詳細を見る
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#001853] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  {selectedProduct.icon}
                  <h2 className="text-3xl font-bold text-[#3CEFFF]">{selectedProduct.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="relative h-64 bg-white flex items-center justify-center p-8 rounded-lg mb-6">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-6">{selectedProduct.fullDescription}</p>
                <h3 className="text-xl font-bold text-[#3CEFFF] mb-4">主な機能</h3>
                <ul className="space-y-2 mb-6">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#3CEFFF] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-6">
                <Link
                  to="/contact/consultation"
                  className="flex-1 bg-[#3CEFFF] hover:bg-[#00D4FF] text-[#000B2E] font-semibold px-8 py-3 rounded-lg transition-colors text-center"
                >
                  お問い合わせ
                </Link>
                <Link
                  to="/contact/document"
                  className="flex-1 border-2 border-[#3CEFFF] hover:bg-[#3CEFFF]/10 text-[#3CEFFF] px-8 py-3 rounded-lg transition-colors text-center"
                >
                  資料ダウンロード
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#001853]/50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#3CEFFF]">お気軽にご相談ください</h2>
          <p className="text-gray-300 mb-6">
            製品選定から導入支援まで、経験豊富な専門家がサポートいたします。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact/consultation"
              className="bg-[#3CEFFF] hover:bg-[#00D4FF] text-[#000B2E] font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              無料相談を予約する
            </Link>
            <Link
              to="/contact/document"
              className="border-2 border-[#3CEFFF] hover:bg-[#3CEFFF]/10 text-[#3CEFFF] px-8 py-3 rounded-lg transition-colors"
            >
              資料をダウンロード
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
