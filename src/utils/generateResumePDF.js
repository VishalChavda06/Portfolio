import { jsPDF } from 'jspdf';
import { projects } from '../data/projects';
import { frontendSkills, backendSkills } from '../data/skills';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;
  const margin = 20;
  const lineHeight = 7;
  const sectionSpacing = 10;

  // Helper function to add new page if needed
  const checkNewPage = (requiredSpace) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrap
  const addText = (text, x, y, maxWidth, fontSize = 10, isBold = false) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * (fontSize * 0.4) + 2;
  };

  // Helper function to add a section header
  const addSectionHeader = (title) => {
    checkNewPage(15);
    yPosition += 5;
    const height = addText(title, margin, yPosition, pageWidth - 2 * margin, 14, true);
    yPosition += height + 3;
    // Add line under header
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += sectionSpacing;
  };

  // Header - Name and Title
  addText('VISHAL CHAVDA', margin, yPosition, pageWidth - 2 * margin, 20, true);
  yPosition += 10;
  addText('Fullstack Developer | BCA Student', margin, yPosition, pageWidth - 2 * margin, 12);
  yPosition += 8;
  addText('Email: vc229067@gmail.com | LinkedIn: linkedin.com/in/vishal-chavda-02559432b/', margin, yPosition, pageWidth - 2 * margin, 9);
  yPosition += sectionSpacing + 5;

  // About Me Section
  addSectionHeader('ABOUT ME');
  const aboutText = "Hello! I'm Vishal Chavada, a passionate 20-year-old BCA (Bachelor of Computer Applications) student in my third year, dedicated to mastering the art of full-stack web development. My journey in programming began with curiosity and has evolved into a deep commitment to creating meaningful digital experiences. Currently, I'm immersing myself in modern web technologies, focusing on building robust applications with React for dynamic front-end experiences and exploring backend development with Node.js and Nest.js. I believe in learning by doing, which is why I actively work on real-world projects that challenge my skills and expand my understanding. Beyond coding, I'm fascinated by the intersection of technology and user experience. I strive to write clean, maintainable code and create applications that not only function well but also provide intuitive and engaging user interfaces. My goal is to become a versatile developer who can contribute meaningfully to innovative projects.";
  const aboutHeight = addText(aboutText, margin, yPosition, pageWidth - 2 * margin, 10);
  yPosition += aboutHeight + sectionSpacing;

  // Education Section
  addSectionHeader('EDUCATION');
  
  // BCA
  addText('BCA - Bachelor of Computer Applications', margin, yPosition, pageWidth - 2 * margin, 11, true);
  yPosition += 6;
  addText('Bhagwan Mahavir University', margin, yPosition, pageWidth - 2 * margin, 10);
  yPosition += 5;
  addText('2023 - 2026 | Current Semester: 5', margin, yPosition, pageWidth - 2 * margin, 9);
  yPosition += 8;

  // 12th
  addText('Higher Secondary (12th)', margin, yPosition, pageWidth - 2 * margin, 11, true);
  yPosition += 6;
  addText('Completed in March 2023 | PR: 60.86%', margin, yPosition, pageWidth - 2 * margin, 10);
  yPosition += sectionSpacing;

  // Technical Skills Section
  addSectionHeader('TECHNICAL SKILLS');
  
  // Frontend Skills
  addText('Frontend Development:', margin, yPosition, pageWidth - 2 * margin, 10, true);
  yPosition += 6;
  const frontendSkillsText = frontendSkills.join(', ');
  const frontendHeight = addText(frontendSkillsText, margin, yPosition, pageWidth - 2 * margin, 9);
  yPosition += frontendHeight + 5;

  // Backend Skills
  addText('Backend & Tools:', margin, yPosition, pageWidth - 2 * margin, 10, true);
  yPosition += 6;
  const backendSkillsText = backendSkills.join(', ');
  const backendHeight = addText(backendSkillsText, margin, yPosition, pageWidth - 2 * margin, 9);
  yPosition += backendHeight + sectionSpacing;

  // Languages Section
  addSectionHeader('LANGUAGES');
  addText('English (Proficient), Gujarati (Native), Hindi (Fluent)', margin, yPosition, pageWidth - 2 * margin, 10);
  yPosition += sectionSpacing + 5;

  // Featured Projects Section
  addSectionHeader('FEATURED PROJECTS');

  projects.forEach((project, index) => {
    checkNewPage(30);
    
    // Project Title
    addText(`${index + 1}. ${project.title}`, margin, yPosition, pageWidth - 2 * margin, 11, true);
    yPosition += 7;

    // Project Description
    const descHeight = addText(project.description, margin, yPosition, pageWidth - 2 * margin, 9);
    yPosition += descHeight + 4;

    // Technologies
    addText(`Technologies: ${project.tech.join(', ')}`, margin, yPosition, pageWidth - 2 * margin, 9);
    yPosition += 5;

    // Live URL if available
    if (project.live && project.live !== '#') {
      addText(`Live: ${project.live}`, margin, yPosition, pageWidth - 2 * margin, 8);
      yPosition += 5;
    }

    // GitHub
    if (project.github && project.github !== '#') {
      addText(`GitHub: ${project.github}`, margin, yPosition, pageWidth - 2 * margin, 8);
      yPosition += 5;
    }

    yPosition += sectionSpacing;
  });

  // Contact Section
  checkNewPage(15);
  addSectionHeader('CONTACT');
  addText('Email: vc229067@gmail.com', margin, yPosition, pageWidth - 2 * margin, 10);
  yPosition += 6;
  addText('LinkedIn: linkedin.com/in/vishal-chavda-02559432b/', margin, yPosition, pageWidth - 2 * margin, 10);
  yPosition += 6;
  addText('Portfolio: Available upon request', margin, yPosition, pageWidth - 2 * margin, 10);

  // Save the PDF
  doc.save('Vishal_Chavada_Resume.pdf');
};

