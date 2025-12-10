// --- REVISED READABLE SINGLE-PAGE PORTFOLIO ---

import { jsPDF } from 'jspdf';
import { projects } from '../data/projects';
import { frontendSkills, backendSkills } from '../data/skills';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 10;
  const margin = 10;

  // Updated column widths for readability
  const leftColWidth = (pageWidth - 2 * margin) * 0.30;   // smaller left column
  const rightColWidth = (pageWidth - 2 * margin) * 0.70;  // wider right column
  const leftColX = margin;
  const rightColX = margin + leftColWidth + 5;

  const primaryColor = [0, 0, 0];
  const secondaryColor = [70, 70, 70];
  const accentColor = [110, 110, 110];

  // Text helper with link support
  const addText = (text, x, y, maxWidth, fontSize = 9, bold = false, color = primaryColor, lineGap = 4.1, url = null) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    
    // Add clickable link if URL provided
    if (url) {
      const textWidth = doc.getTextWidth(lines[0]);
      const textHeight = fontSize * 0.35;
      doc.link(x, y - textHeight, textWidth, textHeight, { url: url });
    }
    
    return lines.length * lineGap;
  };

  // Helper to add clickable link text
  const addLinkText = (text, url, x, y, maxWidth, fontSize = 9, color = [0, 0, 0]) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    
    // Make entire text clickable
    lines.forEach((line, index) => {
      const textWidth = doc.getTextWidth(line);
      const textHeight = fontSize * 0.35;
      doc.link(x, y - textHeight + (index * textHeight), textWidth, textHeight, { url: url });
    });
    
    return lines.length * (fontSize * 0.35);
  };

  // Section header
  const addSectionHeader = (text, x, y, maxWidth) => {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(text, x, y);
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.4);
    doc.line(x, y + 1, x + maxWidth, y + 1);
    return 6;
  };

  const addDivider = (y, x = margin) => {
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(x, y, pageWidth - x, y);
  };

  // ----------- HEADER -----------
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('VISHAL CHAVDA', margin, yPosition + 5);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Fullstack Developer | Vibe Coding | BCA Student', margin, yPosition + 10);

  // Clickable email and LinkedIn in header
  doc.setFontSize(8);
  addLinkText('vc229067@gmail.com', 'mailto:vc229067@gmail.com', pageWidth - margin - 35, yPosition + 5, 35, 8, [0, 0, 0]);
  addLinkText('linkedin.com/in/vishal-chavda-02559432b/', 'https://linkedin.com/in/vishal-chavda-02559432b/', pageWidth - margin - 58, yPosition + 9, 58, 8, [0, 0, 0]);

  yPosition += 14;
  addDivider(yPosition);
  yPosition += 4;

  // Column Y values
  let leftY = yPosition;
  let rightY = yPosition;

  // ----------- LEFT COLUMN -----------
  leftY += addSectionHeader('ABOUT ME', leftColX, leftY, leftColWidth);
  leftY += addText(
    'Passionate BCA student dedicated to full-stack development. Actively engaged in vibe coding—freelance and passion-driven projects—building dynamic React front-ends and learning backend with Node.js/Nest.js. Learning by doing, shipping real-world projects, and crafting clean, intuitive user experiences.',
    leftColX, leftY, leftColWidth, 8, false, secondaryColor, 4.2
  ) + 6;

  leftY += addSectionHeader('EDUCATION', leftColX, leftY, leftColWidth);
  leftY += addText('BCA - Bachelor of Computer Applications', leftColX, leftY, leftColWidth, 8.2, true);
  leftY += addText('Bhagwan Mahavir University', leftColX, leftY, leftColWidth, 7.2, false, secondaryColor);
  leftY += addText('2023 - 2026 | Currently Running', leftColX, leftY, leftColWidth, 6.8, false, accentColor) + 3;

  leftY += addText('GSEB - HSC (12th)', leftColX, leftY, leftColWidth, 8.2, true);
  leftY += addText('P.B SHAH Amroli, Surat', leftColX, leftY, leftColWidth, 7.2, false, secondaryColor);
  leftY += addText('March 2023 | Completed (PR: 60.86%)', leftColX, leftY, leftColWidth, 6.8, false, accentColor) + 3;

  leftY += addText('GSEB - SSC (10th)', leftColX, leftY, leftColWidth, 8.2, true);
  leftY += addText('Devkurba Vidhiylay Dabholi, Surat', leftColX, leftY, leftColWidth, 7.2, false, secondaryColor);
  leftY += addText('May 2021 | Completed', leftColX, leftY, leftColWidth, 6.8, false, accentColor) + 4;

  leftY += addSectionHeader('STATISTICS', leftColX, leftY, leftColWidth);
  const statsLabelWidth = leftColWidth * 0.65;
  const statsValueX = leftColX + statsLabelWidth;
  [
    ['Projects', '5+'],
    ['Technologies', '15+'],
    ['Certifications', '1'],
    ['Experience', 'Fresher']
  ].forEach(([label, val]) => {
    // Add label
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...secondaryColor);
    doc.text(label, leftColX, leftY);
    
    // Add value (right-aligned)
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    const valWidth = doc.getTextWidth(val);
    doc.text(val, statsValueX + (leftColWidth - statsLabelWidth) - valWidth, leftY);
    
    leftY += 4;
  });

  leftY += 3;
  leftY += addSectionHeader('SKILLS', leftColX, leftY, leftColWidth);

  leftY += addText("Frontend", leftColX, leftY, leftColWidth, 8, true);
  const frontendText = frontendSkills.join(', ');
  leftY += addText(
    frontendText,
    leftColX, leftY, leftColWidth, 7, false, secondaryColor
  ) + 3;

  leftY += addText("Backend & Tools (Currently Learning)", leftColX, leftY, leftColWidth, 8, true);
  const backendText = backendSkills.join(', ');
  leftY += addText(
    backendText,
    leftColX, leftY, leftColWidth, 7, false, secondaryColor
  ) + 3;

  leftY += addSectionHeader('LANGUAGES', leftColX, leftY, leftColWidth);
  leftY += addText("English (Proficient)", leftColX, leftY, leftColWidth, 7, false, secondaryColor);
  leftY += addText("Gujarati (Native)", leftColX, leftY, leftColWidth, 7, false, secondaryColor);
  leftY += addText("Hindi (Fluent)", leftColX, leftY, leftColWidth, 7, false, secondaryColor) + 4;

  leftY += addSectionHeader("CONTACT", leftColX, leftY, leftColWidth);
  // Clickable email
  leftY += addLinkText("vc229067@gmail.com", "mailto:vc229067@gmail.com", leftColX, leftY, leftColWidth, 7, [0, 0, 0]) + 2;
  // Clickable LinkedIn
  leftY += addLinkText("linkedin.com/in/vishal-chavda-02559432b/", "https://linkedin.com/in/vishal-chavda-02559432b/", leftColX, leftY, leftColWidth, 7, [0, 0, 0]) + 2;
  leftY += addText("Portfolio: Available upon request", leftColX, leftY, leftColWidth, 7, false, secondaryColor);

  // ----------- RIGHT COLUMN (READABLE FIX) -----------

  rightY += addSectionHeader('FEATURED PROJECTS', rightColX, rightY, rightColWidth);

  const projectFont = 8.2;
  const summaryFont = 7.2;
  const techFont = 7;

  projects.forEach((p, index) => {
    // Title
    rightY += addText(
      `${index + 1}. ${p.title}`,
      rightColX,
      rightY,
      rightColWidth,
      projectFont,
      true,
      primaryColor,
      4.5
    ) + 1;

    // Summary (using actual project description)
    rightY += addText(
      p.description,
      rightColX,
      rightY,
      rightColWidth,
      summaryFont,
      false,
      secondaryColor,
      4.3
    ) + 2;

    // Tech (using actual tech array)
    rightY += addText(
      `Tech: ${p.tech.join(", ")}`,
      rightColX,
      rightY,
      rightColWidth,
      techFont,
      false,
      accentColor,
      3.8
    ) + 1.5;

    // Clickable Live link
    if (p.live && p.live !== '#') {
      rightY += addLinkText(`Live: ${p.live}`, p.live, rightColX, rightY, rightColWidth, 6.8, [0, 0, 0]) + 1.5;
    }

    // Clickable GitHub link
    if (p.github && p.github !== '#') {
      rightY += addLinkText(`GitHub: ${p.github}`, p.github, rightColX, rightY, rightColWidth, 6.8, [0, 0, 0]) + 3.2;
    } else {
      rightY += 3.2;
    }
  });

  // Footer
  doc.setFontSize(6);
  doc.setTextColor(140, 140, 140);
  doc.text("Portfolio generated with passion | Vibe Coding", pageWidth / 2, pageHeight - 5, { align: "center" });

  doc.save("Vishal_Chavada_Resume.pdf");
};
