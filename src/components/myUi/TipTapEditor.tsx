"use client";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";

import { TableKit } from "@tiptap/extension-table";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useLayoutEffect, useState } from "react";
import DarkButton from "./DarkButton";
import OptionTabs from "./OptionTabs";
import PdfGenerateBtn from "./PdfGenerateBtn";
import DemoScreenshot from "./demo/DemoScreenshot";
import { CodeBlock } from "@tiptap/extension-code-block";

const TipTapEditor = () => {
  const [mounted, setMounted] = useState(false);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TableKit.configure({
        table: { resizable: false },
      }),
      CodeBlock,
    ],

    // content: "Hello World!",
    editorProps: {
      attributes: {
        class: "w-full focus:outline-none p-4 min-h-[400px]",
      },
    },
  });
  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[70dvh] py-2">
        <OptionTabs editor={editor!} />

        <div className="border-2 border-slate-400 rounded-xl hover:rounded-3xl duration-300 hover:shadow-2xl shadow-xl shadow-gray-300/10 w-full sm:w-3/4 lg:w-2/3 overflow-x-scroll slider-bar">
          <EditorContent
            editor={editor}
            id="pdf-content"
          />
        </div>
        <div className="flex gap-4 items-center mt-4 flex-wrap justify-center">
          <DemoScreenshot />
          <PdfGenerateBtn />
          {/* <AnimatedThemeToggler /> */}
          <DarkButton />
        </div>
      </div>
    </>
  );
};

export default TipTapEditor;
