let book = {
  title: "gommala enna da ithu vazhka",
  author: "ganesh",
  year: "2025",
  getInfo() {
    return `title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  },
};

console.log(book.getInfo());