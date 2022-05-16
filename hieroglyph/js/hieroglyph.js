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
            "が": '\u{13030}', "ぎ": "\u{13034}", "ぐ": "\u{13038}", "げ":"\u{1303A}", "ご": "\u{1303F}",
            "ざ": '\u{13050}', "じ": "\u{13054}", "ず": "\u{13058}", "ぜ":"\u{1305A}", "ぞ": "\u{1305F}",
            "だ": '\u{13070}', "ぢ": "\u{13074}", "づ": "\u{13078}", "で":"\u{1307A}", "ど": "\u{1307F}",
            "ば": '\u{130B0}', "び": "\u{130B4}", "ぶ": "\u{130B8}", "べ":"\u{130BA}", "ぼ": "\u{130BF}",
            "ぱ": '\u{130A1}', "ぴ": "\u{130A5}", "ぷ": "\u{130A9}", "ぺ":"\u{130AB}", "ぽ": "\u{130AE}",
            "ゃ": '\u{130E1}', "ゅ": "\u{130E9}", "ょ": "\u{130EE}", "っ":"\u{13069}",
            "わ": '\u{13120}', "を": "\u{13124}", "ん": "\u{13128}"};


// ※ここにヒエログリフを直接入れてしまうとcodePointでundefinedになる
// サロゲートペアで保存しておく必要あり
// 逆変換用に辞書のkeyとvalueを入れ替える
var swap_j = Object.keys(arr);
var swap_h = Object.values(arr);
var swap_arr = {};
var swap_arr_16 = {};
for(let i = 0; i<swap_j.length; i++){
    var hoge = convertCodeUnits(swap_h[i]);
    swap_arr[hoge] = swap_j[i];
}
// 不要
for(let i = 0; i<swap_j.length; i++){
    var hoge = swap_h[i];
    swap_arr_16[hoge] = swap_j[i];
}

// console.log(Object.keys(arr));
// console.log(Object.keys(swap_arr));
// console.log(swap_arr);
// console.log(swap_arr_16);

// ヒエログリフのサロゲートペアを結合して一つの識別番号とする
function convertCodeUnits(str) {
    const codeUnits = [];
    for (let i = 0; i < str.length; i++) {
        codeUnits.push(str.charCodeAt(i).toString(16));
    }
    const Units = codeUnits.join('');
    return Units;
}



// jtohのテキストエリアのタグ情報取得
var jtoh = document.getElementById('jtoh');

// 入力イベントリスナー(jtoh)
// 素直にひらがなに対応するユニコードを出力すればヒエログリフは出力される
jtoh.addEventListener("input",function(){
    var value_j = document.getElementById('jtoh').value;
    var result_h = document.getElementById('result_h'); 
    result_h.value = "";
    if (value_j.length === 0){
        
    }else if(value_j.length === 1){
        if(!arr[value_j]){
            result_h.value = value_j;
        }else{
            result_h.value = arr[value_j];
        }
    }else if(value_j.length >1){
        cutstr_h(value_j, value_j.length);
    }
  });

function cutstr_h(chars, char_length){
    // console.log("here is cutstr_h");
    // let char = chars.split('');
    for(let i = 0; i < char_length; i++){
        if(!arr[chars[i]]){
            result_h.value += chars[i];
        }else{
            result_h.value += arr[chars[i]];
        }
    }
}


// jtohのテキストエリアのタグ情報取得
var htoj = document.getElementById('htoj');

// 入力イベントリスナー(htoj)
// 素直に出力できないので、サロゲートペアに変換および結合の処理を加える
// ヒエログリフは文字コードの値が大きいので、str.lengthでは正確な値を取得できない
htoj.addEventListener("input",function(){
    var value_h = document.getElementById('htoj').value;
    var result_j = document.getElementById('result_j'); 
    result_j.value = "";

    conv_h = convertCodeUnits(value_h);
    // console.log(conv_h);
    // console.log(conv_h.length);
    if (conv_h.length === 0){
        
    }else if(conv_h >= 1){
        if(!swap_arr[value_h]){
            result_j.value = value_h;
        }else{
            result_j.value = swap_arr[value_h];
        }
    }else if(value_h.length >1){
        cutstr_j(conv_h, conv_h.length);
    }
  });

function cutstr_j(chars, char_length){
    // 文字コードのバグ？d80cdd20 が か80cdd20 になる。
    // 数字として扱ってひらがなを取り出せるようにした。
    var word_j = "";
    var chars_arr = [];
    for(let i=0; i<chars.length;i+=8){
        chars_arr.push(chars.slice(i,i+8));
    }
    // console.log(chars_arr);
    for(let i = 0; i < char_length; i++){
        if(!swap_arr[chars_arr[i]]){
            result_j.value += chars[i];
        }else{
            // console.log(chars_arr[i]);
            word_j += swap_arr[chars_arr[i]];
        }
    }
    // console.log(word_j);
    result_j.value = word_j;
}




