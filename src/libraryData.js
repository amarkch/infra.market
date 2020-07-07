function Book(id, title, sub, author, pub_year, totalCopy) {

      this.id = id;
      this.title = title;
      this.sub = sub;
      this.author = author;
      this.pub_year = pub_year;
      this.totalCopy = totalCopy;
      this.availableCopy = totalCopy;
    const reduceCopy = () => {
      this.availableCopy = 0 < this.availableCopy ? this.availableCopy - 1 : this.availableCopy;
    }
    const increaseCopy = () => {
      this.availableCopy = this.totalCopy > this.availableCopy ? this.availableCopy + 1 : this.availableCopy;
    }
}
function User(id, name){
    this.id = id;
    this.name = name;
}

const BookIssueTrans = (book_id, user_id, due_date) => {
    this.book_id = book_id;
    this.user_id = user_id;
    this.due_date = due_date;
}
const book = (id, title, sub, author, pub_year, totalCopy) => {
    this.id = id;
    this.title = title;
    this.sub = sub;
    this.author = author;
    this.pub_year = pub_year;
    this.totalCopy = totalCopy;
    this.availableCopy = totalCopy;
    const reduceCopy = () => {
      this.availableCopy = 0 < this.availableCopy ? this.availableCopy - 1 : this.availableCopy;
    }
    const increaseCopy = () => {
      this.availableCopy = this.totalCopy > this.availableCopy ? this.availableCopy + 1 : this.availableCopy;
    }
}

const initializeData = () => {
  const bookA= new Book(1, "Book title A", "Subject A", "Author A", "2020", 10);
  const bookB= new Book(2, "Book title B", "Subject B", "Author B", "2020", 10);
  const bookC= new Book(3, "Book title C", "Subject C", "Author C", "2020", 10);
  const bookD= new Book(4, "Book title D", "Subject D", "Author D", "2020", 10);
  const userA = new User(1, "User A");
  const userB = new User(2, "User B");
  const userC = new User(3, "User C");
  return {
    books: [bookA, bookB, bookC, bookD],
    users: [userA, userB, userC],
  }
}
const libraryData = {
  books: [],
  users: [],
}
export {libraryData, initializeData, BookIssueTrans};
