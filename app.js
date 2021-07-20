const datas = [
    {
        name: 'Pesol Maiyawut',
        job: 'Freelance',
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        img: 'https://scontent.fhdy1-1.fna.fbcdn.net/v/t1.6435-9/134644904_3514676515254639_4059800055431693053_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HQX2Ycl_bBMAX-lbvSv&_nc_ht=scontent.fhdy1-1.fna&oh=a7ed5b4de84dcc1a1339b3ed530b96fc&oe=60FBBE02'
    },
    {
        name: 'Adam Sandler',
        job: 'Web Developer',
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'John Raider',
        job: 'UX Design',
        text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.Rackham.",
        img: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'Angel Beauty',
        job: 'Software Engineer',
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more- or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages",
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
]

const img = document.querySelector('#img');
const reviewName = document.querySelector('#name');
const job = document.querySelector('#job');
const text = document.querySelector('#text');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const randBtn = document.querySelector('#rand');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    displayData();
});

prevBtn.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = datas.length - 1
    }
    displayData();

})

nextBtn.addEventListener('click', () => {
    currentItem++
    if (currentItem > datas.length - 1) {
        currentItem = 0
    }
    displayData();
});

randBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * datas.length);
    displayData();
})

function displayData() {
    const review = datas[currentItem];
    img.src = review.img;
    reviewName.textContent = review.name;
    job.textContent = review.job;
    text.textContent = review.text;
}