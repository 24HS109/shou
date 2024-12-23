function checkFortune() {
    var colour = document.getElementById('colour-select').value;
    var number = parseInt(document.getElementById('number-input').value, 10);
    var result = "入力が違います"; // デフォルトの値

    // Check for valid combinations
    if (colour === "ピンク" && number === 0) {
        result = "カレー";
    } else if (colour === "ピンク" && number === 1) {
        result = "牛丼";
    } else if (colour === "ピンク" && number === 2) {
        result = "オムライス";
    } else if (colour === "ピンク" && number === 3) {
        result = "寿司";
    } else if (colour === "青" && number === 0) {
        result = "うどん";
    } else if (colour === "オレンジ" && number === 0) {
        result = "パスタ";
    } else if (colour === "緑" && number === 0) {
        result = "焼肉";
    } else if (colour === "紫" && number === 0) {
        result = "天ぷら"; 
    } else if (colour === "黄緑" && number === 0) {
        result = "そば"; 
    } else if (colour === "茶色" && number === 0) {
        result = "たこ焼き"; 
    } else if (colour === "銀色" && number === 0) {
        result = "お好み焼き";
    } 

    document.getElementById('result-output').innerText = "あなたの今日のご飯は【" + result + "】です";
}
