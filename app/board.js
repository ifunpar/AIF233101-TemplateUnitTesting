import { rolls as diceRolls }  from './dice.js';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve('./app/test.txt');

//membaca posisi saat ini dari file txt
//asumsi: test.txt ada (jadi jangan dihapus)
let readFile = async () => {
    return fs.readFile(filePath, 'utf8');
}

//menuliskan posisi pada file
export let writeFile = async (content) => {
    fs.writeFile(filePath, content, (err) => {
        if (err) throw err;
    });
}

//memperbarui posisi saat ini sesuai dengan banyaknya lempar dadu
export let move = async () => {
    let content = await readFile();
    let num = diceRolls();
    //console.log(content);
    content = parseInt(content) + num;
    //console.log("Updated:"+content);
    writeFile(content.toString());
    return content;
}

//memperbarui posisi saat ini sebanyak 1
export let moveOnce = async () => {
    let content = await readFile();
    //console.log(content);
    content = parseInt(content) + 1;
    //console.log("Updated:"+content);
    writeFile(content.toString());
    return content;
}

