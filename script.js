getData();
function getData() {
    fetch("http://juliazofia.com/kea/copyhomework/wp-json/wp/v2/posts")
      .then(function(response) {
        return response.json();
      })
      .then(showPosts);
  }
  
  function showPosts(posts) {
    console.log(posts);
  }