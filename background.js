chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchData") {
    fetch(request.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: request.data
    })
        .then(response => response.json())
.then(data => sendResponse({success: true, data: data}))
.catch(error => sendResponse({success: false, error: error.message}));
    return true; // Indicates that the response will be sent asynchronously
}
});