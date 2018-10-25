function CrawlService() {
}

(function () {
    var js_module = typeof module === 'object' && module.exports;
    if (js_module) {
        console.log("a");
        module.exports = CrawlService;
    }
})();

// document.write(process.versions.node)
