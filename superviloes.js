import {randomSupervillain} from 'supervillains';
import chalk from 'chalk';

export function coolsoleLog(mensagem) {
    console.log("E em um momento de raiva",chalk.red(randomSupervillain()), "disse:", chalk.red(mensagem))
}