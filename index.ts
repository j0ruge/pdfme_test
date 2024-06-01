/* eslint-disable prettier/prettier */
import { Template, BLANK_PDF } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import fs from 'fs';
import path from 'path';

const template: Template = {
  basePdf: BLANK_PDF,
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

const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];

generate({template, inputs})
.then((pdf) =>
{
  console.log(pdf);

  // Browser
  //const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
  //window.open(URL.createObjectURL(blob));

  // Node.js
  //fs.writeFileSync(path.join(__dirname, 'test.pdf'), pdf);

});

