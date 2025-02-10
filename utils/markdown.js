import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'  // ✅ 修正： { remark } で正しくインポート
import remarkHtml from 'remark-html'

console.log('✅ markdown.js が読み込まれました！')

const markdownFilePath = path.join(process.cwd(), 'content', 'module.md')

export default async function getMarkdownContent() {
  console.log('📖 getMarkdownContent が実行されました！')
  
  try {
    const fileContents = fs.readFileSync(markdownFilePath, 'utf8')
    console.log('📄 Markdown ファイルの内容:', fileContents)

    const { content } = matter(fileContents)
    console.log('📝 FrontMatter を解析:', content)

    const htmlContent = await remark()
      .use(remarkHtml)
      .process(content)

    console.log('✅ HTML 変換成功:', htmlContent.toString())

    return htmlContent.toString()
  } catch (error) {
    console.error('🚨 getMarkdownContent でエラー:', error)
    return 'Error loading content'
  }
}
