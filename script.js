"use strict";
//          WHILE
/**
 * Declarer une varaible a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */
let oya=3;
while(oya<9){
    oya++
    if(oya==7){
        continue;
    }
    if(oya==8){
        break;
    }
    console.log(oya);
}
console.log(`J'ai cassé la boucle au bout de ${oya} tours`);