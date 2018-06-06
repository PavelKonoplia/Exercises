(function () {
	
	
	
	function Task(index,speed,taskType) {
		this.index = index;
		this.speed = speed;
		this.taskType = taskType;
		this.current_progress=0;
	}

	Task.prototype.GetProgress = function() {
		return this.current_progress;
	};

	Task.prototype.DoStep = function() {
		this.current_progress = this.current_progress + 0.2 * this.speed;
	};
	
	Task.prototype.Name = function() {
		return '#'+this.index+' '+this.taskType;
	};

	function SlowTask(index){	
		Task.apply(this, [index,2,'Slow Task']);
	}
	SlowTask.prototype = Object.create(Task.prototype);	
	SlowTask.prototype.constructor = SlowTask;
		
	function FastTask(index){		
		Task.apply(this, [index,4,'Fast Task']);
	}	
	FastTask.prototype = Object.create(Task.prototype);
	FastTask.prototype.constructor = FastTask;	
	
	window.Tasks={
		'Slow Task':SlowTask,
		'Fast Task':FastTask
	};
		
 }());