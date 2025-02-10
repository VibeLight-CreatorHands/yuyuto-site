// index.js
import { useEffect, useState } from 'react'
import getMarkdownContent from '../utils/markdown'  // ✅ 修正: デフォルトエクスポートをインポート

export default function Home({ content }) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleBubble = () => {
    setIsVisible(prevState => !prevState)
  }

  return (
    <div>
      <h1>Welcome to the Yuyuto Site</h1>
      <div>{content ? content : 'Loading...'}</div>

      <button onClick={toggleBubble}>吹き出しを表示</button>

      {isVisible && (
        <div className="bubble">
          <p>ここに吹き出しのテキストを表示します！</p>
        </div>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const markdownContent = await getMarkdownContent()  // ✅ 修正: デフォルトエクスポートで呼び出し

  return {
    props: {
      content: markdownContent || 'No content found',
    },
  }
}
