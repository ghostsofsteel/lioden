fetch('https://dl.dropboxusercontent.com/s/4gxipf2hrudbd0g84ljc7/content.js') // Replace with your hosted file's URL
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.text();
  })
  .then(code => {
    // Dynamically execute the fetched code
    const scriptElement = document.createElement('script');
    scriptElement.textContent = code;
    document.body.appendChild(scriptElement);
  })
  .catch(error => {
    console.error('Failed to fetch and execute the remote script:', error);
  });
