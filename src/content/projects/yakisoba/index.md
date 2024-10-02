---
title: "Yakisoba 🍜 Cross-Chain Vault"
description: "Is anyone else feeling a little cross about these chain yields?"
date: "10/01/2024"
demoURL: "https://vscode.dev/github/Oni-giri/Yakisoba-vault"
repoURL: "https://github.com/Oni-giri/Yakisoba-vault"
---

Yakisoba vaults are an alternative breed of ERC4626 vaults, which allow instant redemptions of illiquid assets. These smart contracts were developed during my time at Astrolab.fi, which focused on cross-chain yield aggregation. Since the project decided to move on to a different architecture, I'm open-sourcing them. 

The contracts in their current form have been audited by Hexens. You can find the audit [here](https://hexens.io/audits#astrolab).
## Key features 🍜
### Instant redemptions
Traditional cross-chain liquidity solutions often suffer from high costs and delays. Yakisoba addresses this by introducing a liquidity buffer, similar to Curve's stableswap. This buffer holds both the underlying asset and its virtual equivalent, allowing users to redeem instantly without waiting for cross-chain confirmations. If the buffer depletes, the protocol can rebalance and adjust accordingly.

### MEV protection
Cross-chain protocols can be vulnerable to arbitrage opportunities and Miner Extractable Value (MEV) exploits. Yakisoba mitigates these risks by linearizing profits over a set period (e.g., one week), removing completely the potential for share update sandwiching and ensuring a more stable profit distribution.

### Cross-chain farming
Yakisoba supports cross-chain yield farming, to source the best available yields. The architecture is modular, utilizing `BridgeConnectorHome` and `BridgeConnectorRemote` to manage bridging and messaging securely without tying the protocol to a specific bridge.

### Flexible capital allocation
Allocation by chain happens through a keeper at the vault level, while allocation by strategy is handled by the `Allocator` contract, which works seamlessly across both home and remote chains.

### Strategies
The Strategy component interfaces with various yield farming protocols, handling deposits, compounding, and withdrawals. It's designed to be adaptable, accommodating protocols with different locking mechanisms to maximize yield opportunities.

[Check the repo here!](https://github.com/Oni-giri/Yakisoba-vault)