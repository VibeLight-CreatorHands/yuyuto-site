// markdown.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import remarkHtml from 'remark-html'

const markdownFilePath = path.join(process.cwd(), 'content', 'module.md')

async function getMarkdownContent() {
  const fileContents = fs.readFileSync(markdownFilePath, 'utf8')
  const { content } = matter(fileContents)

  const htmlContent = await remark()
    .use(remarkHtml)
    .process(content)

  return htmlContent.toString()
}

// ✅ デフォルトエクスポートに変更
export default getMarkdownContent
