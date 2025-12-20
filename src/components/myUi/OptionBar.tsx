import { OptionType } from "@/lib/types/OptionType";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignStart,
  Type,
  Underline,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const OptionBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const options: OptionType[] = [
    {
      name: "Heading1",
      icon: Heading1,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive("heading", { level: 1 }),
    },
    {
      name: "Heading2",
      icon: Heading2,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
    },
    {
      name: "Heading3",
      icon: Heading3,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive("heading", { level: 3 }),
    },
    {
      name: "Bold",
      icon: Bold,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      name: "Italic",
      icon: Italic,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
    },
    {
      name: "Paragraph",
      icon: Type,
      onClick: () => editor.chain().focus().setParagraph().run(),
      isActive: editor.isActive("paragraph"),
    },
    {
      name: "Underline",
      icon: Underline,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive("underline"),
    },
    {
      name: "Strikethrough",
      icon: Strikethrough,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
    },
    {
      name: "Highlight",
      icon: Highlighter,
      onClick: () =>
        editor.chain().focus().toggleHighlight({ color: "red" }).run(),
      isActive: editor.isActive("highlight", { color: "red" }),
    },
    {
      name: "Bullet List",
      icon: List,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      name: "Numbered List",
      icon: ListOrdered,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
    },
    {
      name: "Align Left",
      icon: TextAlignStart,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: editor.isActive({ textAlign: "left" }),
    },
    {
      name: "Align Center",
      icon: TextAlignCenter,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: editor.isActive({ textAlign: "center" }),
    },
    {
      name: "Align Right",
      icon: TextAlignEnd,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: editor.isActive({ textAlign: "right" }),
    },
  ];
  return (
    <>
      <ToggleGroup
        type="single"
        className="my-4 sticky top-0 z-50 backdrop-blur-md flex-wrap items-center justify-center"
        aria-label="Text formatting options">
        {options.map((option, index) => (
          <ToggleGroupItem
            key={index}
            value={option.name}
            onClick={option.onClick}
            className={`p-3 rounded-md  cursor-pointer border ${
              option.isActive ? "is-active" : ""
            }`}>
            <option.icon className="size-6" />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  );
};

export default OptionBar;
