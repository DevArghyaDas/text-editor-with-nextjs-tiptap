"use client";

import { OptionTableType } from "@/lib/types/OptionType";
import { Editor } from "@tiptap/react";
import { Button } from "../ui/button";

const InsertOptionBar = ({ editor }: { editor: Editor }) => {
  const options: OptionTableType[] = [
    {
      name: "Insert Table",
      onClick: () =>
        editor
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run(),
    },
    {
      name: "Insert Code",
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
    },

    {
      name: "Add Column Before",
      onClick: () => editor.chain().focus().addColumnBefore().run(),
    },
    {
      name: "Add Column After",
      onClick: () => editor.chain().focus().addColumnAfter().run(),
    },
    {
      name: "Delete Column",
      onClick: () => editor.chain().focus().deleteColumn().run(),
    },

    {
      name: "Add Row Before",
      onClick: () => editor.chain().focus().addRowBefore().run(),
    },
    {
      name: "Add Row After",
      onClick: () => editor.chain().focus().addRowAfter().run(),
    },
    {
      name: "Delete Row",
      onClick: () => editor.chain().focus().deleteRow().run(),
    },
    {
      name: "Delete Table",
      onClick: () => editor.chain().focus().deleteTable().run(),
    },
    {
      name: "Merge Cells",
      onClick: () => editor.chain().focus().mergeCells().run(),
    },
    {
      name: "Split Cell",
      onClick: () => editor.chain().focus().splitCell().run(),
    },
    {
      name: "Toggle Header Column",
      onClick: () => editor.chain().focus().toggleHeaderColumn().run(),
    },
  ];
  return (
    <>
      <div className="control-group">
        <div className="button-group *:border *:p-2 *:cursor-pointer *:rounded-md flex flex-wrap gap-2 mb-2">
          {options.map((option) => (
            <Button
              key={option.name}
              onClick={option.onClick}
              variant="secondary">
              {option.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default InsertOptionBar;
