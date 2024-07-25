const express = require('express');
const app = new express();
const call = require('../apis/api');
const mcall = require('../apis/mapi');
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.use(router);
// router.get('/name', call.name);
// router.get('/balanceOf', call.balanceOf);
router.get('/aquoteSend', call.aquoteSend);
router.get('/asetPeer', call.asetPeer);
router.get('/aisPeer', call.aisPeer);
router.get('/amint', call.amint);
router.get('/asetEnforcedOptions', call.asetEnforcedOptions);

router.get('/mquoteSend', mcall.mquoteSend);
router.get('/msetPeer', mcall.msetPeer);
router.get('/misPeer', mcall.misPeer);
router.get('/mmint', mcall.mmint);
router.get('/msend', mcall.msend);
router.get('/msetEnforcedOptions', mcall.msetEnforcedOptions);

app.listen(7070, '127.0.0.1', () => console.log("正在监听端口"));