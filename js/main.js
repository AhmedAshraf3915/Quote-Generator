var array = [
    {
        'author': 'J.K. Rowling, Harry Potter and the Sorcerer\'s Stone',
        'quote': '“It does not do to dwell on dreams and forget to live.”'
    },
    {
        'author': ' "Epictetus"',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': ' "Marcus Tullius Cicero"',
        'quote': '“A room without books is like a body without a soul.”'
    },
    {
        'author': ' "Mae West"',
        'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {
        'author': ' "Nelson Mandela"',
        'quote': '“In three words I can sum up everything I\'ve learned about life: it goes on.”'
    },
    {
        'author': '"Elbert Hubbard"',
        'quote': '“A friend is someone who knows all about you and still loves you.”'
    },
    {
        'author': '"Oscar Wilde"',
        'quote': '“To live is the rarest thing in the world. Most people exist, that is all.”'
    },
    {
        'author': '"Martin Luther King"',
        'quote': '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”'
    },
    {
        'author': '"Stephen Chbosky, The Perks of Being a Wallflower"',
        'quote': '“We accept the love we think we deserve.”'
    },
    {
        'author': '"Ralph Waldo Emerso"n',
        'quote': '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”'
    },
];
var quote = document.getElementById("quote")
var author = document.getElementById("author")
var usedQuotes = [];

function getQuote() {
    if (usedQuotes.length === array.length) {
        usedQuotes = [];
    }
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * array.length);
    } while (usedQuotes.includes(randomIndex));

    usedQuotes.push(randomIndex);
    quote.innerHTML = `${array[randomIndex].quote}`;
    author.innerHTML = `${array[randomIndex].author}`;
}