let urlDatabase = {};  // 仮のデータベース（本番環境ではDBを使用）

export default (req, res) => {
  const { shortCode } = req.query;

  // URLがデータベースに存在すればリダイレクト
  const url = urlDatabase[shortCode];
  if (url) {
    res.redirect(url);
  } else {
    res.status(404).json({ error: 'Shortened URL not found' });
  }
};
