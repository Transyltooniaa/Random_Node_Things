import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
       message:"enter URL: ",
       name:"URL"
    }
  ])
  .then((answers) => {
    const url=answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('NIGGA_BALLS_HD.png'));

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
