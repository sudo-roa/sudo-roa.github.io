var i = 0;
var j = 0;
var k = 0;
var l = 0;
var startState = 0;
var header = document.querySelector('header');
var body = document.querySelector('body'); //bodyはこれがなくてもいける？
var footer = document.querySelector('footer');

function main(){
  initialState();
}

function initialState(){
  const wrapper = document.createElement('div');
  const form = document.createElement('form');
  const title = document.createElement('p');
  const input = document.createElement('input');
  const inputBtn = document.createElement('button');
  const output = document.createElement('button');
  wrapper.setAttribute("id", "wrapper");
  form.setAttribute("action", "#");
  form.setAttribute("id", "initialInput");
  title.textContent = "マンダラートを作成する";
  input.setAttribute("type","text");
  input.setAttribute("placeholder", "キーワードを入力");
  input.setAttribute("id", "inputMainTarget")
  inputBtn.setAttribute("onclick", "startMandalat(hiddenTable)");
  inputBtn.textContent = "はじめる";
  // そのうち出力昨日を追加
  output.setAttribute("id","output");
  output.textContent = "作成したマンダラートを出力する"
  body.appendChild(wrapper);
  header.appendChild(form);
  document.querySelector('form').appendChild(title);
  document.querySelector('form').appendChild(input);
  document.querySelector('form').appendChild(inputBtn);
  document.querySelector('form').appendChild(output);
}

// 親要素の表、子要素の表全てを作って、子要素はvisibility:hiddenにする
function startMandalat(hiddenTable){
  if(startState===0){
    setTimeout(function(){
      const makeParentTable = document.createElement('table');
      makeParentTable.setAttribute("id","parentTable") ;
      for(i=1;i<4;i++){ //forループはちゃんと記述通りの順番で動いてくれるみたい？
        var tr = document.createElement('tr'); //何回も要素作成してあげないとうまくいかないみたい
        for(j=1;j<4;j++){ //trの要素に3つのtdをつけていく
          var td = document.createElement('td');
          for(k=1;k<2;k++){
            var makeChildTable = document.createElement('table');
            var targetNumber = "target"+i+j;
            makeChildTable.setAttribute("id", targetNumber);
            makeChildTable.setAttribute("class","childTable");
            for(l=1;l<4;l++){
              var childTr = document.createElement('tr');
              for(m=1;m<4;m++){
                var childTd = document.createElement('td');
                var textarea = document.createElement('input');
                textarea.setAttribute("class","textarea");
                textarea.setAttribute("type","textarea");
                if(i===2 && j===2){
                  var innerObjectNumber = "innerObject"+l+m;
                  textarea.setAttribute("id", innerObjectNumber);
                  if(l===2 && m===2){
                    console.log("スルーします");
                  }
                }
                // textarea.setAttribute("","");
                // textarea.setAttribute("","");
                // var textarea = document.createElement('textarea');
                // textarea.setAttribute("class","textarea");
                // textarea.setAttribute("placeholder","入力してください");
                // textarea.setAttribute("rows","3");
                // textarea.setAttribute("cols","17");
                if(l===2 && m===2){
                  var objectNumber = "object"+i+j;
                  textarea.setAttribute("id", objectNumber);
                  textarea.readOnly = true;
                  if(i===2 && j===2){
                    textarea.setAttribute("id", "mainTarget");
                    textarea.value= document.getElementById('inputMainTarget').value;
                  }
                }
                var objectForm = document.createElement('form');
                objectForm.setAttribute("method", "post");
                objectForm.setAttribute("action", "");
                objectForm.appendChild(textarea);
                childTd.appendChild(objectForm);
                childTr.appendChild(childTd);
              }
              makeChildTable.setAttribute("border","1");
              makeChildTable.appendChild(childTr);
            }
            td.appendChild(makeChildTable);
          }
          td.setAttribute("id", "cell"+i+j);
          tr.appendChild(td);
        }
        makeParentTable.appendChild(tr);
      }
      document.getElementById('wrapper').appendChild(makeParentTable);
      makeParentTable.setAttribute("border", "10");
      startState = 1;
      hiddenTable();  
    },200);
  }else{
    chengeMainTarget();
  }
}

function chengeMainTarget(){
  const button = document.querySelector('#inputMainTarget');
  const mainTarget =  document.getElementById('mainTarget');
  mainTarget.value = button.value;
}

function hiddenTable(){
  for(i=1;i<4;i++){ 
    for(j=1;j<4;j++){
      if(i===2 && j===2 ){
      }else{
        var targetIds = "target"+i+j;
        var target = document.getElementById(targetIds); 
        target.style.visibility = "hidden";
        changeObject();
      }
    }
  }      
}


function changeObject(){
  var innerObject11 = document.querySelector('#innerObject11');
  var innerObject12 = document.querySelector('#innerObject12');
  var innerObject13 = document.querySelector('#innerObject13');
  var innerObject21 = document.querySelector('#innerObject21');
  var innerObject23 = document.querySelector('#innerObject23');
  var innerObject31 = document.querySelector('#innerObject31');
  var innerObject32 = document.querySelector('#innerObject32');
  var innerObject33 = document.querySelector('#innerObject33');
  var object11 = document.querySelector('#object11');
  var object12 = document.querySelector('#object12');
  var object13 = document.querySelector('#object13');
  var object21 = document.querySelector('#object21');
  var object23 = document.querySelector('#object23');
  var object31 = document.querySelector('#object31');
  var object32 = document.querySelector('#object32');
  var object33 = document.querySelector('#object33');

  innerObject11.addEventListener("input",function(){
    var Target = document.getElementById('target11'); 
    Target.style.visibility = "visible";
    object11.value = innerObject11.value;
  });
  innerObject12.addEventListener("input",function(){
    var Target = document.getElementById('target12'); 
    Target.style.visibility = "visible";
    object12.value = innerObject12.value;
  });
  innerObject13.addEventListener("input",function(){
    var Target = document.getElementById('target13'); 
    Target.style.visibility = "visible";
    object13.value = innerObject13.value;
  });
  innerObject21.addEventListener("input",function(){
    var Target = document.getElementById('target21'); 
    Target.style.visibility = "visible";
    object21.value = innerObject21.value;
  });
  innerObject23.addEventListener("input",function(){
    var Target = document.getElementById('target23'); 
    Target.style.visibility = "visible";
    object23.value = innerObject23.value;
  });
  innerObject31.addEventListener("input",function(){
    var Target = document.getElementById('target31'); 
    Target.style.visibility = "visible";
    object31.value = innerObject31.value;
  });
  innerObject32.addEventListener("input",function(){
    var Target = document.getElementById('target32'); 
    Target.style.visibility = "visible";
    object32.value = innerObject32.value;
  });
  innerObject33.addEventListener("input",function(){
    var Target = document.getElementById('target33'); 
    Target.style.visibility = "visible";
    object33.value = innerObject33.value;
  });
}



main();
