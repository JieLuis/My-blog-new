import prisma from "@/prisma/client";
import BlogSummary from "./BlogSummary";
import LatestBlogs from "./LatestBlogs";
import BlogChart from "./BlogChart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyPorjects";

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: "FINISHED" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  return (
    <>
      <AboutMe />
      <MyProjects />
      <Grid columns={{ initial: "1", md: "2" }} gap="5">
        <Flex direction="column" gap="5">
          <BlogSummary open={open} inProgress={inProgress} closed={closed} />
          <BlogChart open={open} inProgress={inProgress} closed={closed} />
        </Flex>
        <LatestBlogs />
      </Grid>
    </>
  );
}

export const metadata: Metadata = {
  title: "Blogs Summary",
  description: "View the summary of my blogs",
};
