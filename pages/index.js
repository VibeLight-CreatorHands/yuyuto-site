// pages/index.js
import { useState } from 'react';
import getMarkdownContent from '../utils/markdown';
import MarkdownDisplay from '../components/MarkdownDisplay';
import Bubble from '../components/Bubble';

export default function Home({ content }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleBubble = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <h1>Welcome to the Yuyuto Site</h1>
      {/* Markdownコンテンツの表示 */}
      <MarkdownDisplay content={content} />

      {/* ボタン */}
      <button onClick={toggleBubble}>吹き出しを表示</button>

      {/* 吹き出し */}
      <Bubble visible={isVisible}>
        <p>ここに吹き出しのテキストを表示します！</p>
      </Bubble>
    </div>
  );
}

// サーバーサイドでMarkdownコンテンツを読み込む
export async function getStaticProps() {
  try {
    const markdownContent = await getMarkdownContent();
    return {
      props: {
        content: markdownContent || 'No content found',
      },
    };
  } catch (error) {
    console.error('getStaticPropsでエラー:', error);
    return {
      props: {
        content: 'Error loading content',
      },
    };
  }
}
