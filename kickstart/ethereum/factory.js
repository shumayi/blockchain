import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x25ff1aD1a4829B931014195BedB0B368D9F6Ab88'
);

export default instance;
