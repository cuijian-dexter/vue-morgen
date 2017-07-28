export function dMap(ak) {
        return new Promise(function (resolve, reject) {
            window.init = function () {
            resolve(BMap)
        }
        function addScript(src){
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = src;
            script.onerror = reject;
            return script;
        }
        document.head.appendChild(addScript("http://api.map.baidu.com/api?v=2.0&ak="+ak+"&callback=init"));
        // document.head.appendChild(addScript("http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js"));
    })
}