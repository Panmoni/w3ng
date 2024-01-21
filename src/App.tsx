import type { Component } from "solid-js";
import { createSignal } from "solid-js";

const App: Component = () => {
  const [name, setName] = createSignal("");

  const adjectives = [
    "Decentralized",
    "Immutable",
    "Transparent",
    "Trustless",
    "Peerless",
    "Autonomous",
    "Digital",
    "Virtual",
    "Secure",
    "Global",
    "Distributed",
    "Revolutionary",
    "Innovative",
    "Disruptive",
    "Scalable",
  ];

  const nouns = [
    "Ledger",
    "Contract",
    "Protocol",
    "Network",
    "Currency",
    "Asset",
    "Exchange",
    "Wallet",
    "Token",
    "Chain",
    "Node",
    "Transaction",
    "Consensus",
    "Peer",
    "Platform",
  ];

  const suffixes = [
    "DAO",
    "DApp",
    "DeFi",
    "Labs",
    "Ventures",
    "Technologies",
    "Solutions",
    "Systems",
    "Networks",
    "Services",
    "Group",
    "Partners",
    "Associates",
    "Holdings",
    "Capital",
  ];

  function generateName() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    setName(`${adj} ${noun} ${suffix}`);
  }

  return (
    <div>
      <header>
        <h2 class="text-2xl font-bold mb-4 text-gray-700">
          Business Name Generator
        </h2>
      </header>
      <button
        onClick={generateName}
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Name
      </button>
      <p class="mt-4 text-gray-700">{name()}</p>
    </div>
  );
};

export default App;
