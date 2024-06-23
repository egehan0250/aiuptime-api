const axios = require("axios");

/*

   ___   ______  _____  ____________  _______    ___   ___  ____
  / _ | /  _/ / / / _ \/_  __/  _/  |/  / __/___/ _ | / _ \/  _/
 / __ |_/ // /_/ / ___/ / / _/ // /|_/ / _//___/ __ |/ ___// /  
/_/ |_/___/\____/_/    /_/ /___/_/  /_/___/   /_/ |_/_/  /___/  
                                                                

*/

// Please don't remove this code, it's for the uptimeDealerAPI class to work.

class uptimeDealerAPI {
  constructor(options) {
    this.key = options.key;
    this.api = "https://aiuptime.net/api/v1";
  }

  async test() {
    try {
      let res = await axios.post(this.api, {
        key: this.key,
        action: "test",
      });
      if (res.data.status == "error" || res.data.success == false) {
        throw new Error(
          `Error Code: ${res.data.code} Message: ${res.data.message} - ${res.data.errorMesssage}`
        );
      }
      return res.data;
    } catch (error) {
      throw new Error(error);
      return { status: "error", error: error };
    }
  }

  async createMonitor({ name, url, description }) {
    try {
      let res = await axios.post(this.api, {
        key: this.key,
        action: "createMonitor",
        name: name,
        url: url,
        description: description,
      });
      if (res.data.status == "error" || res.data.success == false) {
        throw new Error(
          `Error Code: ${res.data.code} Message: ${res.data.message} - ${res.data.errorMesssage}`
        );
      }
      return res.data;
    } catch (error) {
      throw new Error(error);
      return { status: "error", error: error };
    }
  }

  async deleteMonitor({ monitorID, url }) {
    // monitorID or url
    try {
      let res = await axios.post(this.api, {
        key: this.key,
        action: "deleteMonitor",
        monitorID: monitorID,
        url: url,
      });
      if (res.data.status == "error" || res.data.success == false) {
        throw new Error(
          `Error Code: ${res.data.code} Message: ${res.data.message} - ${res.data.errorMesssage}`
        );
      }
      return res.data;
    } catch (error) {
      throw new Error(error);
      return { status: "error", error: error };
    }
  }

  async getMonitors() {
    try {
      let res = await axios.post(this.api, {
        key: this.key,
        action: "getMonitors",
      });
      if (res.data.status == "error" || res.data.success == false) {
        throw new Error(
          `Error Code: ${res.data.code} Message: ${res.data.message} - ${res.data.errorMesssage}`
        );
      }
      return res.data;
    } catch (error) {
      throw new Error(error);
      return { status: "error", error: error };
    }
  }

  async getMonitor({ monitorID, url }) {
    // monitorID or url
    try {
      let res = await axios.post(this.api, {
        key: this.key,
        action: "getMonitor",
        monitorID: monitorID,
        url: url,
      });
      if (res.data.status == "error" || res.data.success == false) {
        throw new Error(
          `Error Code: ${res.data.code} Message: ${res.data.message} - ${res.data.errorMesssage}`
        );
      }
      return res.data;
    } catch (error) {
      throw new Error(error);
      return { status: "error", error: error };
    }
  }

  async updateMonitor({ monitorID, url, name, description }) {
    // monitorID or url
    try {
      let res = await axios.post(this.api, {
        key: this.key,
        action: "monitorUpdate",
        monitorID: monitorID,
        url: url,
        name: name,
        description: description,
      });
      if (res.data.status == "error" || res.data.success == false) {
        throw new Error(
          `Error Code: ${res.data.code} Message: ${res.data.message} - ${res.data.errorMesssage}`
        );
      }
      return res.data;
    } catch (error) {
      throw new Error(error);
      return { status: "error", error: error };
    }
  }

  async changeMonitorStatus({ monitorID, url, status, statusType }) {
    // monitorID or url
    try {
      let res = await axios.post(this.api, {
        key: this.key,
        action: "changeStatus",
        monitorID: monitorID,
        url: url,
        status: status,
        statusType: statusType,
      });
      if (res.data.status == "error" || res.data.success == false) {
        throw new Error(
          `Error Code: ${res.data.code} Message: ${res.data.message} - ${res.data.errorMesssage}`
        );
      }
      return res.data;
    } catch (error) {
      throw new Error(error);
      return { status: "error", error: error };
    }
  }
}

module.exports = uptimeDealerAPI;

/*

   ___   ______  _____  ____________  _______    ___   ___  ____
  / _ | /  _/ / / / _ \/_  __/  _/  |/  / __/___/ _ | / _ \/  _/
 / __ |_/ // /_/ / ___/ / / _/ // /|_/ / _//___/ __ |/ ___// /  
/_/ |_/___/\____/_/    /_/ /___/_/  /_/___/   /_/ |_/_/  /___/  
                                                                

*/
