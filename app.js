document.addEventListener('DOMContentLoaded', () => {
    const Button1 = document.getElementById('TitleButton');
    const Button2 = document.getElementById('UrlButton');
    const Button3 = document.getElementById('NumButton');
    const inputBar = document.getElementById('inputBar');
    const inputLink = document.getElementById('inputLink');
    
    
    const responseDiv = document.getElementById('response');
    Button1.addEventListener('click', async () => {
    const value = inputBar.value;
    // Sending the input value to the backend
    console.log("sdasd");
    try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
    });
    const data = await res.json();
    // Displaying the response on the website
    responseDiv.innerHTML = `<p>Received from backend: ${JSON.stringify(data)}</p>`;
    } catch (error) {
    console.error('Error:', error);
    responseDiv.innerHTML = `<p>Error: ${error}</p>`;
    }
    });
    
    
    Button2.addEventListener('click', async () => {
    const value = inputLink.value;
    // Sending the input value to the backend
    try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
    });
    const data = await res.json();
    // Displaying the response on the website
    responseDiv.innerHTML = `<p>Received from backend: ${JSON.stringify(data)}</p>`;
    } catch (error) {
    console.error('Error:', error);
    responseDiv.innerHTML = `<p>Error: ${error}</p>`;
    }
    });
    });

    function goToInput() {
        const inputContainer = document.getElementById('input-container');
        inputContainer.scrollIntoView({behavior: 'smooth'});
      }

      const numButton = document.getElementById('NumButton');

      numButton.addEventListener('click', function() {
          const numberOfSongs = document.getElementById('inputNum').value;
          generateTableRows(numberOfSongs);
      });

      function generateTableRows(numberOfSongs) {
        const tableBody = document.getElementById('song-list');
        tableBody.innerHTML = ''; // Clear existing table rows, if any.
    
        for (let i = 0; i < numberOfSongs; i++) {
          const row = tableBody.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          cell1.textContent = 'Song Title ' + (i + 1);
          cell2.textContent = 'Spotify URL ' + (i + 1);
        }
      }
    