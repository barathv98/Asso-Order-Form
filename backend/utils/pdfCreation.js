const pdf = require("pdf-creator-node");
const path = require("path");
const fs = require("fs");

const pdfGenerate = function(orderId, schoolInfo) { 
var html = fs.readFileSync(path.resolve(__dirname, "template.html"), "utf-8");

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: ''
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '',
            last: 'Last Page'
        }
    }
};

var document = {
    html: html,
    data: {
      schoolInfo: schoolInfo,
      orderId: orderId
    },
    path: `./${orderId}.pdf`,
};

pdf
  .create(document, options)
  .then((res) => {
    
  })
  .catch((error) => {
    console.error('error',error);
  });
}

module.exports = pdfGenerate;