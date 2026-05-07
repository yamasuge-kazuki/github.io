javascript:(async function() {

const url = "https://docs.google.com/spreadsheets/d/1M4vlzbZfc9_eq9jelWe0T4lnrxCsnR2tE1wYC0BFbY4/export?format=csv";
try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("ファイルの取得に失敗しました。共有設定を確認してください。");
    
    const csvText = await response.text();

    // 3. CSV文字列を配列オブジェクトに変換
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(',');
    
    const data = rows.slice(1).filter(row => row).map(row => {
      const values = row.split(',');
      const obj = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = values[index]?.trim();
      });
      return obj;
    });

    console.log("CSVを配列として格納しました:", data);
    alert("読み込み完了！コンソールを確認してください。");
    
    // 他の処理で使えるようにグローバル変数に格納（任意）
    window.csvData = data;

  } catch (error) {
    console.error(error);
    alert("エラー: " + error.message);
  }
})();