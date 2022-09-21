let data = [
    { id: 1, name: 'Spider-man: No Way Home', img: 'imgs/1.jpg', rating: 4.0, genre:'Action', desc:'Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe. The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers.', },
    { id: 2, name: 'RRR', img: 'imgs/2.jpg', rating: 4.0, genre:'Tragedy', desc:'RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris', },
    { id: 3, name: '3 Idiots', img: 'imgs/3.jpg', rating: 4.5, genre:'Humour', desc:'3 Idiots is a 2009 Indian Hindi-language coming-of-age comedy-drama film written and directed by Rajkumar Hirani co-written by Abhijat Joshi, with producer Vidhu Vinod Chopra acting as a screenplay associate. Adapted loosely from Chetan Bhagat novel Five Point Someone,the film stars Aamir Khan, R. Madhavan and Sharman Joshi', }
]

let cards = "  ";

data.forEach((item) => {
    cards += `
    <div>
    <br/>
    <br/>
    <div class="card">
        <div class="card-info">
            <img  src="${item.img}" alt="Image" style="width:150px; height:250px;"/>
            <div class="card-text">
            <h4 style="bottom:180px;"> ${item.name} </h4>
            <h5 style="bottom:150px;"> Rating: ${item.rating} </h5>
            <h5> ${item.genre} </h5>
            <div class="desc"> ${item.desc} <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque assumenda, praesentium non aliquid ducimus facere voluptate maxime, eveniet facilis nostrum molestias et officia doloremque reiciendis provident optio consectetur perferendis!</span></div>
            </div>
        </div>
    </div>
    </div>
    `;
});

const pannel = document.getElementById("panel");
pannel.innerHTML = cards;
const profileCard = document.getElementById("profile");
