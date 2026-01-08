document.getElementById('shortenForm').addEventListener('submit', function(event) {
  event.preventDefault();  // フォームがページを再読み込みしないようにする

  const urlInput = document.getElementById('urlInput').value;
  const shortenedUrlDiv = document.getElementById('shortenedUrl');
  const resultUrl = document.getElementById('resultUrl');
  
  if (!urlInput) {
    alert('Please enter a URL!');
    return;
  }

  // サーバーレス関数にリクエストを送る
  fetch('shorten', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: urlInput })
  })
  .then(response => response.json())
  .then(data => {
    const shortCode = data.shortCode;
    resultUrl.textContent = `https://filetransfer.lol/${shortCode}`;
    shortenedUrlDiv.style.display = 'block';
  })
  .catch(err => {
    console.error('Error shortening the URL:', err);
  });
});

// コピー機能
document.getElementById('copyButton').addEventListener('click', function() {
  const textToCopy = document.getElementById('resultUrl').textContent;

  navigator.clipboard.writeText(textToCopy).then(function() {
    alert('Shortened URL copied to clipboard!');
  }, function(err) {
    alert('Error copying text: ' + err);
  });
});

