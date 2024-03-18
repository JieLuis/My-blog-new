import prisma from "@/prisma/client";
import { Badge, Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";

const MyProjects = async () => {
  const projects = await prisma.project.findMany();

  return (
    <>
      <Box className="text-center mb-3">
        <Heading color="blue">Projects</Heading>
      </Box>
      <Box className="flex flex-col space-y-4 mb-10">
        {projects.map((project) => (
          <Card key={project.id}>
            <Flex>
              <Link href={project.link || ""}>
                <Heading color="sky">{project.title}</Heading>
              </Link>
              {project.isFullStack && <Badge color="gold">Full Stack</Badge>}
            </Flex>
            <Text>{project.content}</Text>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default MyProjects;
