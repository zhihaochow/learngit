(function(){
	window['ZZH']={};

	function roundNum(minNum,maxNum){
		switch(arguments.length){
			case 1:
				return Math.round(Math.random()*minNum);
				break;
			case 2:
				return Math.round(Math.random()*(maxNum-minNum)+minNum);
				break;
			default:
				return 0;
				break;
		};
};
	window['ZZH']['roundNum']=roundNum;
})();