const fs = require("fs"), path = require("path");
const { Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType } = require("docx");
const doc = new Document({ styles: { default: { document: { run: { font: "Times New Roman", size: 22 } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1080, right: 1080 } } }, children: [
    new Paragraph({ keepNext: true, spacing: { before: 0, after: 80 }, children: [
      new TextRun({ text: "Figure 9: ", bold: true, color: "1F5135", size: 20 }),
      new TextRun({ text: "Stakeholder engagement plan: role, mechanism and timing", italics: true, size: 20 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: "png",
      data: fs.readFileSync(path.join(__dirname, "fig9_stakeholders_tbd.png")), transformation: { width: 640, height: 251 } })] }),
  ] }] });
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(process.argv[2], b); console.log("Wrote", process.argv[2]); });
