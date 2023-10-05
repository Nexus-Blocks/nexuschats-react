import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory } from "../declarations/chat";
import { Principal } from "@dfinity/principal";
import icblast from "@infu/icblast";

// let ic = icblast({ local: true });

// export const chatActor = await ic("bkyz2-fmaaa-aaaaa-qaaaq-cai");

let isProd = false;

const canisterId = Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai");

const HOST = isProd
  ? `https://${canisterId}.icp0.io/`
  : "http://127.0.0.1:4943/";

const agent = new HttpAgent({
  host: HOST,
});

agent.fetchRootKey().catch((err) => {
  console.warn(
    "Unable to fetch root key. Check to ensure that your local replica is running"
  );
  console.error(err);
});

export const chatActor = Actor.createActor(idlFactory, {
  agent: agent,
  canisterId,
});
