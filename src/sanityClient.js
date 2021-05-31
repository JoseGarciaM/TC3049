const sanityClient = require('@sanity/client');
const {sanityClientConfig} = require('../sanityClientConfig');

export default sanityClient(sanityClientConfig);
