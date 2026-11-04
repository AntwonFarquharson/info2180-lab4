document.getElementById('searchBtn').addEventListener('click', function (event) {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();
  const url = 'superheroes.php' + (query ? '?query=' + encodeURIComponent(query) : '');

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('result').innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('result').innerHTML = "<p>Error fetching data.</p>";
    });
});