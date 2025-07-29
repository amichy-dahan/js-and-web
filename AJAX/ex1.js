function fetchBook(isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: function (data) {
      console.log("✅ Success! Book data received:");
      if (data.totalItems > 0) {
        let book = data.items[0].volumeInfo
        console.log(`Title: ${book.title}`)
        console.log(`Author: ${book.authors ? book.authors[0] : "Unknown"}`)
      } else {
        console.log("No book found with this ISBN")
      }
    },
    error: function (xhr, text, error) {
      console.log("❌ Error occurred:");
      console.log(text, error.message);
    }
  });
axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`).
then(response=> console.log(response.data))
}

