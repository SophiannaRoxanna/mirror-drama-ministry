const fillImages = data => {
    const imageHolder = [];
    const imageCont = $('.image-cont');
    console.log(imageCont);

    for (let i = 0; i < data.imageShow.length; i++) {
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <figure class="image-holder" id="image-holder">
                <img src="${data["imageShow"][i].imgUrl}" alt="studio">
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
    console.log(videoCont);

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
    console.log(logoCont);

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



const fillContent = () => {

    const api = "./js/content.json"

    fetch(api)
        .then(response => 
            response.json(api)
        )
        .then(data => {
            console.log(data);
            fillImages(data);
            fillVideos(data);
            fillMinistered(data);
        })
    
}

fillContent();

// modal

