function checkFortune() {
    var colour = document.getElementById('colour-select').value;
    var number = parseInt(document.getElementById('number-input').value, 10);
    var result = "今日のご飯"; // デフォルトの値

    // Check for valid combinations
    if (colour === "ピンク" && number === 1) {
        result = "カレー";
    } else if (colour === "赤" && number === 2) {
        result = "ラーメン";
    } else if (colour === "黒" && number === 3) {
        result = "牛丼";
    } else if (colour === "水色" && number === 4) {
        result = "オムライス";
    } else if (colour === "白" && number === 5) {
        result = "寿司";
    } else if (colour === "青" && number === 6) {
        result = "うどん";
    } else if (colour === "オレンジ" && number === 7) {
        result = "パスタ";
    } else if (colour === "緑" && number === 8) {
        result = "焼肉";
    } else if (colour === "紫" && number === 9) {
        result = "天ぷら"; 
    } else if (colour === "黄緑" && number === 10) {
        result = "そば"; 
    } else if (colour === "茶色" && number === 11) {
        result = "たこ焼き"; 
    } else if (colour === "銀色" && number === 12) {
        result = "お好み焼き";
    } 

    document.getElementById('result-output').innerText = "あなたの今日のご飯は【" + result + "】です";
}
