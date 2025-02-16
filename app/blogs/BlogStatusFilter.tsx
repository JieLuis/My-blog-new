"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React, { use } from "react";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";

const statuses: { label: String; value?: Status }[] = [
  { label: "全部" },
  { label: "Web开发", value: "FINISHED" },
  { label: "科技类", value: "IN_PROGRESS" },
  { label: "非技术类", value: "CLOSED" },
];

const BlogStatusFilter = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || ""}
      onValueChange={(status) => {
        initailizeStatus(status);
        const query: string = buildQuery(status, searchParams);
        router.push("/blogs" + query);
      }}
    >
      <Select.Trigger placeholder="按博客类型分类" />
      <Select.Content>
        {statuses.map((status, index) => (
          <Select.Item key={index} value={status.value || "unSelected"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

const initailizeStatus = (selectStatus: string): void => {
  selectStatus === "unSelected" ? "" : selectStatus;
};

const buildQuery = (
  selectStatus: string,
  searchParams: ReadonlyURLSearchParams
) => {
  const params = new URLSearchParams();
  if (selectStatus) params.append("status", selectStatus);
  if (searchParams.get("orderBy"))
    params.append("orderBy", searchParams.get("orderBy")!);
  return params.size ? "?" + params.toString() : "";
};

export default BlogStatusFilter;
