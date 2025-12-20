import About from "@/components/myUi/About";
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
      <About />
      <TipTapEditor />
    </>
  );
};

export default page;
