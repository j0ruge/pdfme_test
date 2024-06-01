"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
var common_1 = require("@pdfme/common");
var generator_1 = require("@pdfme/generator");
var template = {
    basePdf: common_1.BLANK_PDF,
    schemas: [
        {
            a: {
                type: 'text',
                position: { x: 0, y: 0 },
                width: 10,
                height: 10,
            },
            b: {
                type: 'text',
                position: { x: 10, y: 10 },
                width: 10,
                height: 10,
            },
            c: {
                type: 'text',
                position: { x: 20, y: 20 },
                width: 10,
                height: 10,
            },
        },
    ],
};
var inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];
(0, generator_1.generate)({ template: template, inputs: inputs })
    .then(function (pdf) {
    console.log(pdf);
    // Browser
    //const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    //window.open(URL.createObjectURL(blob));
    // Node.js
    //fs.writeFileSync(path.join(__dirname, 'test.pdf'), pdf);
});
