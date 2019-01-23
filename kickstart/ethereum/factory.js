import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe92aeEEBE625F3260f59b38C463f21e34aAB25D5'
);

export default instance;
