// background.jsからメッセージを受け取る
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // 受け取った isClicked の内容を表示
  console.log(message.isClicked);

  // メッセージを受け取った時の処理
  // let beforetext = document.getElementById('source-dummydiv').textContent
  // let aftertext = document.getElementById('target-dummydiv').textContent
  // let textarea = document.createElement('textarea')
  // textarea.textContent = aftertext + '\n' + beforetext
  // let box = document.getElementById('dl_translator')
  // box.appendChild(textarea)
  // textarea.select()
  // document.execCommand('copy')
  // box.removeChild(textarea)

  // background.js の background.js にレスポンスを返す
  sendResponse('onMessageがメッセージを受け取りました');
});
