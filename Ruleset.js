function OriginalRuleset() {
	this.description = "One Lower";
	
	this.canMove = function(index, current)
	{
        for (i = 1; i < index - 1; i++)
			if (current[i])
				return false;

		if (!current[index - 1])
			return false;

		return true;
	}
}

function FactorRuleset() {
	this.description = "Factors";
	
	this.canMove = function(index, current)
	{
		for (i = 1; i < index; i++)
			if ((index % i == 0) !== current[i])
				return false;

		return true;
	}
}

function Rulesets() {
	return [new OriginalRuleset(), new FactorRuleset()];
}