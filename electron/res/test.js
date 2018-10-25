function CrawlService() {
}
// CrawlService.prototype.start = function () {
//     console.log("c");
// }
// module.exports = CrawlService;

(function () {
    var js_module = typeof module === 'object' && module.exports;
    if (js_module) {
        console.log("a");
        module.exports = CrawlService;
    }
})();

// document.write(process.versions.node)
