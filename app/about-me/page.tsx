import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import selfie from "@/public/images/selfie.png"; // Update the image import
import Image from "next/image";

const AboutMePage = () => {
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
  ];
  const colors = ["red", "yellow", "green", "blue", "lime", "amber"];
  function generateRandomColor() {
    return `text-${colors[Math.floor(Math.random() * colors.length)]}-400`;
  }

  return (
    <>
      <Box mb="4">
        <Heading color="ruby">About Me</Heading>
        <Text>
          A developer based in China (UTC+08:00), with a strong passion for
          creating user-friendly and accessible websites and web applications.
        </Text>
      </Box>
      <Image src={selfie} alt="My selfie image" width={300} height={500} />
      <Heading size="7">
        I am the shadow, and the smoke in your eyes, I am the ghost, that hides
        in the night
      </Heading>
      <Flex>
        <Heading>My Skill</Heading>
        {skills.map((skill) => (
          <Flex gap="2" key={skill}>
            <span></span>
            <span key={skill} className={generateRandomColor()}>
              {" "}
              {skill}{" "}
            </span>
            <span className={generateRandomColor()}>|</span>
          </Flex>
        ))}
      </Flex>
      <Heading>Eduction</Heading>
      <Text>GuangZhou University</Text>
    </>
  );
};

export default AboutMePage;
