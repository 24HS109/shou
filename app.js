        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "運勢"; // デフォルトの値

            if (colour === "ピンク" && number === 0) {
                result = "絶好調";
            } else if (colour === "赤" && number === 1) {
                result = "好調";
            } else if (colour === "黒" && number === 2) {
                result = "普通";
            } else if (colour === "水色" && number === 0) {
                result = "絶不調";
            } else if (colour === "白" && number === 1) {
                result = "不調";
            } else if (colour === "青" && number === 2) {
                result = "大大絶好調";
            } else if (colour === "オレンジ" && number === 0) {
                result = "大絶好調";
            } else if (colour === "緑" && number === 1) {
                result = "大絶不調";
            } else if (colour === "紫" && number === 2) {
                result = "大大絶不調";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
