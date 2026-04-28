const COMMANDS = {
    g: {title: 'Google', url: (q) => `https://www.google.com/search?q=${q}`, cssClass: 'card-google'},
    y: {title: 'Youtube', url: (q) => `https://www.youtube.com/results?search_query=${q}`, cssClass: 'card-youtube'},
    x: {title: 'X', url: (q) => `https://x.com/hashtag/${q}`, cssClass: 'card-x'},
    i: {title: 'Instagram', url: (q) => `https://www.instagram.com/explore/tags/${q}/`, cssClass: 'card-instagram'},
};

// Load history from localStorage
let history = JSON.parse(localStorage.getItem('startpageHistory') || '[]');

// Render all existing history on load
window.onload = () => {
    history.forEach(h => addCard(h, false));
};

function handleGo() {
    const input = document.getElementById('commandInput');
    const raw = input.value.trim();

    // Validate: must start with /letter
    if (!raw.startsWith('/')) {
        alert('Invalid command');
        return;
    }

    const parts = raw.split(' ');
    const prefix = parts[0]; // e.g. "/g"
    const letter = prefix.slice(1); // e.g. "g"
    const searchTerms = parts.slice(1); // everything after the prefix

    // Validate prefix format (exactly /letter)
    if (prefix.length !== 2 || !/^[a-z]$/.test(letter)) {
        alert('Invalid command');
        return;
    }

    // Validate known prefix
    if (!COMMANDS[letter]) {
        alert('Unknown command prefix');
        return;
    }

    // Validate that there is a search query
    if (searchTerms.length === 0 || searchTerms.join('') === '') {
        alert('Invalid command');
        return;
    }

    const cmd = COMMANDS[letter];
    const query = searchTerms.map(encodeURIComponent).join('+');
    const url = cmd.url(query);
    const displayQuery = searchTerms.join(' ');

    // Open in new tab
    window.open(url, '_blank');

    // Build history object
    const h = {
        title: cmd.title,
        text: displayQuery,
        url: url,
        cssClass: cmd.cssClass
    };

    // Save to array and localStorage
    history.push(h);
    localStorage.setItem('startpageHistory', JSON.stringify(history));

    // Add card to page
    addCard(h, true);

    // Clear input
    input.value = '';
}

function addCard(h, prepend) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4 mb-3';

    colDiv.innerHTML = `
    <div class="card ${h.cssClass}">
      <div class="card-header">${h.title}</div>
      <div class="card-body">
        <p class="card-text">${h.text}</p>
        <a href="${h.url}" target="_blank" class="btn btn-sm btn-card">Go!</a>
      </div>
    </div>
  `;

    const row = document.getElementById('history-row');
    if (prepend) {
        row.insertBefore(colDiv, row.firstChild);
    } else {
        row.appendChild(colDiv);
    }
}

// Allow pressing Enter in the input field
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('commandInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleGo();
    });
});