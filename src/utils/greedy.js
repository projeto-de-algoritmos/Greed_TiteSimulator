export const getTiteSchedule = (tasks) => {
	const orderedTasks = tasks?.sort((a, b) => {
		return a.horarioFinal < b.horarioFinal ? -1 : a.horarioFinal > b.horarioFinal ? 1 : 0;
	});
	console.log(orderedTasks);

	var max = [];
	var anterior = 0;

	for (var i = 0; i < tasks?.length; i++) {
		if (tasks[i].horarioInicial >= anterior) {
			max.push(tasks[i])
			anterior = tasks[i].horarioFinal;
		}
	}

	console.log(max);
	return max;
}