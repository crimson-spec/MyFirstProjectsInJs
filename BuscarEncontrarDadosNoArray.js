

const booksByCategory = Array(
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionparia",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da babilonia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L."
            }
        ]
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do seculo",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey" 
            }
        ]
    }
)

function countAuthors(books){
    let authors = Array()
    for(let author of books){
        if(authors.indexOf(author.author) == -1){
             authors.push(author.author)}
    }
    return authors.length
}

function booksByAuthor(books, name){
    let booksOfAuthor = Array()
    for(let author of books){
        if(author.author == name){
            booksOfAuthor.push(author.title)}
    }
    return booksOfAuthor.join(", ")
}

const totalOfCategories = booksByCategory.length;

console.log(totalOfCategories)

for(let category of booksByCategory){
    console.log('Categoria: '+category.category)
    console.log('  Quantidade de livros: '+ category.books.length)
    console.log('  Quantidade de Autores: ' + countAuthors(category.books))
    console.log('  Pesquisa de livro pelo nome do autor: ' + booksByAuthor(category.books, 'Augusto Cury'))
    for(let author of category.books){
        //console.log('    Livro: '+author.title)
        //console.log('    Autor: '+author.author)
    }
}

