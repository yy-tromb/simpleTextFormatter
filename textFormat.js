const fs = require("fs");
const child = require("child_process");

const filepath = process.argv[2];
if (filepath === undefined) {
  console.error("No input text file!");
  console.log(
    `Use:
$ node textFormat "TargetFile" mac|cr|linux|lf|windows|crlf(Optional)
Example: node textFormat "./target.txt" crlf
default code is CRLF(\\r\\n)
The result is written "./formatted.txt",and it is opened automatically.
`
  );
  process.exit(1);
}

let newLineCode = "\r\n";

switch (process.argv[3]) {
  case "mac" || "cr":
    newLineCode = "\r";
    break;

  case "linux" || "lf":
    newLineCode = "\n";
    break;

  case "windows" || "crlf":
    newLineCode = "\r\n";
}

let openapp;
switch (process.platform) {
  case "win32":
    openapp = "notepad";
    break;

  case "linux" || "openbsd" || "freebsd" || "netbsd" || "cygwin" || "haiku" || "aix" || "sunos":
    openapp = "log";
    break;

  case "darwin":
    openapp = "open -a TextEdit";
}

try {
  const file = fs.readFileSync(filepath);
  const result = format(file.toString());
  fs.writeFileSync("./formatted.txt", result);
  if(openapp==="log"){
    console.log(result);
    process.exit(0);
  }
  child.execSync(`${openapp} ./formatted.txt`);
} catch (error) {
  console.error(error);
}
function format(text) {
  const textArray = text.split(newLineCode);
  let outputArray = [];
  let isMain = false;
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === "") {
      isMain = false;
      continue;
    } else if (isMain === false) {
      outputArray.push(`<h2>${textArray[i]}</h2>`);
      isMain = true;
      continue;
    } else if (isMain === true) {
      outputArray.push(`<p>${textArray[i]}</p>`);
      continue;
    }
  }
  return outputArray.join(newLineCode);
}
