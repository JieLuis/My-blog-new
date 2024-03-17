"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React, { use } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const statuses: { label: String; value?: Status }[] = [
  { label: "All" },
  { label: "Finished", value: "FINISHED" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const BlogStatusFilter = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || ""}
      onValueChange={(status) => {
        status = status === "unSelected" ? "" : status;
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        if (searchParams.get("orderBy"))
          params.append("orderBy", searchParams.get("orderBy")!);
        const query = params.size ? "?" + params.toString() : "";
        router.push("/blogs" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || "unSelected"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default BlogStatusFilter;
