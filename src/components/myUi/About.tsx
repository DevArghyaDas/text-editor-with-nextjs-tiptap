"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BadgeQuestionMarkIcon, Mail } from "lucide-react";

const About = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="fixed right-4 top-4">
          <BadgeQuestionMarkIcon />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Some Note :</AlertDialogTitle>
            <AlertDialogDescription className="*:my-2">
              <span className="">
                This app was created by{" "}
                <a
                  href="https://github.com/DevArghyaDas"
                  className="font-semibold underline">
                  Arghya Das
                </a>
                .
              </span>
              <br />
              The image generation is only suported on <strong>
                Chrome
              </strong>{" "}
              and <strong>Firefox</strong>. If you run it in a different browser
              it will not work. See documentation{" "}
              <a
                href="https://pptr.dev/browsers-api/browsers.browser"
                className="font-bold">
                Here
              </a>
              .
              <br />
              <span className="flex gap-2">
                if any problem occurs, contact via{" "}
                <a href="mailto:mrarghyadasdev@gmail.com">
                  <Mail />
                </a>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Ok</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default About;
