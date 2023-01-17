export const getTiteSchedule = (tasks) => {
	const orderedTasks = tasks?.sort((a, b) => {
		const horarioFinalA = new Date(a.horarioFinal);
		const horarioFinalB = new Date(b.horarioFinal);

		return horarioFinalA.getTime() < horarioFinalB.getTime() ? -1 : horarioFinalA.getTime() > horarioFinalB.getTime() ? 1 : 0;
	});
	console.log(orderedTasks);

	var max = [];
	var anterior = 0;

	for (var i = 0; i < tasks?.length; i++) {
		const horarioInicial = new Date(tasks[i].horarioInicial);

		if (horarioInicial.getTime() >= anterior) {
			max.push(tasks[i])
			const horarioFinal = new Date(tasks[i].horarioFinal);
			anterior = horarioFinal.getTime();
		}
	}

	console.log(max);
	return max;
}