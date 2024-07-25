const ethers = require('ethers');
const fs = require('fs');
// const Tx = require("ethereumjs-tx"); // 这个版本一定要1.3.7
const BigNumber = require("bignumber.js");
const abi = JSON.parse(fs.readFileSync("./abis/abi"));
const provider = new ethers.getDefaultProvider('https://arb1.arbitrum.io/rpc');
const privateKey = "";
const wallet = new ethers.Wallet(privateKey, provider);
const ContractAddr = '0x7352188979857675C3aD1AA6662326ebD6DDBf6d';
const contract = new ethers.Contract(ContractAddr, abi, provider);
const contractWithSigner = contract.connect(wallet);

module.exports = {
    amint: async (req, res) => {
        let tx = await contractWithSigner.mint("0xFd0Cc11A9ffbA29F7db7734b6dc39b1e5212Bb1c", "100000000000000000000");
        console.log("---------3---------");
        console.log("aquoteSend:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    },
    // send: async (req, res) => {
    //     let sendParam = {
    //         dstEid: 40126,
    //         to: "0xFd0Cc11A9ffbA29F7db7734b6dc39b1e5212Bb1c",
    //         amountLD: 10,
    //         minAmountLD: 0,
    //         extraOptions: "0x",
    //         composeMsg: "",
    //         oftCmd: "",
    //     };
    //     let fee = {
    //         nativeFee: 
    //     }
    //     let tx = await contractWithSigner.send(sendParam);

    // }

    aquoteSend: async (req, res) => {
        // let overrides = {
        //     value: "600000000000000",
        // };
        console.log("---------1---------");
        let _sendParam = {
            dstEid: 40126,
            to: "0x000000000000000000000000Fd0Cc11A9ffbA29F7db7734b6dc39b1e5212Bb1c",
            amountLD: "1000000000000000000",
            minAmountLD: "1000000000000000000",
            extraOptions: "0x",
            composeMsg: "0x",
            oftCmd: "0x",
        };
        console.log("---------2---------");
        let tx = await contractWithSigner.quoteSend(_sendParam, false);
        console.log("---------3---------");
        console.log("aquoteSend:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    },

    asetPeer: async (req, res) => {
        let tx = await contractWithSigner.setPeer(40126, "0x00000000000000000000000042358BE1Ff7964B1eD57897a82071AEE47E38693");
        console.log("asetPeer:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    },

    aisPeer: async (req, res) => {
        let tx = await contractWithSigner.isPeer(40126, "0x00000000000000000000000042358BE1Ff7964B1eD57897a82071AEE47E38693");
        console.log("isPeer:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    },

    asetEnforcedOptions: async (req, res) => {
        let _enforcedOptions1 = {
            eid: 40126, 
            msgType: 2, 
            options: "0x0003010011010000000000000000000000000000ea60",
        };
        let _enforcedOptions2 = {
            eid: 40126, 
            msgType: 1, 
            options: "0x0003010011010000000000000000000000000000ea60",
        };
        let tx = await contractWithSigner.setEnforcedOptions([_enforcedOptions1, _enforcedOptions2]);
        console.log("setEnforcedOptions:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    }
}