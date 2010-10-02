function createDownloadButton(data) {
    var controlContainer = findControlContainer("clipControls");
    
    var controlBtn = document.createElement("div");
    controlBtn.setAttribute("class", "clipControlsBtn");

    var downloadUrl = document.createElement("a");
    downloadUrl.setAttribute("href", data.match(/&videoFile=(.*)+&/)[1])

    var downloadImage = document.createElement("img");
    downloadImage.setAttribute("src", "chrome-extension://odiojghccdmmchgjgklkacpfppodidod/img/download.png");
    downloadImage.setAttribute("alt", "Свали");
    downloadImage.setAttribute("title", "Свали");

    downloadUrl.appendChild(downloadImage);
    controlBtn.appendChild(downloadUrl);
    controlContainer.appendChild(controlBtn);
}

function findControlContainer(classname) {
    var divs = document.getElementsByTagName("div");
    
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].className == classname) {
            return divs[i];
        }
    }
    
    return null;
}

if(/http\:\/\/vbox7.com\/play\:\w+/.test(document.location.href)) {
    chrome.extension.sendRequest({'action': 'fetchVideoUrl', 
                                  'videoId': document.location.href.split(":")[2]}, 
                                  createDownloadButton);
}
