# BCS352 Java Script Introduction Lab

**Student:** Harsh Narayan Singh  
**Roll Number / Student ID:** BCS2025367  
**Course:** B.Tech CSE - 3rd Semester  
**Subject:** Java Script Introduction Lab (BCS352)

This project contains all **15 assignments and 48 questions** transcribed from the supplied JavaScript lab PDF. Each question has its own folder with a separate `script.js` (plus `Main.html` for page questions), captured output and a screenshot.

## Project structure

```text
BCS352_Krishna_Yadav_JavaScript_Lab/
├── Assignment-01/
│   ├── Question-01/
│   │   ├── Main.html
│   │   ├── OUTPUT.txt
│   │   └── screenshot.png
│   ├── Question-02/
│   │   ├── script.js
│   │   ├── OUTPUT.txt
│   │   └── screenshot.png
│   └── ...
├── Assignment-15/
├── README.md
├── PROJECT-REPORT.md
├── OUTPUT.md
├── run.bat
└── run.sh
```

## Run in VS Code

1. Install Node.js (version 18 or newer recommended).
2. Open this project folder in VS Code and open the terminal.
3. Run a question using the helper script:

   **Windows PowerShell / Command Prompt**
   ```bat
   .\run.bat 2 1
   ```

   **macOS / Linux**
   ```bash
   chmod +x run.sh
   ./run.sh 2 1
   ```

   The example runs Assignment 2, Question 1. Replace the first number with the assignment number (1-15) and the second with its question number. Page questions (Assignment 1 Question 1 and Assignment 9 Questions 1, 3 and 4) open `Main.html` in your browser instead.
4. Or run directly from a question folder:
   ```bash
   node script.js
   ```

## Where to find the results

- `OUTPUT.txt` contains the captured output for that question.
- `screenshot.png` shows the terminal-style (or browser) capture. Assignment 9 page questions also have extra step screenshots.
- `OUTPUT.md` consolidates all question outputs.
- `PROJECT-REPORT.md` lists every problem statement, output and file path.

## Notes

- All files use the exact requested student identity: **Harsh Narayan Singh — BCS2025367**, with the required header at the top of every `script.js` and `Main.html`.
- Assignment 9 Question 2 runs in Node, so it prints a list for each call.
- Screenshots are captured from the real output of the executed programs (Node) or from a real browser session (pages).
- The PDF's original sample student's identity has not been copied into this project.
