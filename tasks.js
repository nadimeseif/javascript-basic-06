const tasks = [
  'Dont reply to nadim #1',
  'Dont reply to the edame nadim',
  'Reply to Bassam but not nadim',
  'Reply to Nadim'
]

/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (text) => {
    onDataReceived(text.trim())
  });
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  let argumensts = text.split(' ')
  if (argumensts[0] === 'quit' ||  argumensts[0] === 'exit' ) {
    quit();
  }
  else if(argumensts[0] === 'hello' &&  typeof argumensts[1]=='undefined'){
    hellonew();
  }
else if(argumensts[0] === 'hello'){
  hello(argumensts[1]);
}
  else if(argumensts[0] === 'help'){
    help();
  }
  else if(argumensts[0] === 'list'){
    list();

  } else if(argumensts[0] === 'add'){
    add1(argumensts[1]);
    
  }

  else if(argumensts[0] === 'remove'){
    deletenew(argumensts[1]);
  }

  else if(argumensts[0] === 'done'){
    updatenew(argumensts[1]);
  }

  else if(argumensts[0] === 'check'){
    checknew(argumensts[1]);
  }

  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('c', c);
  console.log('unknown command: "'+c.trim()+'"')
}

function checknew(task2){
  const elem = tasks[task2];
  if(task2 >=0 ){
    tasks.splice(task2, 0 ,'[✓] '+ elem );
  } else {
  console.log('Please enter a number greater or equal to 0');
  }
}

function updatenew(task2){
  if(task2 >=0 ){
    tasks.splice(task2, 1 ,'done ');
  } else {
  console.log('Please enter a number greater or equal to 0');
  }
}

function add1(task){
  tasks.push(task);
}

function deletenew(task1){  
  if(task1 >=0 ){
  tasks.splice(task1, 1);
} else {
console.log('Please enter a number greater or equal to 0');
}
}
/**
 * Says hello with a name
 *
 * @returns {void}
 */
function hello(name){

  console.log('Hello '+name+' ! ')
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hellonew(name){
  console.log('Hello! ')
}



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Help to find the right commands
 *
 * @returns {void}
 */
function help(){
  console.log('Type the below commands: ' + '\n' + '\n' + '- "exit" or "quit"' + '\n' + '- hello' + '\n' + '- hello "type anything"'+ '\n' )
  
}

function printTask(task) {

}

function list(){
  console.log('Please find below the task you have to perform:')

  for(let index = 0; index < tasks.length; index++) {
    const task = tasks[index];
    console.log(parseInt(index + 1) + '- ' + task);
  }
  
}



function add(){
  const set = new Set (['1- type hello or hello with a name to be able to display it.', '2- type quit or exit to exit the program.','3- type help if the commands you are entering are not working.'])
  Array.from(set);
  
}


// The following line starts the application
startApp("Nadim Elie Seif")
