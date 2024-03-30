const axios = require('axios');

/*

   ___   ______  _____  ____________  _______    ___   ___  ____
  / _ | /  _/ / / / _ \/_  __/  _/  |/  / __/___/ _ | / _ \/  _/
 / __ |_/ // /_/ / ___/ / / _/ // /|_/ / _//___/ __ |/ ___// /  
/_/ |_/___/\____/_/    /_/ /___/_/  /_/___/   /_/ |_/_/  /___/  
                                                                

*/

class uptimeDealerAPI {
    constructor(options) {
        this.log = options.log || false;
        this.key = options.key;
        this.api = 'https://aiuptime.net/api/v1';
    }

    async test() {

        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: 'test'
                });
                if (res.data.status == 'error' || res.data.success == false) {
                    throw new Error(`Error Code: ${res.data.code} Message: ${res.data.message} - ${res.data.errorMesssage}`);
                }
                return res.data;
        } catch (error) {
            throw new Error(error);
            return { status: 'error', error: error };
        }
    };
                
}

module.exports = uptimeDealerAPI;

/*

   ___   ______  _____  ____________  _______    ___   ___  ____
  / _ | /  _/ / / / _ \/_  __/  _/  |/  / __/___/ _ | / _ \/  _/
 / __ |_/ // /_/ / ___/ / / _/ // /|_/ / _//___/ __ |/ ___// /  
/_/ |_/___/\____/_/    /_/ /___/_/  /_/___/   /_/ |_/_/  /___/  
                                                                

*/
