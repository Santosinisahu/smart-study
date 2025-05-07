// Function to handle PDF file input
document.getElementById("file-input").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      extractTextFromPDF(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  });
  
  // Function to extract text from a PDF file
  function extractTextFromPDF(pdfFile) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const pdfData = new Uint8Array(e.target.result); // Create a Uint8Array from the file's content
      
      // Use pdf.js to load the PDF document
      pdfjsLib.getDocument(pdfData).promise.then((pdf) => {
        let extractedText = '';
        const totalPages = pdf.numPages;
  
        // Loop through all pages of the PDF and extract text
        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
          pdf.getPage(pageNum).then((page) => {
            page.getTextContent().then((textContent) => {
              // Combine text from each page
              extractedText += textContent.items.map(item => item.str).join(' ') + "\n";
  
              // After processing the last page
              if (pageNum === totalPages) {
                displayExtractedText(extractedText);
              }
            });
          }).catch((err) => {
            console.error("Error reading PDF page:", err);
            alert("Error extracting text from the PDF.");
          });
        }
      }).catch((err) => {
        console.error("Error loading PDF:", err);
        alert("Error extracting text from the PDF.");
      });
    };
    
    // Read the file as an ArrayBuffer
    reader.readAsArrayBuffer(pdfFile);
  }
  
  // Function to display extracted text in the textarea
  function displayExtractedText(text) {
    document.getElementById("extracted-text").value = text;
    document.getElementById("generate-questions").disabled = false; // Enable question generation button
  }
  
  // Function to generate simple questions from extracted text
  document.getElementById("generate-questions").addEventListener("click", () => {
    const text = document.getElementById("extracted-text").value;
  
    // Check if there's any extracted text
    if (!text.trim()) {
      alert("Please upload a valid document with text.");
      return;
    }
  
    const questions = generateQuestions(text);
  
    if (questions.length === 0) {
      alert("No valid questions were generated. Please check the extracted text.");
    } else {
      displayQuestions(questions);
    }
  });
  
  // Function to generate simple questions
  function generateQuestions(text) {
    const sentences = text.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 10);
    const questions = sentences.map((sentence, index) => ({
      question: `What is the key point in: "${sentence}"?`,
      answer: sentence
    }));
  
    return questions;
  }
  
  // Function to display questions as flashcards
  function displayQuestions(questions) {
    const flashcardsContainer = document.getElementById("flashcards");
    flashcardsContainer.innerHTML = ''; // Clear existing flashcards
  
    questions.forEach((q, index) => {
      const flashcard = document.createElement("div");
      flashcard.classList.add("flashcard");
  
      flashcard.innerHTML = `
        <div class="front">
          <p><strong>Q:</strong> ${q.question}</p>
        </div>
        <div class="back">
          <p><strong>A:</strong> ${q.answer}</p>
        </div>
      `;
  
      flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("flip");
      });
  
      flashcardsContainer.appendChild(flashcard);
    });
  }
  