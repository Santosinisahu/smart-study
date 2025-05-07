PDF Text Extraction & Flashcards Generator
This web application allows you to upload a PDF, extract its text, generate questions from the extracted text, and view them as interactive flashcards. It uses pdf.js to read and extract text from PDF files and provides a modern and visually appealing user interface.

Features
PDF Text Extraction: Upload a PDF file, and the text is extracted from all its pages.

Generate Questions: Create questions based on the extracted text from the PDF.

Interactive Flashcards: The questions and answers are displayed as flashcards, which can be flipped to reveal the answer.

Responsive Design: The layout is responsive and works well on both desktop and mobile devices.

Technologies Used
HTML5: For the structure of the web page.

CSS3: For styling and layout.

JavaScript: For functionality, including PDF extraction, text processing, and interactive elements.

pdf.js: A JavaScript library for reading and extracting text from PDF files.

Installation
Clone the Repository

Clone the repository to your local machine using the following command:

bash
Copy
Edit
git clone https://github.com/your-username/pdf-text-extraction.git
Open the Project in a Browser

You can open the index.html file in any modern browser (Chrome, Firefox, etc.) to run the application. There is no server-side setup required for this app to work.

How to Use
Upload a PDF:

Click the "Choose File" button to upload a PDF document from your computer.

The text from the uploaded PDF will automatically be extracted and displayed in the textarea below.

Generate Questions:

Once the text is extracted, click the "Generate Questions" button.

The app will generate simple questions based on the extracted text and display them as flashcards.

View Flashcards:

The questions will be displayed as interactive flashcards.

Click on a flashcard to flip it and view the answer.

Example Flow
Step 1: Upload a PDF file.

Step 2: The text will be extracted and shown in the textarea.

Step 3: Click "Generate Questions" to create questions based on the extracted text.

Step 4: Flashcards will appear on the page, and you can click on them to flip and reveal the answers.

Code Overview
HTML
Contains the file input (<input type="file">) for uploading the PDF file.

A <textarea> to display the extracted text.

A button (<button>) that generates questions when clicked.

A container (<div>) where the flashcards are displayed.

CSS
The page has a modern design with a gradient background.

Buttons and inputs have hover effects and transitions for smooth user interaction.

Flashcards have a flip animation that toggles between the question and answer.

JavaScript
Handles the file upload, reads the PDF using pdf.js, and extracts the text.

Generates simple questions from the extracted text.

Manages the display of flashcards and their flip functionality.
