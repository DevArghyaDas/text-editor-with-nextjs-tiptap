"use client";

import { Button } from "@/components/ui/button";
import UseTakeScreenShot from "@/hooks/useTakeScreenShot";
import { Camera } from "lucide-react";

const DemoScreenshot = () => {
  const onClick = async () => {
    await UseTakeScreenShot();
  };
  return (
    <>
      <Button
        onClick={onClick}
        className="cursor-pointer">
        Take Screenshot <Camera />
      </Button>
    </>
  );
};

export default DemoScreenshot;
