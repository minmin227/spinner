let char = '|/-\\|';
let time = 0;
for (let i = 0; i<char.length; i++) {
  setTimeout(()=> {process.stdout.write(`\r${char[i]}     `)}, time)
  time += 200;
  if (time === 200*char.length){
    setTimeout(()=> {process.stdout.write(`\r${char[i]}\n`)}, time)
  }
}