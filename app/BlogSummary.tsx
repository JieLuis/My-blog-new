import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const BlogSummary = ({ open, inProgress, closed }: Props) => {
  const categoryData: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Web开发", value: open, status: "FINISHED" },
    { label: "科技类", value: inProgress, status: "IN_PROGRESS" },
    { label: "非技术类", value: closed, status: "CLOSED" },
  ];

  return (
    <Flex gap="4">
      {categoryData.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-medium"
              href={`blogs?status=${container.status}`}
            >
              {container.label}
            </Link>
          </Flex>
          <Text size="5" className="font-bold">
            {container.value}
          </Text>
        </Card>
      ))}
    </Flex>
  );
};

export default BlogSummary;
