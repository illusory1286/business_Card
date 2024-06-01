function resetGif() {
    var gif = document.getElementById('gifRE');
    var src = gif.src;
    gif.src = ''; // 清空 src
    gif.src = src; // 重新設置 src 以重新加載 GIF
}
// 設置每 5 秒重新加載一次 GIF
setInterval(resetGif, 1500);
