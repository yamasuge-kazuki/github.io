javascript:(async function() {

const csvurl = "https://docs.google.com/spreadsheets/d/1M4vlzbZfc9_eq9jelWe0T4lnrxCsnR2tE1wYC0BFbY4/export?format=csv";
const pageurl = window.location.href;
const idnode=document.getElementById("gksid");
const pwnode=document.getElementById("!gkspw");
const pw="2Pr2h?Uq&AW/!&c";
const match = pageurl.match(/https:\/\/mypage\.(\d+)/);
const button =document.getElementById("loginbtn");

if (match) {
    const urlcode = match[1];
    console.log("抽出されたコード:", urlcode);
    try {
      const response = await fetch(csvurl);
      if (!response.ok) throw new Error("ファイルの取得に失敗しました。共有設定を確認してください。");
    
      const csvText = await response.text();


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

    console.log("CSVを配列として格納しました:", data[0]["code"]);
    window.csvData = data;

    pwnode.value=pw;
    console.log(pw);
    
    for (let i = 0; i < 5; i += 1){
      let csvcode= data[i]["code"];
      console.log(csvcode,urlcode);
      if (csvcode==urlcode){
        let csvid=data[i]["ID"];
        idnode.value= csvid;
        console.log(csvid,pw);
        break;
      }
    }
    button.click();
  } catch (error) {
    console.error(error);
    alert("エラー: " + error.message);
  }
  } else {
    alert("対象のURLパターンではありません。");
  }

})();