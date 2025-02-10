import { useEffect, useState } from 'react'
import { getMarkdownContent } from '../utils/markdown'

export default function Home() {
  const [content, setContent] = useState(null)
  const [isVisible, setIsVisible] = useState(false)  // 吹き出しの表示・非表示

  useEffect(() => {
    const fetchData = async () => {
      const markdown = await getMarkdownContent()
      setContent(markdown)
    }

    fetchData()
  }, [])

  // ボタンがクリックされたときのハンドラー
  const toggleBubble = () => {
    setIsVisible(prevState => !prevState)  // 表示状態を反転
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
