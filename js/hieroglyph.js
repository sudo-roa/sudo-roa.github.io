
// const chars = str.split('');
// console.log(chars[8]);

// ひらがな、ヒエログリフ辞書
var arr = { "あ": '\u{13000}', "い": "\u{13004}", "う": "\u{13008}", "え":"\u{1300A}", "お": "\u{1300F}", 
            "か": '\u{13020}', "き": "\u{13024}", "く": "\u{13028}", "け":"\u{1302A}", "こ": "\u{1302F}",
            "さ": '\u{13040}', "し": "\u{13044}", "す": "\u{13048}", "せ":"\u{1304A}", "そ": "\u{1304F}",
            "た": '\u{13060}', "ち": "\u{13064}", "つ": "\u{13068}", "て":"\u{1306A}", "と": "\u{1306F}",
            "な": '\u{13080}', "に": "\u{13084}", "ぬ": "\u{13088}", "ね":"\u{1308A}", "の": "\u{1308F}",
            "は": '\u{130A0}', "ひ": "\u{130A4}", "ふ": "\u{130A8}", "へ":"\u{130AA}", "ほ": "\u{130AF}",
            "ま": '\u{130C0}', "み": "\u{130C4}", "む": "\u{130C8}", "め":"\u{130CA}", "も": "\u{130CF}",
            "や": '\u{130E0}', "ゐ": "\u{130E4}", "ゆ": "\u{130E8}", "ゑ":"\u{130EA}", "よ": "\u{130EF}",
            "ら": '\u{13100}', "り": "\u{13104}", "る": "\u{13108}", "れ":"\u{1310A}", "ろ": "\u{1310F}",
            "わ": '\u{13120}', "を": "\u{13124}", "ん": "\u{13128}"};

// jtohのテキストエリアのタグ情報取得
var jtoh = document.getElementById('jtoh');

// 入力イベントリスナー
jtoh.addEventListener("input",function(){
    var value = document.getElementById('jtoh').value;
    var result_h = document.getElementById('result_h'); 
    result_h.innerHTML = "";
    if (value.length === 0){
        
    }else if(value.length === 1){
        if(!arr[value]){
        }else{
            result_h.innerHTML = arr[value];
        }
    }else if(value.length >1){
        cutstr(value, value.length);
    }
  });

function cutstr(chars, char_length){
    console.log("here is cutstr");
    // let char = chars.split('');
    for(let i = 0; i < char_length; i++){
        if(!arr[chars[i]]){
            
        }else{
            result_h.innerHTML += arr[chars[i]];
        }
    }
}