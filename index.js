const list = [
  'Jonathan', // Name
  22, // Age
  false, // Developer
  new Date(2000,8,19,11,23,11), // Birth date
  {
    title : 'La isla misteriosa',
    author : 'Julio Verne',
    date : "1875",
    link : 'https://es.wikipedia.org/wiki/La_isla_misteriosa',
  },
]

console.log(list[list.length - 1].link)
