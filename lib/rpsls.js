export function rps(shot) {
	const valid_shots = ["rock", "paper", "scissors"];
	const comp = valid_shots[Math.floor(Math.random() * 3)];

	if (shot === undefined) {
		return {"player": comp};
	} else if (!valid_shots.includes(shot.toLowerCase())) {
		throw new RangeError("Invalid shot");
	}

	shot = shot.toLowerCase();
	var result;
	if (shot === comp) {
		result = "tie";
	} else {
		if ((shot === "rock" && comp === "scissors") ||
			(shot === "scissors" && comp === "paper") ||
			(shot === "paper" && comp === "rock")) {
			result = "win";
		} else {
			result = "lose";
		}
	}
	return {"player": shot, "opponent": comp, "result": result};
}

export function rpsls(shot) {
	const valid_shots = ["rock", "paper", "scissors", "lizard", "spock"];
	const comp = valid_shots[Math.floor(Math.random() * 5)];

	if (shot === undefined) {
		return {"player": comp};
	} else if (!valid_shots.includes(shot.toLowerCase())) {
		throw new RangeError("Invalid shot");
	}

	shot = shot.toLowerCase();
	var result;
	if (shot === comp) {
		result = "tie";
	} else {
		if ((shot === "spock" && comp === "scissors") ||
			(shot === "scissors" && comp === "paper") ||
			(shot === "paper" && comp === "rock") ||
			(shot === "rock" && comp === "lizard") ||
			(shot === "lizard" && comp === "spock") ||
			(shot === "scissors" && comp === "lizard") ||
			(shot === "lizard" && comp === "paper") ||
			(shot === "paper" && comp === "spock") ||
			(shot === "spock" && comp === "rock") ||
			(shot === "rock" && comp === "scissors")) {
			result = "win";
		} else {
			result = "lose";
		}
	}
	return {"player": shot, "opponent": comp, "result": result};
}
