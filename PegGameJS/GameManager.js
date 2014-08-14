var GameManager = GameManager || {};

GameManager.rulesets = Rulesets();

GameManager.startNewGame = function() {
	this.ruleset = this.rulesets[0];

	this.targetPegs = [true];
	this.currentPegs = [true];
	for (i = 1; i <= 8; i++) {
		this.targetPegs.push(Math.random()<.5);
		this.currentPegs.push(Math.random()<.5);
	}
}