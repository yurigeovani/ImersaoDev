function playVideo (e) {
    const video = document.getElementById("divVideo");
    video.innerHTML = "<video src=\"/videos/" + e + ".mp4\" controls autoplay></video>";
}