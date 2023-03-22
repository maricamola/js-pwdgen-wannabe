/*
1.Chiedi all'utente il suo nome.

2.Chiedi all'utente il suo cognome.

3.Chiedi all'utente il suo colore preferito.

4.Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

const name = prompt ('Come ti chiami?')

const surname = prompt ('Qual è il tuo cognome?')

const color = prompt ('Qual è il tuo colore preferito?')

console.log(name , surname , color)

const outputStr = name + surname + color + '23';

console.log(outputStr)

document.getElementById('output').innerHTML = outputStr;
document.getElementById('output').style.color = '#9370db';