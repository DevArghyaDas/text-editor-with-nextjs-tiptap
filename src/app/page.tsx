import TipTapEditor from "@/components/myUi/TipTapEditor";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Text-Editor",
  };
};
const page = () => {
  return (
    <>
      <TipTapEditor />
    </>
  );
};

export default page;
