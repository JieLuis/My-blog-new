"use client"

import { IssueStatusBadge, Link } from "@/app/components"
import styles from "@/app/posts/post.module.css"
import { Issue } from "@prisma/client"
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"
import matter from "gray-matter"
import MarkdownIt from "markdown-it"
import { v4 as uuidv4 } from "uuid"
import { useState, useEffect, useRef, ReactElement } from "react"
import TableOfContent from "../_components/TableOfContent"

interface ArticleHeader {
  title: string
  date: string
  author: string
}

export interface Heading {
  text: string
  level: number
  id: string
}

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

md.renderer.rules.heading_open = function (tokens, idx) {
  const token = tokens[idx]
  const level = token.tag.slice(1)
  const content = tokens[idx + 1].content
  const id = uuidv4()

  token.attrSet("id", id)
  return `<h${level} id="${id}">${content}</h${level}>`
}

function extractHeadings(htmlContent: string): Heading[] {
  const headingRegex = /<h([2])\s*(?:id="([^"]*)")?[^>]*>([^<]+)<\/h\1>/g
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const [, levelStr, existingId, text] = match
    const level = parseInt(levelStr)
    const id = existingId || `heading-${headings.length}`

    headings.push({
      text: text.trim(),
      level,
      id,
    })
  }

  return headings
}

const IssueDetails = ({ issue }: { issue: Issue }) => {
  const [tocPosition, setTocPosition] = useState<React.CSSProperties>({
    display: "none",
    position: "fixed",
  })
  const mainContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateTocPosition = () => {
      if (mainContentRef.current) {
        const mainContentRect = mainContentRef.current.getBoundingClientRect()

        // On larger screens, position the ToC
        if (window.innerWidth >= 768) {
          setTocPosition({
            position: "fixed",
            top: `calc(50px + var(--parent-offset))`,
            left: `calc(${mainContentRect.right}px + 20px)`,
          })
        } else {
          // On mobile, reset positioning
          setTocPosition({})
        }
      }
    }

    // Initial positioning
    updateTocPosition()

    // Reposition on window resize
    window.addEventListener("resize", updateTocPosition)
    return () => window.removeEventListener("resize", updateTocPosition)
  }, [])

  const { data, content } = matter(issue.description)
  const header = data as ArticleHeader
  const htmlContent = md.render(content)

  const headings = extractHeadings(htmlContent)

  return (
    <Flex
      className="w-full p-6 relative"
      style={{ gap: "1rem" }}
      direction={{ initial: "column", md: "row" }}
    >
      <Box
        ref={mainContentRef}
        className="flex-grow max-w-4xl bg-white rounded-lg shadow-lg p-6"
      >
        <Heading className="text-2xl font-bold">{issue.title}</Heading>
        <Flex className="space-x-4 mt-2 text-gray-600 text-sm" align="center">
          <IssueStatusBadge status={issue?.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose max-w-none mt-4">
          <article className={styles.article}>
            <h1>{header.title}</h1>
            <p className="post-meta">{header.date}</p>
            <div
              id="post-content"
              className="post-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </article>
        </Card>
      </Box>

      <Box
        className="w-full max-w-sm rounded-lg p-4"
        style={{
          ...tocPosition,
          width: "100%",
          maxWidth: "300px",
        }}
      >
        <TableOfContent headings={headings} />
      </Box>
    </Flex>
  )
}

export default IssueDetails
