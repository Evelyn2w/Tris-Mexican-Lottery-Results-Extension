document.addEventListener('DOMContentLoaded', function() {

    chrome.runtime.sendMessage({
        action: "fetchData",
        url: 'https://resultadodeltrisdehoy.com/includes/scripts.php?type=get_latest_results',
        data: {}
    }, function(response) {
        document.getElementById('loader').style.display = 'none';
        if (response.success) {
            parsedSuccess(response)
        } else {
            document.getElementById('downloadArea').innerText = 'Error: ' + response.error;
        }
    });
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
function parsedSuccess(response) {
    console.log(response.data.data)
    document.getElementById('downloadArea').innerHTML = response.data.data;
}