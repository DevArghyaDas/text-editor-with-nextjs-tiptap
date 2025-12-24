import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const html = body?.html;

    // const html = jsonHtml.html;
    if (!html) return new NextResponse("Missing html", { status: 400 });

    // return new NextResponse(html, { status: 200 });
    // const path = process.env.CHROME_EXE_PATH as string;

    //eslint-disable-next-line
    const launchOptions: any = {
      args: puppeteer.defaultArgs({ args: chromium.args, headless: "shell" }),
      executablePath: await chromium.executablePath(),
      headless: "shell",
      ignoreHTTPSErrors: true,
      devtools: false,
    };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.emulateMediaType("screen");

    const screenShotBuffer = await page.screenshot({
      fullPage: true,
      type: "png",
      captureBeyondViewport: true,
    });
    await browser.close();

    const screenshot = Buffer.from(screenShotBuffer);

    return new NextResponse(screenshot, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": 'attachment; filename="output.png"',
      },
    });
  } catch (err) {
    console.error("Image generation error:", err);
    return new NextResponse(String(err), { status: 500 });
  }
};

export const GET = async () => {
  return new NextResponse("Puppeteer Image generation endpoint", {
    status: 200,
  });
};
