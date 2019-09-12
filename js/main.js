let imageHolder = [];

const fillImages = data => {
    const imageCont = $('.image-cont');

    for (let i = 0; i < data.imageShow.length; i++) {
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <figure class="image-holder" id="image-holder">
                <img src="${data["imageShow"][i].imgUrl}" alt="${data["imageShow"][i].title}" image onclick=modal()>
            </figure>
            <div class="info">
                <p class="title">${data["imageShow"][i].title}</p>
                <p class="time-stamp">${data.imageShow[i].time}</p>
            </div>
        `;

        imageCont.appendChild(card);
        imageHolder.push(card);

        
    }
    
}

const fillVideos = data => {
    const videoCont = $('.video-cont');

    for (let i = 0; i < data.videoReel.length; i++) {
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <figure class="video-holder" id="video-holder">
                <img src="${data["videoReel"][i].previewUrl}" alt="studio">
            </figure>
            <div class="info">
                <p class="title">${data["videoReel"][i].title}</p>
                <p class="time-stamp">${data.videoReel[i].time}</p>
            </div>
        `;

        videoCont.appendChild(card);
    }
}

const fillMinistered = data => {
    const logoCont = $('.logo-cont');

    for (let i = 0; i < data.ministered.length; i++) {
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('no-shadow');
        card.innerHTML = `
            <figure class="church-logo-holder" id="logo-holder">
                <img src="${data["ministered"][i].imgUrl}" alt="studio">
            </figure>
            <div class="info">
                <p class="title">${data["ministered"][i].title}</p>
            </div>
        `;

        logoCont.appendChild(card);
    }
    
}

// modal
window.addEventListener('load', () => {
    setTimeout(() => {
        const imageCont = $('.image-cont');
        const modalImage = imageCont.querySelectorAll("[image]");
        modalImage.addEventListener('click', modal);
        console.log(modalImage);
    }, 4000);
})


const modal = () => {
    const modalHolder = $(".modal");
    const closeBtn = $(".close");
    const body = $(".body");
    const image = $(".modal img");
    

    
    closeBtn.addEventListener('click', () => {
        modalHolder.style.display = "none";
        body.style.zIndex = "1";
    })
    
    image.src = this.src;
    modalHolder.style.display = "flex";
    body.style.zIndex = "-1000";

    // image.
    console.log(modalHolder, "modal works", imageHolder ); 
}




const fillContent = () => {

    const api = "./js/content.json"

    fetch(api)
        .then(response => 
            response.json(api)
        )
        .then(data => {
            fillImages(data);
            fillVideos(data);
            fillMinistered(data);
        })
    
}

fillContent();

