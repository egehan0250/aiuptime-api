const uptimeDealerAPI = require('aiuptime-api');

(async () => {
    let uptimeAPI = new uptimeDealerAPI({ key: 'API KEY', api: 'https://aiuptime.net/api/v1' });

//     let test = await uptimeAPI.test();
//     let createMonitor = await uptimeAPI.createMonitor({ name: 'Test Monitor', url: 'https://www.aiuptime.net', description: 'This is a test monitor' });

//     //deleteMonitor by monitor URL
//     let deleteMonitor = await uptimeAPI.deleteMonitor({ url: 'https://aiuptime.net' }); 

//     //deleteMonitor by monitor ID
//     let deleteMonitor = await uptimeAPI.deleteMonitor({ monitorID: '3862852262479916500' });

//     let getMonitors = await uptimeAPI.getMonitors();

//     //getMonitor by monitor URL
//     let getMonitor = await uptimeAPI.getMonitor({ url: 'https://www.aiuptime.net' });

//     //getMonitor by monitor ID
//     let getMonitor = await uptimeAPI.getMonitor({ monitorID: '7219057736083927000' });

//     //monitorUpdate by monitor URL
//     let monitorUpdate = await uptimeAPI.updateMonitor({ name: 'Test', url: 'https://www.aiuptime.net', description: 'This is a test monitor' });

//     //monitorUpdate by monitor ID
//     let monitorUpdate = await uptimeAPI.updateMonitor({ monitorID: '7219057736083927000', name: 'Test', description: 'This is a test monitor', url: 'https://www.aiuptime.net' });

//     //changeStatus by monitor URL (statusType: status or maintenance)
//     let changeStatus = await uptimeAPI.changeMonitorStatus({ url: 'https://www.aiuptime.net',  status: true, statusType: 'status' });

//     //changeStatus by monitor ID (statusType: status or maintenance)
//     let changeStatus = await uptimeAPI.changeMonitorStatus({ monitorID: '7219057736083927000', status: false, statusType: 'maintenance' });

})();