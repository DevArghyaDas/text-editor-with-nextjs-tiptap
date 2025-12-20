"use client";
import { Button } from "@/components/ui/button";
import UseGeneratePdf from "@/hooks/useGeneratePdf";
import { NotepadTextIcon } from "lucide-react";

const PdfGenerateBtn = () => {
  const onClick = async () => {
    await UseGeneratePdf();
  };
  return (
    <>
      <Button
        onClick={onClick}
        className="cursor-pointer">
        Generate PDF
        <NotepadTextIcon />
      </Button>
    </>
  );
};

export default PdfGenerateBtn;
