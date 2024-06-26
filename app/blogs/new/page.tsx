import { ErrorMessage } from "@/app/components";
import { MODE } from "@/app/envConfig";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/app/blogs/_components/IssueForm"), {
  ssr: false,
});

const NewIssuePage = () => {
  return MODE === "dev" ? (
    <IssueForm />
  ) : (
    <ErrorMessage>This functionality is currently not allowed</ErrorMessage>
  );
};

export default NewIssuePage;
