var problemId = process.argv[2],
    problem = require('./' + problemId),
    title = 'Problem #' + problemId + ' - ' + problem.title;

console.log('~~~ Project Euler ~~~');
console.log('---------------------');
console.log(title + ': ');
console.log(problem.description);
console.log();
console.log('Solution:');
console.log(problem.solution.toString());
console.log();
console.time('Execution Time');
console.log('Answer: ' + problem.solution());
console.timeEnd('Execution Time');
