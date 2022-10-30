window.viewerModel = JSON.parse(document.getElementById('wix-viewer-model').textContent)
    window.fetchDynamicModel = () => (window.viewerModel.siteFeaturesConfigs.sessionManager.isRunningInDifferentSiteContext ?  Promise.resolve({}) : fetch(window.viewerModel.dynamicModelUrl, { credentials: 'same-origin' }).then(function(r){if(!r.ok)throw new Error(`[${r.status}]${r.statusText}`);return r.json()}))
    window.dynamicModelPromise = window.fetchDynamicModel()
    window.commonConfig = viewerModel.commonConfig
