var problemId = process.argv[2],
    problem = require('./problems/' + problemId),
    title = 'Problem #' + problemId + ' - ' + problem.title;

process.stdout.write('\u001B[2J\u001B[0;0f');
console.log('~~~ Project Euler ~~~');
console.log();
console.log(title + ': ');
console.log(problem.description);
console.log();
console.log('Solution:');
console.log(problem.solution.toString());
console.log();
console.time('Execution Time');
console.log('Answer: ' + problem.solution());
console.timeEnd('Execution Time');
