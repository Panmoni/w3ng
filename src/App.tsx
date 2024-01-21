import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import logo from "./assets/w3ng-fornow.png";

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
    <div class="min-h-screen flex flex-col items-center justify-center py-48 bg-purple-200">
      <header>
        <div class="flex justify-center">
          <img
            height="250"
            width="237"
            src={logo}
            alt="Web3 Business Name Generator"
          />
        </div>

        <h1 class="text-5xl font-bold text-gray-800 my-8">
          Web3 Business Name Generator
        </h1>
      </header>
      <main class="flex flex-col items-center">
        <button
          onClick={generateName}
          class="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-2xl font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-colors duration-200 mx-auto"
        >
          Generate Name
        </button>
        <div class="mt-8 text-black text-3xl border-2 shadow-lg border-violet-800 bg-violet-200 text-center py-10 px-20 w-auto leading-10 rounded">
          {name()}
        </div>
      </main>
      <footer class="mt-auto">
        <p class="leading-4 text-gray-700 text-center">
          A{" "}
          <a
            href="https://www.panmoni.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Panmoni is a Web3 product studio"
            class="gradient-link tracking-wider font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00abda] to-[#1476ff] hover:after:bg-gradient-to-r hover:after:from-[#00abda] hover:after:to-[#1476ff]"
          >
            Panmoni
          </a>{" "}
          project
        </p>
      </footer>
    </div>
  );
};

export default App;
