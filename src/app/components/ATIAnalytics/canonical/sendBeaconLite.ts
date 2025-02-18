const sendBeaconLite = (atiPageViewUrlString: string) => `
    function sendBeaconLite (atiPageViewUrlString) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", atiPageViewUrlString, false);
        xhr.withCredentials = true;
        xhr.send();
    }
    
    sendBeaconLite("${atiPageViewUrlString}");
`;

export default sendBeaconLite;
