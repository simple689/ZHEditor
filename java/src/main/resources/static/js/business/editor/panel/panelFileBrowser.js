function PanelFileBrowserController() {
}

PanelFileBrowserController.prototype.init = function () {
    // 重写默认Config配置
    angular.module('FileManagerApp').config(['fileManagerConfigProvider', function (config) {
        alert("a");
        var defaults = config.$get();
        config.set({
            appName: 'angular-filemanager',
            defaultLang: 'zh',
            listUrl: '/fileManager/list/',
            uploadUrl: '/fileManager/upload/',
            downloadFileUrl: '/fileManager/preview/',
            createFolderUrl: '/fileManager/createFolder/',
            permissionsUrl: '/fileManager/changePermissions/',
            copyUrl: '/fileManager/copy/',
            moveUrl: '/fileManager/move/',
            removeUrl: '/fileManager/remove/',
            renameUrl: '/fileManager/rename/',
            getContentUrl: '/fileManager/getContent/',
            editUrl: '/fileManager/edit/',
            compressUrl: '/fileManager/compress/',
            extractUrl: '/fileManager/extract/',
            pickCallback: function (item) {
                var msg = 'Picked %s "%s" for external use'
                    .replace('%s', item.type)
                    .replace('%s', item.fullPath());
                window.alert(msg);
            },

            allowedActions: angular.extend(defaults.allowedActions, {
                pickFiles: false,
                pickFolders: false,
                downloadMultiple: false
            }),
            tplPath: 'app/templates'
        });
    }]);
}
