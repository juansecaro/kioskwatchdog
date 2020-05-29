

async function logOnErrorOccurred(details) {

  await sleep(5000); // 0 s
  let CurrentTab = browser.tabs.getCurrent();
  let reloading = browser.tabs.reload(CurrentTab.id, {bypassCache: true});
  reloading.then(onReloaded, onError);

  console.log(`onErrorOccurred: ${details.url}`);
  console.log(details.error);
}

function onReloaded(){
  console.log("dit it");
}
function onError(){
  console.log("failed");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


browser.webNavigation.onErrorOccurred.addListener(logOnErrorOccurred);
