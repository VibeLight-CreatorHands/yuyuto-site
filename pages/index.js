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
    <header>
      <h1>Welcome to the Yuyuto Site</h1>
      <h2>Dynamic Markdown Rendering & Bubble Display</h2>
    </header>
   {/* Markdownコンテンツの表示 */}
   <section>
     <MarkdownDisplay content={content} />
   </section>
   {/* ボタン */}
   <div style={{ textAlign: 'center', marginTop: '20px' }}>
     <button 
     onClick={toggleBubble}
     style={{
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
     }}
   > {isVisible ? '吹き出しを非表示' : '吹き出しを表示'}
   </button>
 </div>

   {/* 吹き出し */}
   <Bubble visible={isVisible}>
      <p>ここに吹き出しのテキストを表示します</p> 
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
