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
     if (colour === "赤" && number === 0) {
        result = "うどん";
    } else if (colour === "赤" && number === 1) {
        result = "ラーメン";
    } else if (colour === "赤" && number === 2) {
        result = "うどん";

    document.getElementById('result-output').innerText = "あなたの今日のご飯は【" + result + "】です";
}
