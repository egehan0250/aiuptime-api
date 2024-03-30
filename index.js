const uptimeDealerAPI = require('./app.js');
(async () => {
    let uptimeAPI = new uptimeDealerAPI({ key: 'YOUR KEY HERE', log: true, });
    let test = await uptimeAPI.test();
    console.log(test);
})();