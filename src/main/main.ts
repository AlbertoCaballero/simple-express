export class MainEntryPoin {
  constructor() {
    console.log('Starting systems!');
  }

  getContent = (name: string) => {
    return `
      <h1>Hello ${name}</h1>
      <p>Wellcome to the matrix</p>
    `
  }

  getSizeOfPath = (path: string) => {
    return `Path: ${path} Size: ${path.length}`
  }
}