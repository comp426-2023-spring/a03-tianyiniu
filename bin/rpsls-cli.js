#!/usr/bin/env node

import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js";

const help_text = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`

const rules_text = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`

const args = minimist(process.argv.slice(2));

if (args.r || args.rules) {
	console.log(rules_text);
	process.exit(0);
}

if (args.h || args.help) {
	console.log(help_text);
	process.exit(0);
}

try {
	console.log(JSON.stringify(rpsls(args._[0])));
} catch (error) {
	if (error instanceof RangeError) {
		console.log(`${args._[0]} is out of range.`);
		console.log(rules_text);
		process.exit();
	} else {
		console.log(error);
	}
}

