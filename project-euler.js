var option = process.argv[2],
    problem,
    problemId,
    title,
    fs = require('fs');

process.stdout.write('\u001B[2J\u001B[0;0f');
console.log('~~~ Project Euler ~~~');
console.log();

if(!isNaN(option)) {
    problemId = option;
    problem = require('./problems/' + problemId),
    title = 'Problem #' + problemId + ' - ' + problem.title;

    console.log(title + ': ');
    console.log(problem.description);
    console.log();
    console.log('Solution:');
    console.log(problem.solution.toString());
    console.log();
    console.time('Execution Time');
    console.log('Answer: ' + problem.solution());
    console.timeEnd('Execution Time');
}else if(option === 'solved') {
    var problems = fs.readdirSync('./problems');
    console.log('You have solved ' + problems.length + ' problems so far!');
    console.log();
    var a = problems.map(function(problem) {
       return parseInt(problem.replace('.js', ''), 10);
    }).sort(function(a, b){
        return a - b;
    }).forEach(function(problem) {
        console.log('   ' + problem + ') ' + require('./problems/' + problem).title);
    });

    console.log();
    console.log('Type the command "node project-euler #" where # is the problem you wanna see the solution');
    console.log();
}
