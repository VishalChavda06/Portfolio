import { jsPDF } from 'jspdf';
import { projects } from '../data/projects';
import { frontendSkills, backendSkills } from '../data/skills';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 12;
  const margin = 12;
  const lineSpacing = 3;

  // Helper function to add text with word wrap
  const addText = (text, x, y, maxWidth, fontSize = 9, isBold = false) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * (fontSize * 0.35) + 0.5;
  };

  // Helper function to add a compact section header
  const addSectionHeader = (title) => {
    yPosition += 2;
    const height = addText(title, margin, yPosition, pageWidth - 2 * margin, 10, true);
    yPosition += height + 0.5;
    doc.setLineWidth(0.3);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 1.5;
  };

  // Header - Name and Title
  addText('VISHAL CHAVDA', margin, yPosition, pageWidth - 2 * margin, 15, true);
  yPosition += 6;
  addText('Fullstack Developer | Vibe Coding | BCA Student', margin, yPosition, pageWidth - 2 * margin, 8);
  yPosition += 4;
  addText('Email: vc229067@gmail.com | LinkedIn: linkedin.com/in/vishal-chavda-02559432b/', margin, yPosition, pageWidth - 2 * margin, 7);
  yPosition += 3;

  // About Me Section
  addSectionHeader('ABOUT ME');
  const aboutText = "Passionate BCA student dedicated to full-stack development. Actively engaged in vibe coding—freelance and passion-driven projects—building dynamic React front-ends and learning backend with Node.js/Nest.js. Learning by doing, shipping real-world projects, and crafting clean, intuitive user experiences.";
  const aboutHeight = addText(aboutText, margin, yPosition, pageWidth - 2 * margin, 8);
  yPosition += aboutHeight + 2;

  // Statistics Section (Two columns)
  addSectionHeader('STATISTICS');
  let statsY = yPosition;
  addText('Projects Completed: 5+', margin, statsY, (pageWidth - 3 * margin) / 2, 7.5);
  addText('Certifications: 1', pageWidth / 2 + margin / 2, statsY, (pageWidth - 3 * margin) / 2, 7.5);
  statsY += lineSpacing;
  addText('Experience: Fresher', margin, statsY, (pageWidth - 3 * margin) / 2, 7.5);
  addText('Technologies: 15+', pageWidth / 2 + margin / 2, statsY, (pageWidth - 3 * margin) / 2, 7.5);
  yPosition += lineSpacing * 2 + 1;

  // Education Section (Two columns)
  addSectionHeader('EDUCATION');
  
  // Left column - BCA
  let eduLeftY = yPosition;
  addText('BCA - Bachelor of Computer Applications', margin, eduLeftY, (pageWidth - 3 * margin) / 2, 8, true);
  eduLeftY += 3.5;
  addText('Bhagwan Mahavir University', margin, eduLeftY, (pageWidth - 3 * margin) / 2, 7);
  eduLeftY += 3;
  addText('2023 - 2026 | Currently Running', margin, eduLeftY, (pageWidth - 3 * margin) / 2, 7);
  
  // Right column - 12th and 10th
  let eduRightY = yPosition;
  addText('GSEB - HSC (12th)', pageWidth / 2 + margin / 2, eduRightY, (pageWidth - 3 * margin) / 2, 8, true);
  eduRightY += 3.5;
  addText('P.B SHAH Amroli, Surat', pageWidth / 2 + margin / 2, eduRightY, (pageWidth - 3 * margin) / 2, 7);
  eduRightY += 3;
  addText('March 2023 | Completed', pageWidth / 2 + margin / 2, eduRightY, (pageWidth - 3 * margin) / 2, 7);
  eduRightY += 3.5;
  addText('GSEB - SSC (10th)', pageWidth / 2 + margin / 2, eduRightY, (pageWidth - 3 * margin) / 2, 8, true);
  eduRightY += 3.5;
  addText('Devkurba Vidhiylay Dabholi, Surat', pageWidth / 2 + margin / 2, eduRightY, (pageWidth - 3 * margin) / 2, 7);
  eduRightY += 3;
  addText('May 2021 | Completed', pageWidth / 2 + margin / 2, eduRightY, (pageWidth - 3 * margin) / 2, 7);
  
  yPosition = Math.max(eduLeftY, eduRightY) + 1;

  // Technical Skills Section
  addSectionHeader('TECHNICAL SKILLS');
  
  // Frontend Skills
  addText('Frontend:', margin, yPosition, pageWidth - 2 * margin, 8, true);
  yPosition += 3.5;
  const frontendSkillsText = frontendSkills.join(', ');
  const frontendHeight = addText(frontendSkillsText, margin, yPosition, pageWidth - 2 * margin, 7);
  yPosition += frontendHeight + 1.5;

  // Backend Skills
  addText('Backend & Tools (Currently Learning):', margin, yPosition, pageWidth - 2 * margin, 8, true);
  yPosition += 3.5;
  const backendSkillsText = backendSkills.join(', ');
  const backendHeight = addText(backendSkillsText, margin, yPosition, pageWidth - 2 * margin, 7);
  yPosition += backendHeight + 1.5;

  // Languages
  addText('Languages:', margin, yPosition, pageWidth - 2 * margin, 8, true);
  yPosition += 3.5;
  addText('English (Proficient), Gujarati (Native), Hindi (Fluent)', margin, yPosition, pageWidth - 2 * margin, 7);
  yPosition += 3.5;

  // Featured Projects Section
  addSectionHeader('FEATURED PROJECTS');

  projects.forEach((project, index) => {
    // Project Title
    addText(`${index + 1}. ${project.title}`, margin, yPosition, pageWidth - 2 * margin, 8.5, true);
    yPosition += 3.5;
    
    // Project Description (full description, let it wrap naturally)
    const descHeight = addText(project.description, margin, yPosition, pageWidth - 2 * margin, 7);
    yPosition += descHeight + 1.5;

    // Technologies (show all, let it wrap)
    const techText = `Tech: ${project.tech.join(', ')}`;
    const techHeight = addText(techText, margin, yPosition, pageWidth - 2 * margin, 6.5);
    yPosition += techHeight + 1.5;

    // Links
    if (project.live && project.live !== '#') {
      addText(`Live: ${project.live}`, margin, yPosition, pageWidth - 2 * margin, 6.5);
      yPosition += 2.5;
    }
    if (project.github && project.github !== '#') {
      addText(`GitHub: ${project.github}`, margin, yPosition, pageWidth - 2 * margin, 6.5);
      yPosition += 2.5;
    }

    yPosition += 0.5;
  });

  // Contact Section
  yPosition += 1;
  addSectionHeader('CONTACT');
  addText('Email: vc229067@gmail.com | LinkedIn: linkedin.com/in/vishal-chavda-02559432b/', margin, yPosition, pageWidth - 2 * margin, 7);
  yPosition += 3;
  addText('Portfolio: Available upon request', margin, yPosition, pageWidth - 2 * margin, 7);

  // Save the PDF
  doc.save('Vishal_Chavada_Resume.pdf');
};
