
export const GLOBAL_PROPERTIES = Object.freeze({
    BASE_API_URL: 'http://ec2-18-216-185-118.us-east-2.compute.amazonaws.com:3000/',
    FE_SESSIONID_PREFIX: 'ECOM',
    REQUEST_TIMEOUT: 60,
    CHANNEL: 'ANDROID',
    CLIENTID: '11'
});

export const API_ACTIONS = Object.freeze({
    login: {
        loginUser: 'user/login',
        fetchConfig: 'fetchConfig.json',
        verifyOtp: 'ecomVerifyOtp.action',
        verifymPin: 'ecomVerifyMpin.action'
    },
    summary: {
        savecardsInitiate: 'encryptedEcomStoredCards.action',
        doTransaction: 'ecomDoTxn.action'
    },
    configuration: {
        loginConfig: 'config',
        userConfig: 'userConfig'
    },
    common: {
        getHash: 'getEcomHash.action',
        doCancel: 'ecomDoCancel.action'
    },
    mPin: {
        verifyUserDetails: 'ecomResetMpin.action',
        changeMpin: 'ecomChangeMpin.action'
    },
    register: {
        registerUser: 'ecomRegisterUser.action'
    },
    raw_material:{
        plant : 'plant',
        record:'record',
        supplier : 'supplier',
        broker:"broker",
        product:'product',
        samplepreparation:'SamplePreparation',
        rawmaterial:"rawMaterial"
    }
});