const { PythonShell } = require('python-shell')

let options = {
    scriptPath: `${__dirname}`,
    args: ["Hello", 45],
}

// PythonShell.run("main.py", options, (err, res) => {
//     if (err) console.log(err)
//     if (res) console.log(res)
// })

PythonShell.run('main.py', options).then(messages => {
    // results is an array consisting of messages collected during execution
    console.log(messages);
});

// PythonShell.runString('Analyze.py', options).then(messages => {
//     console.log('finished');
//     console.log(messages)
// });