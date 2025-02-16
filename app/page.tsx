import prisma from "@/prisma/client"
import BlogSummary from "./BlogSummary"
import LatestBlogs from "./LatestBlogs"
import BlogChart from "./BlogChart"
import { Flex, Grid } from "@radix-ui/themes"
import { Metadata } from "next"
import AboutMe from "./components/AboutMe"
import Hero from "./components/Hero"
import Projects from "./projects"
import { Tag } from "@prisma/client"
import SummaryHeader from "./SummaryHeader"
import Contact from "./Contact"

interface Props {
  searchParams: { tags: Tag }
}

export default async function Home({ searchParams }: Props) {
  const open = await prisma.issue.count({
    where: { status: "FINISHED" },
  })
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  })
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  })

  return (
    <main className="container">
      <Hero />
      <AboutMe />
      <Projects />
      <SummaryHeader />
      <Grid columns={{ initial: "1", md: "2" }} gap="5" mt="8">
        <Flex direction="column" gap="5">
          <BlogSummary open={open} inProgress={inProgress} closed={closed} />
          <BlogChart open={open} inProgress={inProgress} closed={closed} />
        </Flex>
        <LatestBlogs />
      </Grid>
      <Contact />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Jie's Home Page",
  description: "View Jie's blog",
}
