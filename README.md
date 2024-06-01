# Testando a lib PDFME

<!-- TOC -->

- [Testando a lib PDFME](#testando-a-lib-pdfme)
  - [Installation](#installation)

<!-- /TOC -->

```bash
npm i typescript --save-dev
npx tsc --init
npm i gts --save-dev
npx gts init
```

[Set Up a New TypeScript Project](https://www.digitalocean.com/community/tutorials/typescript-new-project)

---

## Installation

The operating requirements should be the node environment >=16.
There are two packages in pdfme, generator and UI.

The package for generating PDF can be installed with the following command.

```bash
npm i @pdfme/generator @pdfme/common
```

The packages for using PDF designer, forms and viewers can be installed with the following commands.

```bash
npm i @pdfme/ui @pdfme/common
```

*You must install `@pdfme/common` regardless of which package you use.
