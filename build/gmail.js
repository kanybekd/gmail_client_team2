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

    const primaryBtn = document.getElementById('primary')
    const mainUl = document.getElementById('email-list-ul-el')
    
    createElements(primaryEmails);

    mainUl.addEventListener('mouseover', function(e){
        if(e.target.tagName === 'LI'){
            document.querySelectorAll('.main-ul-li-class').forEach(element => {
                element.firstChild.style.display = 'none';
                element.lastChild.style.display = 'none';
            });
            e.target.firstChild.style.display = 'block';
            e.target.firstChild.style.position = 'absolute';
            e.target.firstChild.style.left = '0';
            e.target.lastChild.style.backgroundColor = '#F4F7F7';
    
            e.target.lastChild.style.display = 'block';
            e.target.lastChild.style.position = 'absolute';
            e.target.lastChild.style.right = '0';
            e.target.lastChild.style.backgroundColor = '#F4F7F7';
        }
    })
    

    document.body.addEventListener('click', event => {
        const id = event.target.getAttribute('id')
        // const classNames = event.target.getAttribute('class')

        // THIS SECTION FOR PRIMARY, SOCIAL, AND PROMOTION BUTTONS
        if(id === 'primary' || id === 'social' || id === 'promotions'){
            if(!event.target.className.includes('active-bot-red')){
                document.querySelectorAll('.nav-list').forEach(item => {
                    item.classList.remove('active-bot-red');
                })
                event.target.classList.add('active-bot-red')
                createElements();
            }
        }

        // THIS SECTION IS FOR CHECKING AND REMOVING EACH EMAIL
        if(id === 'trash-email'){
            document.querySelectorAll('.main-ul-li-class input').forEach(item => {
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
            document.querySelectorAll('.main-ul-li-class').forEach(item => {
                item.remove();
            })
            // console.log(document.querySelectorAll('.mainUlLiClass').length)
            createElements(trashObject)
            document.querySelector('#nav-ul-el').style.display = 'none'
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
            document.querySelector('#nav-ul-el').style.display = ''
            console.log(Object.keys(primaryEmails).length)
        }

        // THIS SECTION IS FOR DISPLAYING NEW EMAIL COMPOSING SCREEN
        if(id === 'compose-plus-icon' || id === 'compose-text'){
            document.querySelector('.email-compose-screen').style.display = 'block'
        }
        if(id === 'close-new-message-screen'){
            document.querySelector('.email-compose-screen').style.display = 'none'
        }

        // THIS SECTION IS FOR DISPLAYING OPTIONS FOR MAIN-TOP-LEFT-ARROW-DOWN ICON
        if(id === 'main-top-left-fa-arrow-down'){
            document.querySelector('.main-top-left-checkbox-display').classList.toggle('main-top-left-checkbox-display-on-off')
        }

        // THIS SECTION IS ...
        if(id === 'main-top-left-refresh'){
            // document.querySelector('.main-top-middle').classList.toggle('main-top-middle-on-off')
            document.querySelector('.main-top-middle').style.display = 'block'
            setTimeout(function () {
                document.querySelector('.main-top-middle').style.display = 'none';
            }, 1500);
        }

        // THIS SECTION IS FOR CHECKING ALL EMAILS AT ONCE IN THE CURRENT SCREEN
        if(id === 'main-top-checkbox'){
            if(document.querySelector('#main-top-checkbox').checked){
                document.querySelectorAll('.main-ul-li-class input').forEach(item => {
                    item.checked = true;
                })
                document.querySelector('#main-top-left').classList.remove('main-top-left-before');
                document.querySelector('#main-top-left').classList.add('main-top-left-after');
                document.querySelector('#main-top-left-refresh').style.display = 'none';
                document.querySelector('.main-top-checkbox-checked-div').style.display = 'block'
            } else {
                document.querySelectorAll('.main-ul-li-class input').forEach(item => {
                    item.checked = false;
                })
                document.querySelector('#main-top-left').classList.add('main-top-left-before');
                document.querySelector('#main-top-left').classList.remove('main-top-left-after');
                document.querySelector('#main-top-left-refresh').style.display = 'block';
                document.querySelector('.main-top-checkbox-checked-div').style.display = 'none';
            }
        }

    })
    
    function createElements(dataSet){
        const keyArray = [];

        for(let key in dataSet){
            if(!keyArray.includes(Number(key))){
                keyArray.push(Number(key));
                // console.log(keyArray)
                const mainUlLi = document.createElement('li');
                mainUlLi.setAttribute('class', 'main-ul-li-class');
                mainUlLi.setAttribute('data-id', key);
    
                const diceIcon = document.createElement('i');
                diceIcon.setAttribute('id', `${key}a`);
                diceIcon.setAttribute('class', 'common first-child fa fa-ellipsis-v');
                diceIcon.style.display = 'none';
                mainUlLi.appendChild(diceIcon);
                
                const input = document.createElement('input');
                input.setAttribute('id', `${key}b`);
                input.setAttribute('class', 'common');
                input.setAttribute('type', 'checkbox');
                input.style.marginLeft = '15px';
                mainUlLi.appendChild(input);
        
                const starIcon = document.createElement('i');
                starIcon.setAttribute('id', `${key}c`);
                starIcon.setAttribute('class', 'common fa fa-star');
                mainUlLi.appendChild(starIcon);
        
                const senderEmailDiv = document.createElement('div');
                senderEmailDiv.setAttribute('id', `${key}d`);
                senderEmailDiv.setAttribute('class', 'common senderED');
                senderEmailDiv.innerText = dataSet[key].senderEmail;
                mainUlLi.appendChild(senderEmailDiv);
        
                const senderEmailTitleDiv = document.createElement('div');
                senderEmailTitleDiv.setAttribute('id', `${key}e`);
                senderEmailTitleDiv.setAttribute('class', 'common senderETD');
                senderEmailTitleDiv.innerText = dataSet[key].messageTitle;
                mainUlLi.appendChild(senderEmailTitleDiv);
        
                const receiveTime = document.createElement('div');
                receiveTime.setAttribute('id', `${key}f`);
                receiveTime.setAttribute('class', 'common');
                // receiveTime.innerText = primaryEmails[key].time.toLocaleTimeString().replace(/:\d+ /, ' ');
                receiveTime.innerText = dataSet[key].date.slice(11, 19) + ' PM';
                mainUlLi.appendChild(receiveTime);
    
                const additionalBtns = document.createElement('div');
                additionalBtns.setAttribute('id', `${key}g`);
                additionalBtns.setAttribute('class', 'common last-child');
                additionalBtns.style.display = 'none';
                // additionalBtns.innerText = "Hello Philadelphia";
                additionalBtns.innerHTML = '<img src="./images/archive.png" alt="" /> <img src="./images/trash-icon.png" alt=""/><img src="./images/mark_as_unread.png" alt="" /><img src="./images/snooze-icon.png" alt=""/>';
                mainUlLi.appendChild(additionalBtns);
        
                mainUl.appendChild(mainUlLi);
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
