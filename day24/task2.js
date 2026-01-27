let book = {
  title: "morattu kuthu story",
  author: "ganesh Singh",
  year: "2008",
  describe() {
    return `title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  },
};

console.log(book.describe());