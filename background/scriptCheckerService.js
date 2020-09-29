export default class ScriptCheckerService {
  constructor() {
    this.baseInjectionUrl = 'https://google.com/test-url'
    this.onTabUpdated = this.onTabUpdated.bind(this);
    this.initializeListeners();
  }

  initializeListeners() {
    chrome.tabs.onUpdated.addListener(this.onTabUpdated);
  }

  onTabUpdated(tabId, changeInfo) {
    console.log("change Info", changeInfo);
    const { url, status } = changeInfo;

    if (url) {
      this.checkInjectionUrl(url, tabId);
    } else if (status === 'complete') {
      chrome.tabs.get(tabId, (tab) => {
        console.log("Tab checking, ", tab)
        this.checkInjectionUrl(tab.url, tabId);
      });
    }
  }

  checkInjectionUrl(url = null, tabId = null) {
    console.log("Checking Tab, ", url);
    console.log("tabId, ", tabId);


    const tabUrl = document.createElement('a');
    tabUrl.href = url;

    const injectionUrl = document.createElement('a');
    injectionUrl.href = this.baseInjectionUrl;
    debugger
    if (tabUrl.hostname === injectionUrl.hostname) {
      console.log("URL match, inject");
      chrome.tabs.get(tabId, () => {
          return chrome.tabs.executeScript(tabId, { file: 'content-script.js' });
      });
    }
  }
}
