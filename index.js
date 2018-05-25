module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}



// //invierte una cadena
// String.prototype.reverse = function reverse(string) {
//   return Array.from(this).reverse().join("");
// }
//
// //define un objeto frase
// function Phrase(content) {
//   this.content = content;
//
//   //retorna el contenido procesado para testear el palindromo
//   this.processor = function(string) {
//     return string.toLowerCase();
//   }
//
//   this.processedContent = function() {
//     return this.proccesor(this.content);
//   }
//
//   //retorna verdadero o falso si es un palindromo
//   this.palindrome = function palindrome() {
//     return this.processedContent() === this.processedContent().reverse();
//   }
//
//   this.louder = function louder() {
//     let loudercontent = this.content.toUpperCase();
//     return loudercontent;
//   }
// }
//
// //define un objeto frase traducida
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
//
//   //devuelve la traduccion procesada para testear el palindromo
//   this.processedContent = function() {
//     return this.processor(this.translation);
//   }
//   this.louder = function louder() {
//     let loudercontent = this.translation.toUpperCase();
//     return loudercontent
//   }
// }
//
// TranslatedPhrase.prototype = new Phrase();
