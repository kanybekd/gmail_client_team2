let url = 'https://polar-reaches-49806.herokuapp.com/api?page=1&category=primary';
let primaryEmails = {};
let trashObject = {};
let spamObject = {};
let starredObject = {};


fetch(url)
.then(response => response.json())
.then((output) => {
    console.log(output)
    displayData(output.items);
})
.catch(error => { throw error });

function displayData(fetch_output){
    // let trashCounter = 0;
    
    for(let i=0;i<fetch_output.length;i++){
        primaryEmails[i] = fetch_output[i]
    }

    // console.log(primaryEmails)

    const primaryBtn = document.getElementById('primaryBtn')
    const mainUl = document.getElementById('mainUlEl')
    
    createElements(primaryEmails);
    
    // mainUl.addEventListener('mouseover', function(e){
    //     if(e.target.tagName === 'LI'){
    //         document.querySelectorAll('.mainUlLiClass').forEach(element => {
    //             element.firstChild.style.display = 'none'
    //             element.lastChild.style.display = 'none'
    //         });
    //         e.target.firstChild.style.display = 'block'
    //         e.target.firstChild.style.position = 'absolute'
    //         e.target.firstChild.style.left = '0'
    
    //         e.target.lastChild.style.display = 'block'
    //         e.target.lastChild.style.position = 'absolute'
    //         e.target.lastChild.style.right = '0'
    //         e.target.lastChild.style.opacity = '1'
    //         e.target.lastChild.style.backgroundColor = '#F4F7F7'
    //     }
    // })
    

    document.body.addEventListener('click', event => {
        const id = event.target.getAttribute('id')
        // const classNames = event.target.getAttribute('class')

        // THIS SECTION FOR PRIMARY, SOCIAL, AND PROMOTION BUTTONS
        if(id === 'primaryBtn' || id === 'socialBtn' || id === 'promoBtn'){
            if(!event.target.className.includes('active-bot-red')){
                document.querySelectorAll('.navlist').forEach(item => {
                    item.classList.remove('active-bot-red');
                })
                event.target.classList.add('active-bot-red')
                createElements();
            }
        }

        // THIS SECTION IS FOR CHECKING AND REMOVING EACH EMAIL
        if(id === 'trash-email'){
            document.querySelectorAll('.mainUlLiClass input').forEach(item => {
                if(item.checked){
                    // trashObject[item.parentElement.getAttribute('data-id')] = item.parentElement;
                    // console.log(trashObject);
                    console.log(item.parentElement.getAttribute('data-id'))
                    primaryEmails[item.parentElement.getAttribute('data-id')].tags.isTrash = true;
                    trashObject[item.parentElement.getAttribute('data-id')] = primaryEmails[item.parentElement.getAttribute('data-id')]
                    document.querySelector('#trash-counter').innerText = Object.keys(trashObject).length
                    item.parentElement.remove();
                    delete primaryEmails[item.parentElement.getAttribute('data-id')]
                }
            })
        }

        // THIS SECTION IS FOR OPENING TRASH AND DISPLAYING TRASHED EMAILS
        if(id === 'sidebar-trash-icon'){
            console.log('clicked trash yay')
            document.querySelectorAll('.mainUlLiClass').forEach(item => {
                item.remove();
            })
            // console.log(document.querySelectorAll('.mainUlLiClass').length)
            createElements(trashObject)
            document.querySelector('#navUlEl').style.display = 'none'
        }

        // THIS SECTION IS FOR OPENING INBOX
        if(id === 'sidebar-inbox-icon'){
            console.log('clicked inbox yay')
            // document.querySelectorAll('.mainUlLiClass').forEach(item => {
            //     item.remove();
            // })
            // console.log(document.querySelectorAll('.mainUlLiClass').length)
            console.log('primary email result after pressing inbox icon =', primaryEmails)
            
            createElements(primaryEmails)
            document.querySelector('#navUlEl').style.display = ''
            console.log(Object.keys(primaryEmails).length)
        }

    })
    
    function createElements(dataSet){
        const keyArray = [];

        for(let key in dataSet){
            if(!keyArray.includes(Number(key))){
                keyArray.push(Number(key));
                // console.log(keyArray)
                const mainUlLi = document.createElement('li')
                mainUlLi.setAttribute('class', 'mainUlLiClass')
                mainUlLi.setAttribute('data-id', key)
    
                const diceIcon = document.createElement('i')
                diceIcon.setAttribute('id', `${key}a`)
                diceIcon.setAttribute('class', 'common fa fa-ellipsis-v')
                diceIcon.style.display = 'none';
                mainUlLi.appendChild(diceIcon)
                
                const input = document.createElement('input')
                input.setAttribute('id', `${key}b`)
                input.setAttribute('class', 'common')
                input.setAttribute('type', 'checkbox')
                input.style.marginLeft = '15px'
                mainUlLi.appendChild(input)
        
                const starIcon = document.createElement('i')
                starIcon.setAttribute('id', `${key}c`)
                starIcon.setAttribute('class', 'common fa fa-star')
                mainUlLi.appendChild(starIcon)
        
                const senderEmailDiv = document.createElement('div')
                senderEmailDiv.setAttribute('id', `${key}d`)
                senderEmailDiv.setAttribute('class', 'common senderED')
                senderEmailDiv.innerText = dataSet[key].senderEmail
                mainUlLi.appendChild(senderEmailDiv)
        
                const senderEmailTitleDiv = document.createElement('div')
                senderEmailTitleDiv.setAttribute('id', `${key}e`)
                senderEmailTitleDiv.setAttribute('class', 'common senderETD')
                senderEmailTitleDiv.innerText = dataSet[key].messageTitle
                mainUlLi.appendChild(senderEmailTitleDiv)
        
                const receiveTime = document.createElement('div')
                receiveTime.setAttribute('id', `${key}f`)
                receiveTime.setAttribute('class', 'common')
                // receiveTime.innerText = primaryEmails[key].time.toLocaleTimeString().replace(/:\d+ /, ' ');
                receiveTime.innerText = dataSet[key].date.slice(11, 19) + ' PM';
                mainUlLi.appendChild(receiveTime)
    
                const additionalBtns = document.createElement('div')
                additionalBtns.setAttribute('id', `${key}g`)
                additionalBtns.setAttribute('class', 'common')
                additionalBtns.style.display = 'none';
                additionalBtns.innerText = "Hello Philadelphia"
                mainUlLi.appendChild(additionalBtns)
        
                mainUl.appendChild(mainUlLi) 
            }
        }
    }
}

// function createElements2(){
//     for(let key in primaryEmails2){
//         if(!keyArray.includes(Number(key))){
//             keyArray.push(Number(key))
//             // console.log(keyArray)
//             const mainUlLi = document.createElement('li')
//             mainUlLi.setAttribute('class', 'mainUlLiClass')
//             mainUlLi.setAttribute('data-id', key)

//             const diceIcon = document.createElement('i')
//             diceIcon.setAttribute('id', `${key}a`)
//             diceIcon.setAttribute('class', 'common fa fa-ellipsis-v')
//             diceIcon.style.display = 'none';
//             mainUlLi.appendChild(diceIcon)
            
//             const input = document.createElement('input')
//             input.setAttribute('id', `${key}b`)
//             input.setAttribute('class', 'common')
//             input.setAttribute('type', 'checkbox')
//             input.style.marginLeft = '15px'
//             mainUlLi.appendChild(input)
    
//             const starIcon = document.createElement('i')
//             starIcon.setAttribute('id', `${key}c`)
//             starIcon.setAttribute('class', 'common fa fa-star')
//             mainUlLi.appendChild(starIcon)
    
//             const senderEmailDiv = document.createElement('div')
//             senderEmailDiv.setAttribute('id', `${key}d`)
//             senderEmailDiv.setAttribute('class', 'common senderED')
//             senderEmailDiv.innerText = primaryEmails[key].senderEmail
//             mainUlLi.appendChild(senderEmailDiv)
    
//             const senderEmailTitleDiv = document.createElement('div')
//             senderEmailTitleDiv.setAttribute('id', `${key}e`)
//             senderEmailTitleDiv.setAttribute('class', 'common senderETD')
//             senderEmailTitleDiv.innerText = primaryEmails[key].messageTitle
//             mainUlLi.appendChild(senderEmailTitleDiv)
    
//             const receiveTime = document.createElement('div')
//             receiveTime.setAttribute('id', `${key}f`)
//             receiveTime.setAttribute('class', 'common')
//             // receiveTime.innerText = primaryEmails[key].time.toLocaleTimeString().replace(/:\d+ /, ' ');
//             receiveTime.innerText = primaryEmails[key].date.slice(11, 19) + ' PM';
//             mainUlLi.appendChild(receiveTime)

//             const additionalBtns = document.createElement('div')
//             additionalBtns.setAttribute('id', `${key}g`)
//             additionalBtns.setAttribute('class', 'common')
//             additionalBtns.style.display = 'none';
//             additionalBtns.innerText = "Hello Philadelphia"
//             mainUlLi.appendChild(additionalBtns)
    
//             mainUl.appendChild(mainUlLi) 
//         }
//     }
// }
// }
