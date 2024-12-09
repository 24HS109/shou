        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "今日のご飯"; // デフォルトの値

            if (colour === "ピンク" && number === 0) {
                result = "カレー";
            } else if (colour === "赤" && number === 1) {
                result = "ラーメン";
            } else if (colour === "黒" && number === 2) {
                result = "牛丼";
            } else if (colour === "水色" && number === 0) {
                result = "オムライス";
            } else if (colour === "白" && number === 1) {
                result = "寿司";
            } else if (colour === "青" && number === 2) {
                result = "うどん";
            } else if (colour === "オレンジ" && number === 0) {
                result = "パスタ";
            } else if (colour === "緑" && number === 1) {
                result = "焼肉";
            } else if (colour === "紫" && number === 2) {
                result = "天ぷら"; 
            } else if (colour === "黄緑" && number === 2) {
                result = "そば"; 
            } else if (colour === "茶色" && number === 2) {
                result = "たこ焼き"; 
            } else if (colour === "銀色" && number === 2) {
                result = "お好み焼き";
          
　　　　　　
                document.getElementById('result-output').innerText = "あなたの今日のご飯は【" + result + "】です";
        }
