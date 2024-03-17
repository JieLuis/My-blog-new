import { Badge, Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";

const MyProjects = () => {
  return (
    <>
      <Heading className="text-center" color="blue">
        Projects
      </Heading>
      <Box>
        <Card>
          <Flex>
            <Heading color="sky">My Blog</Heading>
            <Badge color="gold">Full Stack</Badge>
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            libero assumenda repellendus doloremque totam veritatis voluptates
            aliquid quia adipisci quasi exercitationem, recusandae dicta
            consectetur ex, corporis nesciunt voluptatibus error perferendis!
          </Text>
        </Card>
        <Card>
          <Flex>
            <Heading color="sky">My Blog</Heading>
            <Badge color="gold">Full Stack</Badge>
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            libero assumenda repellendus doloremque totam veritatis voluptates
            aliquid quia adipisci quasi exercitationem, recusandae dicta
            consectetur ex, corporis nesciunt voluptatibus error perferendis!
          </Text>
        </Card>
        <Card>
          <Flex>
            <Heading color="sky">My Blog</Heading>
            <Badge color="gold">Full Stack</Badge>
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            libero assumenda repellendus doloremque totam veritatis voluptates
            aliquid quia adipisci quasi exercitationem, recusandae dicta
            consectetur ex, corporis nesciunt voluptatibus error perferendis!
          </Text>
        </Card>
      </Box>
    </>
  );
};

export default MyProjects;
