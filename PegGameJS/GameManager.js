var GameManager = GameManager || {};

GameManager.rulesets = Rulesets();
GameManager.ruleset = GameManager.rulesets[0];

GameManager.startNewGame = function() {
	this.ruleset = this.rulesets[Math.floor(Math.random() * (this.rulesets.length))];

	this.targetPegs = [true];
	this.currentPegs = [true];
	for (i = 1; i <= 8; i++) {
		this.targetPegs.push(Math.random()<.5);
		this.currentPegs.push(Math.random()<.5);
	}
}

GameManager.startFirstGame = function() {
	this.ruleset = this.rulesets[0];
	
	this.currentPegs = [true, false, false, false, false, false, false, false, false];
	this.targetPegs = [true];
	for (i = 1; i <= 8; i++) {
		this.targetPegs.push(Math.random()<.5);
	}
}

GameManager.trySwitch = function(index) {
	if (this.ruleset.canMove(index, this.currentPegs)) {
		this.currentPegs[index] = !this.currentPegs[index];
	}
}