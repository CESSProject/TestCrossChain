import { EndpointId } from '@layerzerolabs/lz-definitions'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const moonbaseContract: OmniPointHardhat = {
    eid: EndpointId.MOONBEAM_V2_TESTNET,
    contractName: 'MyOFT',
}

const arbitrumContract: OmniPointHardhat = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'MyOFT',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: moonbaseContract,
        },
        {
            contract: arbitrumContract,
        },
    ],
    connections: [
        {
            from: moonbaseContract,
            to: arbitrumContract,
            config: {
                sendLibrary: "0x6EDCE65403992e310A62460808c4b910D972f10f",
                receiveLibraryConfig: {
                    receiveLibrary: "0x6EDCE65403992e310A62460808c4b910D972f10f",
                    gracePeriod: BigInt(0),
                },
            }
        },
        {
            from: arbitrumContract,
            to: moonbaseContract,
            config: {
                sendLibrary: "0x6EDCE65403992e310A62460808c4b910D972f10f",
                receiveLibraryConfig: {
                    receiveLibrary: "0x6EDCE65403992e310A62460808c4b910D972f10f",
                    gracePeriod: BigInt(0),
                },
            }
        },
    ],
}

export default config
