import { useEffect, useState } from 'react'
import getMarkdownContent from '../utils/markdown'  

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

// ✅ `getStaticProps` のエラーを防ぐために、`console.log` を追加
export async function getStaticProps() {
  console.log('🔄 getStaticProps が実行されました')

  try {
    const markdownContent = await getMarkdownContent()
    console.log('✅ Markdown Content:', markdownContent)

    return {
      props: {
        content: markdownContent || 'No content found',
      },
    }
  } catch (error) {
    console.error('🚨 getStaticProps でエラー:', error)
    return {
      props: {
        content: 'Error loading content',
      },
    }
  }
}
