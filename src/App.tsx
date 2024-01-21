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
    <div class="min-h-screen flex flex-col items-center justify-center p-48 bg-purple-200">
      <header>
        <div class="flex justify-center">
          <img
            height="250"
            width="237"
            src={logo}
            alt="Web3 Business Name Generator"
          />
        </div>

        <h1 class="text-5xl font-bold text-gray-800 mb-8 mt-2">
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
        <div class="mt-8 text-gray-700 text-center">
          <h2 class="text-3xl font-bold text-gray-800 my-4">Roadmap</h2>

          <ul class="list-disc list-inside text-left">
            <li>More adjectives, nouns, and suffixes</li>
            <li>add roots and mix them</li>
            <li>add AI suggestions</li>
            <li>add art creation from name</li>
            <li>one-click BCH NFT creation from name and art</li>
            <li>one-click fungible token creation from name</li>
            <li>Save your favorites</li>
            <li>Share your favorites</li>
            <li>Submit your own words</li>
          </ul>
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
          project |{" "}
          <a href="https://github.com/Panmoni/w3ng" target="_blank">
            <svg
              class="h-4 w-4 inline-block align-bottom"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.91-.015 3.3 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>{" "}
          <a href="https://www.solidjs.com" target="_blank">
            <svg
              class="h-4 w-4 inline-block align-bottom"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="27.5"
                  x2="152"
                  y1="3"
                  y2="63.5"
                  gradientTransform="translate(-3.22 1.507) scale(.80503)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".1" stop-color="#76b3e1" />
                  <stop offset=".3" stop-color="#dcf2fd" />
                  <stop offset="1" stop-color="#76b3e1" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="95.8"
                  x2="74"
                  y1="32.6"
                  y2="105.2"
                  gradientTransform="translate(-3.22 1.507) scale(.80503)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#76b3e1" />
                  <stop offset=".5" stop-color="#4377bb" />
                  <stop offset="1" stop-color="#1f3b77" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="18.4"
                  x2="144.3"
                  y1="64.2"
                  y2="149.8"
                  gradientTransform="translate(-3.22 1.507) scale(.80503)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#315aa9" />
                  <stop offset=".5" stop-color="#518ac8" />
                  <stop offset="1" stop-color="#315aa9" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="75.2"
                  x2="24.4"
                  y1="74.5"
                  y2="260.8"
                  gradientTransform="translate(-3.22 1.507) scale(.80503)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4377bb" />
                  <stop offset=".5" stop-color="#1a336b" />
                  <stop offset="1" stop-color="#1a336b" />
                </linearGradient>
              </defs>
              <path
                fill="#76b3e1"
                d="M128 29.683S85.333-1.713 52.327 5.532l-2.415.805c-4.83 1.61-8.855 4.025-11.27 7.245l-1.61 2.415-12.076 20.931 20.93 4.025c8.856 5.636 20.127 8.05 30.592 5.636l37.031 7.245z"
              />
              <path
                fill="url(#a)"
                d="M128 29.683S85.333-1.713 52.327 5.532l-2.415.805c-4.83 1.61-8.855 4.025-11.27 7.245l-1.61 2.415-12.076 20.931 20.93 4.025c8.856 5.636 20.127 8.05 30.592 5.636l37.031 7.245z"
                opacity=".3"
              />
              <path
                fill="#518ac8"
                d="m38.642 29.683-3.22.805C21.735 34.513 17.71 47.394 24.955 58.664c8.05 10.465 24.956 16.1 38.641 12.076l49.912-16.906S70.843 22.438 38.642 29.683z"
              />
              <path
                fill="url(#b)"
                d="m38.642 29.683-3.22.805C21.735 34.513 17.71 47.394 24.955 58.664c8.05 10.465 24.956 16.1 38.641 12.076l49.912-16.906S70.843 22.438 38.642 29.683z"
                opacity=".3"
              />
              <path
                fill="url(#c)"
                d="M104.654 65.91a36.226 36.226 0 0 0-38.641-12.076L16.1 69.934 0 98.111l90.164 15.295 16.1-28.981c3.22-5.635 2.415-12.075-1.61-18.516z"
              />
              <path
                fill="url(#d)"
                d="M88.553 94.085A36.226 36.226 0 0 0 49.912 82.01L0 98.11s42.667 32.202 75.673 24.152l2.415-.806c13.686-4.025 18.516-16.905 10.465-27.37z"
              />
            </svg>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
