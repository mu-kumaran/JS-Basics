const path = require("path")

console.log("Path directory: ",path.join(__dirname))

img_path = path.join(__dirname,"files","images","exam-result.jpg")
console.log("Image path: ",img_path)

pdf_path = path.join(__dirname,"others","sample.pdf")
doc_path = path.join(__dirname,"others","MD_resume.docx")
console.log("PDF path: ", pdf_path)
console.log("DOC path: ", doc_path)

// Dynamic path creation
folders = ["files","images","exam-result.jpg"]
folder_paths = ["files","others"]
others = path.join(__dirname,...folders)
folds = path.join(__dirname,...folder_paths,"sample.pdf")
console.log(others)
console.log(folds)