# AIuptime API

```js
let uptimeAPI = new uptimeDealerAPI({ key: 'API KEY', api: 'https://api.aiuptime.net/v1' });

    let test = await uptimeAPI.test();
    let createMonitor = await uptimeAPI.createMonitor({ name: 'Test Monitor', url: 'https://www.aiuptime.net', description: 'This is a test monitor' });

    //deleteMonitor by monitor URL
    let deleteMonitor = await uptimeAPI.deleteMonitor({ url: 'https://aiuptime.net' }); 

    //deleteMonitor by monitor ID
    let deleteMonitor = await uptimeAPI.deleteMonitor({ monitorID: '3862852262479916500' });

    let getMonitors = await uptimeAPI.getMonitors();

    //getMonitor by monitor URL
    let getMonitor = await uptimeAPI.getMonitor({ url: 'https://www.aiuptime.net' });

    //getMonitor by monitor ID
    let getMonitor = await uptimeAPI.getMonitor({ monitorID: '7219057736083927000' });

    //monitorUpdate by monitor URL
    let monitorUpdate = await uptimeAPI.updateMonitor({ name: 'Test', url: 'https://www.aiuptime.net', description: 'This is a test monitor' });

    //monitorUpdate by monitor ID
    let monitorUpdate = await uptimeAPI.updateMonitor({ monitorID: '7219057736083927000', name: 'Test', description: 'This is a test monitor', url: 'https://www.aiuptime.net' });

    //changeStatus by monitor URL (statusType: status or maintenance)
    let changeStatus = await uptimeAPI.changeMonitorStatus({ url: 'https://www.aiuptime.net', status: true, statusType: 'status' });

    //changeStatus by monitor ID (statusType: status or maintenance)
    let changeStatus = await uptimeAPI.changeMonitorStatus({ monitorID: '7219057736083927000', status: false, statusType: 'maintenance' });
```
# 🎈 Images 🎈

![Prew](https://github.com/user-attachments/assets/6708300e-27db-4e12-833a-bd967dbb5608)

---
- ✨ [For Support](https://github.com/sponsors/egehan0250) <br>
- 💕 [Discord](https://aiuptime.net/discord)<br>
- 🏓 [AIuptime](https://aiuptime.net/)<br>
- ☄️ [Click For Contact](mailto:support@aiuptime.net)<br>

# 🎯 License 🎯
- ⚖️ Its protected by Creative Commons ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/))

<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" title="BYNCSA40"><img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"></a>
