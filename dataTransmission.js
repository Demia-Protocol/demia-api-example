const axios = require('axios');
const { baseUrl, msg_address } = require('./constants');
const {makeMockSensorData, DataSendRequest, NestedDataSendRequest} = require("./util");

const dataTransmission = async (token, site_id, molinaProject, msgNo) => {
    try {
        let [topic, data] = makeMockSensorData(molinaProject, msgNo);
        let dataRequest = molinaProject ?
            new DataSendRequest(
                site_id,
                topic,
                data
            ) : new NestedDataSendRequest(
                site_id,
                topic,
                data,
                true
            );

        const response = await axios.post(`${baseUrl}/api/context/data/send`, dataRequest, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Data transmission response: ", response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting data transmission:', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = dataTransmission;
