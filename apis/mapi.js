const ethers = require('ethers');
const fs = require('fs');
// const Tx = require("ethereumjs-tx"); // 这个版本一定要1.3.7
const BigNumber = require("bignumber.js");
const abi = JSON.parse(fs.readFileSync("./abis/abi"));
const provider = new ethers.getDefaultProvider('https://rpc.api.moonbase.moonbeam.network');
const privateKey = "";
const wallet = new ethers.Wallet(privateKey, provider);
const ContractAddr = '0x42358BE1Ff7964B1eD57897a82071AEE47E38693';
const contract = new ethers.Contract(ContractAddr, abi, provider);
const contractWithSigner = contract.connect(wallet);

module.exports = {
    mmint: async (req, res) => {
        let tx = await contractWithSigner.mint("0xFd0Cc11A9ffbA29F7db7734b6dc39b1e5212Bb1c", "100000000000000000000");
        console.log("---------3---------");
        console.log("aquoteSend:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    },

    msend: async  (req, res) => {
        let _sendParam = {
            dstEid: 30110,
            to: "0x000000000000000000000000Fd0Cc11A9ffbA29F7db7734b6dc39b1e5212Bb1c",
            amountLD: "10000000000000000000",
            minAmountLD: "1000000000000000000",
            extraOptions: "0x",
            composeMsg: "0x01",
            oftCmd: "0x",
        };

        let fee = {
            nativeFee: "300000",
            lzTokenFee: "60000",
        }

        let tx = await contractWithSigner.send(_sendParam, fee, "0xFd0Cc11A9ffbA29F7db7734b6dc39b1e5212Bb1c");

        console.log("balanceOf:" + tx + "\n");
    },

    mquoteSend: async (req, res) => {
        let _sendParam = {
            dstEid: 30110,
            to: "0x000000000000000000000000Fd0Cc11A9ffbA29F7db7734b6dc39b1e5212Bb1c",
            amountLD: "10000000000000000000",
            minAmountLD: "1000000000000000000",
            extraOptions: "0x",
            composeMsg: "0x01",
            oftCmd: "0x",
        };
        let tx = await contractWithSigner.quoteSend(_sendParam, false);
        console.log("quoteSend:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    },

    msetPeer: async (req, res) => {
        let tx = await contractWithSigner.setPeer(30110, "0x0000000000000000000000007352188979857675C3aD1AA6662326ebD6DDBf6d");
        console.log("setPeer:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    },

    misPeer: async (req, res) => {
        let tx = await contractWithSigner.isPeer(30110, "0x0000000000000000000000007352188979857675C3aD1AA6662326ebD6DDBf6d");
        console.log("isPeer:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    },
    
    msetEnforcedOptions: async (req, res) => {
        let _enforcedOptions1 = {
            eid: 30110, 
            msgType: 2, 
            options: "0x0003010011010000000000000000000000000000ea60",
        };
        let _enforcedOptions2 = {
            eid: 30110, 
            msgType: 2, 
            options: "0x0003010011010000000000000000000000000000ea60",
        };
        let tx = await contractWithSigner.setEnforcedOptions([_enforcedOptions1, _enforcedOptions2]);
        console.log("setEnforcedOptions:" + tx + "\n");
        res.json({
            "msg": "ok"
        });
    }
}