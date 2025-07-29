function fetchBook(queryType ,queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=a&maxResults=40`,
    success: function (data) {
      let itemsFromApi = data.items;
      
      for (const key of itemsFromApi) {
           console.log({title: key.volumeInfo.title, isbn:key.volumeInfo.industryIdentifiers[0].identifier , author:key.volumeInfo.authors});
      }
    },
    error: function (xhr, text, error) {
      console.log("❌ Error occurred:");
      console.log(text, error.message);
    }
  });

}