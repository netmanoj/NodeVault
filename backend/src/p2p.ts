import { createLibp2p } from "libp2p";
import { webSockets } from "@libp2p/websockets";
import { noise } from "@libp2p/noise";
import { mplex } from "@libp2p/mplex";

async function startP2P() {
  const node = await createLibp2p({
    transports: [webSockets()],
    connectionEncryption: [noise()],
    streamMuxers: [mplex()],
  });

  console.log(`P2P node started with address: ${node.peerId}`);
}

startP2P();
