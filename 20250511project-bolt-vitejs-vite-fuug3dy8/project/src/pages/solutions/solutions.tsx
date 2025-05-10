import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000B2E] via-[#001853] to-[#000B2E] text-white pt-20">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#3CEFFF]">
            Page Under Development
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            このページは現在開発中です。ご迷惑をおかけして申し訳ございません。<br />
            近日中に公開いたしますので、今しばらくお待ちください。
          </p>
          <p className="text-lg text-gray-400 mb-12">
            お待たせいたしました。
          </p>
          <Link
            to="/"
            className="bg-[#3CEFFF] hover:bg-[#00D4FF] text-[#000B2E] font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
          >
            ホームへ戻る
          </Link>
        </motion.div>
      </div>
    </div>
  )
}