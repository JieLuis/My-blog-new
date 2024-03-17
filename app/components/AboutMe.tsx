import {
  AspectRatio,
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";
import React from "react";
import selfie from "@/public/images/selfie.png"; // Update the image import
import Image from "next/image";
import { Color, colors } from "./color";

const AboutMePage = () => {
  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap="5" className="pb-10">
        <Box mb="4">
          <Heading color="ruby">About Me</Heading>
          <Text>
            A developer based in China (UTC+08:00), with a strong passion for
            creating user-friendly and accessible websites and web applications.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            magni! Ex quisquam libero at quasi, laboriosam aut id ipsum rerum,
            obcaecati dignissimos fugiat! Cumque accusantium modi placeat
            aliquid maiores. Blanditiis.
          </Text>
          <Heading size="7">
            I am the shadow, and the smoke in your eyes, I am the ghost, that
            hides in the night
          </Heading>
        </Box>
        <AspectRatio ratio={10 / 8} className="flex justify-center">
          <Image
            src={selfie}
            alt="My selfie image"
            width={300}
            height={500}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-2)",
            }}
          />
        </AspectRatio>
      </Grid>

      <Card>
        <Flex className="flex flex-wrap items-center" gap="3">
          <Heading className="shrink-0" color="sky">
            Skill
          </Heading>

          {skills.map((skill) => (
            <Badge color={generateRandomColor()}>{skill}</Badge>
          ))}
        </Flex>
      </Card>
      <Card>
        <Flex className="flex flex-wrap items-center" gap="3">
          <Heading color="sky">Eduction</Heading>
          <Badge color="ruby">GuangZhou University</Badge>
        </Flex>
      </Card>
    </>
  );
};

const skills: string[] = [
  "Html",
  "CSS",
  "JavaScript",
  "React",
  "NextJS",
  "Vue",
  "Java",
  "NodeJS",
  "NuxtJS",
  "Prisma",
  "MySQL",
  "Webpack",
  "Vite",
  "Saas",
  "gulp",
];

const generateRandomColor: () => Color = () => {
  return colors[Math.floor(Math.random() * colors.length)] as Color;
};

export default AboutMePage;
