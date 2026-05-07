javascript:(async function() {

const url = "https://docs.google.com/spreadsheets/d/1M4vlzbZfc9_eq9jelWe0T4lnrxCsnR2tE1wYC0BFbY4/export?format=csv";
console.log(url);
try {
  
    const response = await fetch(url);
    if (!response.ok) throw new Error("ファイルの取得に失敗しました。共有設定を確認してください。");
    
    const csvText = await response.text();

    console.log("CSVを配列として格納しました:", csvText);
    alert("読み込み完了！コンソールを確認してください。");
    

    window.csvData = data;

  } catch (error) {
    console.error(error);
    alert("エラー: " + error.message);
  }
  const url = window.location.href;
  const match = url.match(/https:\/\/mypage\.(\d+)/);
  
    
})();