import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const html = body?.html;

    // const html = jsonHtml.html;
    if (!html) return new NextResponse("Missing html", { status: 400 });

    // return new NextResponse(html, { status: 200 });

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.emulateMediaType("screen");

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "12mm", bottom: "12mm", left: "12mm", right: "12mm" },
    });
    await browser.close();

    const pdf = Buffer.from(pdfBuffer);

    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="output.pdf"',
      },
    });
  } catch (err) {
    console.error("PDF generation error:", err);
    return new NextResponse(String(err), { status: 500 });
  }
};

export const GET = async () => {
  return new NextResponse("Puppeteer PDF generation endpoint", { status: 200 });
};
