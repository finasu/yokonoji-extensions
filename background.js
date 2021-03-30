chrome.runtime.onInstalled.addListener(function () {
  // ルールをクリア
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    // ルールを追加
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        // 実行可能なページのドメインを指定
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'coinmarketcap.com' },
        })
      ],
      actions: [
        // 実行するアクションを指定
        new chrome.declarativeContent.ShowPageAction()
      ]
    }]);
  });
});

// content_script.js にメッセージを送る
chrome.pageAction.onClicked.addListener(function () {
  // 現在のウィンドウのアクティブなタブ
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // そのタブ id を指定して isClicked: true を送る
    chrome.tabs.sendMessage(tabs[0].id, { isClicked: true }, function (response) {
      // content_script.js の onMessage からのレスポンスを表示
      console.log(response)
    });
  });
});
