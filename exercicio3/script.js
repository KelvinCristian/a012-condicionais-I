// # Exercício 3

// Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

let nacionalidade = prompt("Qual sua nacionalidade?")

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;
if (nacionalidade === "brasileira"){
    console.log("Você é Brasileiro");
}else if (nacionalidade ==="argentina"){
    console.log("Você é da Argentina");}
else if (nacionalidade === "uruguaia"){
    console.log("Você é do Uruguai");
}else if (nacionalidade === "chilena"){
    console.log("Você é do Chile");
}else if (nacionalidade === "colombiana"){
    console.log("Você é do Chile");
}else {alert("Nacionalidade não encontrada")}
// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 




