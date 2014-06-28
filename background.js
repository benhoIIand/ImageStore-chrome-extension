function upload(info) {
    chrome.storage.sync.get(function(items) {
        chrome.tabs.create({
            url: items.uploadUrl.replace('{URL}', info.srcUrl)
        });
    });
}

chrome.contextMenus.create({
    title: "Upload to ImageStore",
    contexts: ["image"],
    "onclick": upload
});
