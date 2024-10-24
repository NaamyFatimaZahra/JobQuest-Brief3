let menu = document.getElementById('menu-icon');
let navlist = document.querySelector('.alllist');
let section = document.querySelector(".cards-container");
let input = document.querySelector(".input-section");
let button = document.querySelector(".Button-search");


menu.addEventListener('click',()=>
{
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
);




let cards = [
    {
    title: "web developer",
    url: "../assets/images/icons/code.png",
    job: "backend developer",
    rule: "Remote",
    time: "Jun 11 2024",
    url_icon : "../assets/images/icons/amazone.png"
},
    {
    title: "data-science",
    url: "../assets/images/icons/data-science.png",
    job: "Financial analyst",
    rule: "Full Time",
    time: "Jun 10 2024",
    url_icon : "../assets/images/icons/facebook.png"
},
    {
    title: "web developer",
    url: "../assets/images/icons/ux.png",
    job: "frontend developer",
    rule: "Full Time",
    time: "Jun 14 2024",
    url_icon : "../assets/images/icons/ebay.png"
},
    {
    title: "data-science",
    url: "../assets/images/icons/data-science.png",
    job: "Financial analyst",
    rule: "Remote",
    time: "July 20 2024",
    url_icon : "../assets/images/icons/tesla.png"
},
    {
    title: "Ai developer",
    url: "../assets/images/icons/data-science.png",
    job: "backend developer",
    rule: "Remote",
    time: "July 21 2024",
    url_icon : "../assets/images/icons/neuralink-logo-vector.png"
},
    {
    title: "Technical Lead",
    url: "../assets/images/icons/scrum.png",
    job: "Technical Guidance",
    rule: "Full Time",
    time: "July 18 2024",
    url_icon : "../assets/images/icons/twitter.png"
},
    {
    title: "web developer",
    url: "../assets/images/icons/code.png",
    job: "Fullstack developer",
    rule: "Full Time",
    time: "July 20 2024",
    url_icon : "../assets/images/icons/tesla.png"
},
    {
    title: "Ai developer",
    url: "../assets/images/icons/cloud.png",
    job: "backend developer",
    rule: "Remote ",
    time: "July 21 2024",
    url_icon : "../assets/images/icons/tesla.png"
},
    {
    title: "Technical Lead",
    url: "../assets/images/icons/scrum.png",
    job: "Technical Guidance",
    rule: "Full Time",
    time: "July 18 2024",
    url_icon : "../assets/images/icons/facebook.png"
},
];



for (let i = 0; i < cards.length; i++) 
    {
        section.innerHTML += `           
         <div class="card">
                <div class="headIcone-title">
                    <div class="icon-logo">
                        <img src=${cards[i].url} alt="">
                    </div>
                    <div class="parent-title"><h2>${cards[i].title}</h2></div>
                </div>
                <div class="infoDetail">
                    <h3 class="jobdetail-text">${cards[i].job}</h3>
                    <h3 class="job-rule-text">${cards[i].rule}</h3>
                </div>
                <div class="time-logo">
                    <div class="time-post">
                        <p>${cards[i].time}</p>
                    </div>
                    <div class="logo-company-container">
                        <img src="${cards[i].url_icon}" alt="">
                    </div>
                </div>
            </div>` 
    }

    input.addEventListener('keyup' , ()=>
    {
                        section.innerHTML = ''
        for (let i = 0; i < cards.length; i++)
        {
            if((cards[i].title).toLowerCase().includes(input.value.toLowerCase()))
            {

                section.innerHTML += `           
                <div class="card">
                       <div class="headIcone-title">
                           <div class="icon-logo">
                               <img src=${cards[i].url} alt="">
                           </div>
                           <div class="parent-title"><h2>${cards[i].title}</h2></div>
                       </div>
                       <div class="infoDetail">
                           <h3 class="jobdetail-text">${cards[i].job}</h3>
                           <h3 class="job-rule-text">${cards[i].rule}</h3>
                       </div>
                       <div class="time-logo">
                           <div class="time-post">
                               <p>${cards[i].time}</p>
                           </div>
                           <div class="logo-company-container">
                               <img src="${cards[i].url_icon}" alt="">
                           </div>
                       </div>
                   </div>` 
            }
        } 
    }
    )