function checkFortune() {
    var colour = document.getElementById('colour-select').value;
    var number = parseInt(document.getElementById('number-input').value, 10);
    var result = "入力が違います"; // Default value

    // Check for valid combinations
    if (isNaN(number) || number < 0 || number > 2) {
        result = "無効な数字です。0、1、2のいずれかを入力してください。";
    } else {
        // Check for valid combinations
        if (colour === "ピンク" && number === 0) {
            result = "カレー";
        } else if (colour === "ピンク" && number === 1) {
            result = "牛丼";
        } else if (colour === "ピンク" && number === 2) {
            result = "オムライス";
        } else if (colour === "赤" && number === 0) {
            result = "うどん";
        } else if (colour === "赤" && number === 1) {
            result = "ラーメン";
        } else if (colour === "赤" && number === 2) {
            result = "たこ焼き";
        } else if (colour === "青" && number === 0) {
            result = "寿司";
        } else if (colour === "青" && number === 1) {
            result = "パスタ";
        } else if (colour === "青" && number === 2) {
            result = "お好み焼き";
        }
    }

    document.getElementById('result-output').innerText = "あなたの今日のご飯は【" + result + "】です";
}
