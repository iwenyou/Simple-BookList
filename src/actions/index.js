export function selectBook(book) {
  //selectBook is a action creator, it needs to return a actiom,
  //an object with a type of property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
