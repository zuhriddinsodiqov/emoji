
fetch(
'https://emoji-api.com/emojis?access_key=06329b2ab0dddae7c42e98547ba496f093548115'
)
.then((response) => response.json())
.then((data) =>{
    const card = document.querySelector('.card');
    data.forEach(item =>{
        const emojiItem = document.createElement('div')
        const emojiTitle = document.createElement('p')
        emojiItem.innerText = item.character 
        emojiTitle.innerText = item.unicodeName 
        emojiItem.classList.add('emojiItem');
        card.append(emojiItem);
        emojiItem.append(emojiTitle);

    });
});

const searchInput = document.querySelector('input'),
    btn = document.querySelector('button');

    btn.addEventListener('click' , e =>{
        e.preventDefault();
        const searchValue = searchInput.value.toLowerCase();
        const emojes = document.querySelectorAll('.emojiItem');

        emojes.forEach(emoji  =>{
            const emojiTitle = emoji.querySelector('p').innerText.toLowerCase(); 
            if(emojiTitle.includes(searchValue)){
                emoji.style.display = 'block'
                searchInput.value = ' ';
            }
            else{
                emoji.style.display = 'none'
            }
        })
    })