import { NextResponse } from "next/server";

import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const html = body?.html;
    if (!html)
      return NextResponse.json({ error: "Missing html" }, { status: 400 });

    const path = process.env.CHROME_EXE_PATH as string;
    const viewport = {
      deviceScaleFactor: 1,
      hasTouch: false,
      height: 1080,
      isLandscape: true,
      isMobile: false,
      width: 1920,
    };
    //eslint-disable-next-line
    const launchOptions: any = {
      args: puppeteer.defaultArgs({ args: chromium.args, headless: "shell" }),
      defaultViewport: viewport,
      executablePath: path || (await chromium.executablePath()),
      headless: "shell",
      ignoreHTTPSErrors: true,
      devtools: false,
    };
    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // load HTML in a way that executes scripts
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

    await browser.close();

    const pdf = Buffer.from(pdfBuffer);

    return new Response(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="output.pdf"',
      },
    });
  } catch (err) {
    console.error("PDF ERROR:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
