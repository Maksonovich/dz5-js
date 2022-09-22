let row = document.querySelector('.row')
let images = [
    {id: 1, img: './images/image 1.png' ,title: 'Syltherine', subtitle: 'Stylish cafe chair' ,price: 'Rp 2.500.000' , line:'Rp 3.500.000'},
    {id: 2, img: '/images/image 2.png' ,title: 'Leviosa', subtitle: 'Stylish cafe chair', price:'Rp 2.500.000',line:'.'},
    {id: 3, img: './images/image 3.png' ,title: 'Lolito', subtitle: 'Luxury big sofa', price:'Rp 7.000.000' , line:'Rp 14.000.000'},
    {id: 4, img: './images/image 4.png' ,title: 'Respira', subtitle: 'Minimalist fan', price:'Rp 500.000',line:'.'},
    {id: 5, img: './images/image 6.png' ,title: 'Grifo', subtitle: 'Night lamp', price:'Rp 1.500.000',line:'.'},
    {id: 6, img: './images/image 7.jpg' ,title: 'Muggo', subtitle: 'Small mug', price:'Rp 150.000',line:'.'},
    {id: 7, img: './images/image 8.png' ,title: 'Pingky', subtitle: 'Cute bed set', price:'Rp 7.000.000' , line:'Rp 14.000.000'},
    {id: 8, img: './images/image 9.png' ,title: 'Potty', subtitle: 'Minimalist flower pot', price:'Rp 500.000',line:'.'}
]
images.forEach ((item) => {
    row.innerHTML += 
    `<div class="card" id="${item.id}">
        <img class="card-img" src="${item.img}">
            <p class="card-title" id = 'iner'>${item.title}</p>
                <p class="text-title" id = 'iner'>${item.subtitle}</p>
                    <p class="title" id = 'iner'>${item.price}</p>
            <p class="line">${item.line}</p>
    </div>`
})

const h1 = document.createElement('h1');
    h1.innerHTML = `Our Products`;
        row.before (h1);

const newElement = document.createElement('div')
    row.after(newElement)
        newElement.className = 'linkbtn'

const link = document.createElement('a')
    link.innerHTML = 'Show More'
        newElement.append (link)
            link.href = '#';
            link.className = 'btn'

//интерпритируемый

//интерполяция