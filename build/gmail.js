const primaryEmails = {};
var keyArray = [];

const fetch_output = [
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Seytech Co',
      senderEmail: 'support@seytech.com',
      messageTitle: 'Enrollment start date',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object], [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Heroku',
      senderEmail: 'heroku@heroku.com',
      messageTitle: 'Excited to announce our new feature',      
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Facebook',
      senderEmail: 'facebook@facebook.com',
      messageTitle: 'Today is your friends birthday!',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: false },
      senderName: 'Michael Dunn',
      senderEmail: 'm@dunn.com',
      messageTitle: "Don't forget about our meeting today...",
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'AICamp',
      date: '2020-09-29T15:20:26.708Z',
      senderEmail: 'admin@atiglobal.org',
      messageTitle: 'New AI Course Scheduled: 4-Weeks Practical Python for Machine Learning.',
      isRead: false,
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Uber',
      senderEmail: 'support@uber.com',
      messageTitle: 'This offer ends soon',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: true },
      senderName: 'GoFundMe',
      senderEmail: 'hello@marketing.gofundme.com',
      messageTitle: 'Please, your help is needed',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: true, isTrash: false, isSpam: true },
      senderName: 'Zuzanna Kozlecka',
      senderEmail: 'zkozlecka@mail.edu',
      messageTitle: 'Please, your help is needed',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    },
    {
      tags: { isStarred: false, isTrash: false, isSpam: false },
      senderName: 'Chase',
      senderEmail: 'no-reply@alertsp.chase.com',
      messageTitle: 'Your credit card statement is ready',
      isRead: false,
      date: '2020-09-29T15:20:26.708Z',
      messages: [ [Object] ]
    }
  ]

for(let i=0; i<fetch_output.length;i++){
    primaryEmails[i] = fetch_output[i]
}

// console.log(primaryEmails)

function displayData(){
    keyArray = [];
    for(let key in primaryEmails){
        if(!primaryEmails[key].tags.isTrash){
            if(!keyArray.includes(Number(key))){
                keyArray.push(Number(key));
                createElements(key);
            }
        }
    }
    displayDataStarred();
}

function displayDataStarred(){
    for(let key in primaryEmails){
        if(primaryEmails[key].tags.isStarred){
            document.querySelectorAll('.ul-li-list #child3')[key].style.color = '#fe7e00';
        }
    }
}

displayData();
displayDataStarred();
// displayDataSpam();

document.body.addEventListener('click', function(event){
    const id = event.target.getAttribute('id')

    // THIS SECTION
    if(id === 'primary'){
        primaryAndInbox();
    }

    // THIS SECTION
    if(id === 'trash-email'){
        document.querySelectorAll('#email-ul-list .ul-li-list input').forEach(item => {
            if(item.checked){
                item.parentElement.remove();
                document.querySelector('#trash-counter').innerText++;
                primaryEmails[item.parentElement.getAttribute('id')].tags.isTrash = true;
            }
        })
    }

    // THIS SECTION
    if(id === 'sidebar-inbox-icon'){
        primaryAndInbox();
    }

    // THIS SECTION
    if(id === 'sidebar-trash-icon'){
        document.querySelectorAll('#email-ul-list .ul-li-list').forEach(item => {
            item.remove();
        })
        for(let key in primaryEmails){
            if(primaryEmails[key].tags.isTrash){
                createElements(key);
            }
        }
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
            document.querySelectorAll('.ul-li-list input').forEach(item => item.checked = true)
            displayMainTopLeft();
        } else {
            document.querySelectorAll('.ul-li-list input').forEach(item => item.checked = false)
            undisplayMainTopLeft();
        }
    }

    // THIS SECTION ...
    if(id === 'child2'){
        if(clickingIEachCheckbox()){
            displayMainTopLeft();
        } else {
            undisplayMainTopLeft();
        }
    }

    // THIS SECTION ...
    if(id === 'sidebar-starred-icon'){
        document.querySelectorAll('#email-ul-list .ul-li-list').forEach(item => {
            item.remove();
        })
        for(let key in primaryEmails){
            if(primaryEmails[key].tags.isStarred){
                createElements(key);
            }
        }
    }

    // THIS SECTION ...
    if(clickingIEachLists(id)){
        document.querySelector('.email-body').style.display = 'none';        
        document.querySelector('.email-content').style.display = 'block';
        document.querySelector('.email-content-back-button').style.display = 'block';
        document.querySelector('.main-top-left-checkbox-down').style.display = 'none';
        displayMainTopLeft();      
    }

    // THIS SECTION ...
    if(id === 'email-content-back-button'){
        document.querySelector('.email-content-back-button').style.display = 'none';
        document.querySelector('.main-top-left-checkbox-down').style.display = 'block';
        primaryAndInbox();
        undisplayMainTopLeft()
    }
})

function primaryAndInbox(){
    document.querySelector('.email-content').style.display = 'none';
    document.querySelector('.email-body').style.display = 'block';
    document.querySelectorAll('#email-ul-list .ul-li-list').forEach(item => {
        item.remove();
    })
    displayData();
}

function clickingIEachCheckbox(){
    let arr = [...document.querySelectorAll('#child2')]
    return arr.some(item => item.checked)
}

function clickingIEachLists(id){
    let arr = [...document.querySelectorAll('.ul-li-list')]
    arr.forEach((item, index) => {
        arr[index] = Number(item.getAttribute('id'))
    })
    if(arr.includes(Number(id))){
        return true
    }
}

function displayMainTopLeft(){
    document.querySelector('#main-top-left').classList.remove('main-top-left-before');
    document.querySelector('#main-top-left').classList.add('main-top-left-after');
    document.querySelector('#main-top-left-refresh').style.display = 'none';
    document.querySelector('.main-top-checkbox-checked-div').style.display = 'block';
}

function undisplayMainTopLeft(){
    document.querySelector('#main-top-left').classList.add('main-top-left-before');
    document.querySelector('#main-top-left').classList.remove('main-top-left-after');
    document.querySelector('#main-top-left-refresh').style.display = 'block';
    document.querySelector('.main-top-checkbox-checked-div').style.display = 'none';
}

function createElements(data_key){
    // console.log(keyArray)
    const email_ul_list = document.querySelector('#email-ul-list');

    const email_ul_li_list = document.createElement('li');
    const email_list_child1 = document.createElement('i');
    const email_list_child2 = document.createElement('input');
    const email_list_child3 = document.createElement('i');
    const email_list_child4 = document.createElement('div');
    const email_list_child5 = document.createElement('div');
    const email_list_child6 = document.createElement('div');
    const email_list_child7 = document.createElement('div');

    // console.log(email_ul_list);

    email_ul_li_list.setAttribute('class', 'ul-li-list');
    email_list_child1.setAttribute('class', 'common first-last fa fa-ellipsis-v');
    email_list_child2.setAttribute('class', 'common');
    email_list_child2.setAttribute('type', 'checkbox');
    email_list_child3.setAttribute('class', 'common fa fa-star');
    email_list_child4.setAttribute('class', 'common');
    email_list_child5.setAttribute('class', 'common');
    email_list_child6.setAttribute('class', 'common');
    email_list_child7.setAttribute('class', 'common first-last');

    email_ul_li_list.setAttribute('id', data_key);
    email_list_child1.setAttribute('id', 'child1');
    email_list_child2.setAttribute('id', 'child2');
    email_list_child3.setAttribute('id', 'child3');
    email_list_child4.setAttribute('id', 'child4');
    email_list_child5.setAttribute('id', 'child5');
    email_list_child6.setAttribute('id', 'child6');
    email_list_child7.setAttribute('id', 'child7');

    email_list_child4.innerText = primaryEmails[data_key].senderEmail;
    email_list_child5.innerText = primaryEmails[data_key].messageTitle;
    email_list_child6.innerText = primaryEmails[data_key].date.slice(11, 19) + ' PM';
    email_list_child7.innerHTML = '<img src="./images/archive.png" alt="" /> <img src="./images/trash-icon.png" alt=""/><img src="./images/mark_as_unread.png" alt="" /><img src="./images/snooze-icon.png" alt=""/>';

    email_ul_li_list.appendChild(email_list_child1);    
    email_ul_li_list.appendChild(email_list_child2);    
    email_ul_li_list.appendChild(email_list_child3);    
    email_ul_li_list.appendChild(email_list_child4);    
    email_ul_li_list.appendChild(email_list_child5);    
    email_ul_li_list.appendChild(email_list_child6);    
    email_ul_li_list.appendChild(email_list_child7);

    email_ul_list.appendChild(email_ul_li_list)
}


// let urlPrimary = 'https://polar-reaches-49806.herokuapp.com/api?page=1&category=primary';
// let urlSocial = 'https://polar-reaches-49806.herokuapp.com/api?page=1&category=social';
// let urlPromotions = 'https://polar-reaches-49806.herokuapp.com/api?page=1&category=promotions';
// const primaryEmails = {};
// const initialEmails = {};
// const socialEmails = {};
// const promotionsEmails = {};
// const trashObject = {};
// // const inboxObject = {};
// const spamObject = {};
// const starredObject = {};

// fetch(urlPrimary)
// .then(response => response.json())
// .then((output) => {
//     for(let i=0;i<output.items.length;i++){
//         primaryEmails[i] = output.items[i]
//     }
//     // console.log('Length of output.items', output.items.length)

//     displayData();
// })
// .catch(error => { throw error });

// function displayData(){

//     // console.log('fetch_output inside the displayData function', fetch_output)
//     console.log('primaryEmails inside the displayData function', primaryEmails)
//     // const primaryBtn = document.getElementById('primary')
//     const mainUl = document.getElementById('email-list-ul-el')
    
//     for(let key in primaryEmails){
//         if(!primaryEmails[key].tags.isTrash){
//             initialEmails[key] = primaryEmails[key]
//         }
//     }
//     createElements(initialEmails);

// document.querySelector('.main-ul-li-class').addEventListener('mouseover', function(e){
//     if(e.target.tagName === 'LI'){
//         document.querySelectorAll('.main-ul-li-class').forEach(element => {
//             element.firstChild.style.display = 'none';
//             element.lastChild.style.display = 'none';
//         });
//         e.target.firstChild.classList.add('first-child')
//         e.target.lastChild.classList.add('last-child')
//     }
// })


// document.body.addEventListener('click', event => {
//     const id = event.target.getAttribute('id');
//     // const classNames = event.target.getAttribute('class')

//     // THIS SECTION FOR PRIMARY, SOCIAL, AND PROMOTION BUTTONS
//     if(id === 'primary'){
//         if(!event.target.className.includes('active-bot-red')){
//             document.querySelectorAll('.nav-list').forEach(item => {
//                 item.classList.remove('active-bot-red');
//             })
//             event.target.classList.add('active-bot-red')
//             createElements(primaryEmails);
//         }
//     }

//     // THIS SECTION FOR PRIMARY, SOCIAL, AND PROMOTION BUTTONS
//     if(id === 'social'){
//         if(!event.target.className.includes('active-bot-red')){
//             document.querySelectorAll('.nav-list').forEach(item => {
//                 item.classList.remove('active-bot-red');
//             })
//             event.target.classList.add('active-bot-red')
//             createElements(primaryEmails);
//         }
//     }

//     // THIS SECTION FOR PRIMARY, SOCIAL, AND PROMOTION BUTTONS
//     if(id === 'promotions'){
//         if(!event.target.className.includes('active-bot-red')){
//             document.querySelectorAll('.nav-list').forEach(item => {
//                 item.classList.remove('active-bot-red');
//             })
//             event.target.classList.add('active-bot-red')
//             createElements(primaryEmails);
//         }
//     }

//     // THIS SECTION IS FOR CHECKING AND REMOVING EACH EMAIL
//     if(id === 'trash-email'){
//         document.querySelectorAll('.main-ul-li-class input').forEach(item => {
//             if(item.checked){
//                 // trashObject[item.parentElement.getAttribute('data-id')] = item.parentElement;
//                 // console.log(trashObject);
//                 // console.log(item.parentElement.getAttribute('data-id'))
//                 // console.log('lenght of main-ul-li-class elements - trash icon', document.querySelectorAll('.main-ul-li-class').length)
//                 // trashObject[item.parentElement.getAttribute('data-id')] = primaryEmails[item.parentElement.getAttribute('data-id')]
//                 // document.querySelector('#trash-counter').innerText = Object.keys(trashObject).length
//                 primaryEmails[item.parentElement.getAttribute('data-id')].tags.isTrash = true;
//                 item.parentElement.remove();
//                 // delete primaryEmails[item.parentElement.getAttribute('data-id')]
//             }
//             let counter = 0;

//             for(let key in primaryEmails){
//                 if(primaryEmails[key].tags.isTrash){
//                     // console.log('isTrash true', key)
//                     counter++;
//                 }
//             }
//             document.getElementById('trash-counter').innerText = counter;
//         })
//     }

//     // THIS SECTION IS FOR OPENING TRASH AND DISPLAYING TRASHED EMAILS
//     if(id === 'sidebar-trash-icon'){
//         // console.log('clicked trash yay')
//         document.querySelectorAll('.main-ul-li-class').forEach(item => {
//             item.remove();
//         })
//         // console.log(document.querySelectorAll('.mainUlLiClass').length)
//         // createElements(trashObject)
//         document.querySelector('#nav-ul-el').style.display = 'none';
//         for(let key in primaryEmails){
//             if(primaryEmails[key].tags.isTrash){
//                 trashObject[key] = primaryEmails[key]
//             }
//         }
//         console.log(trashObject);
//         createElements(trashObject);

//     }

//     // THIS SECTION IS FOR OPENING INBOX
//     if(id === 'sidebar-inbox-icon'){
//         console.log('clicked inbox yay')
//         // console.log('lenght of main-ul-li-class elements - inbox icon', document.querySelectorAll('.main-ul-li-class').length)

//         // document.querySelectorAll('.mainUlLiClass').forEach(item => {
//         //     item.remove();
//         // })
//         // console.log(document.querySelectorAll('.mainUlLiClass').length)
//         // console.log('primary email result after pressing inbox icon =', primaryEmails)
//         // for(let key in primaryEmails){
//         //     if
//         // }
//         let inboxObject = {};
//         console.log(inboxObject)
//         for(let key in primaryEmails){
//             if(!primaryEmails[key].tags.isTrash){
//                 inboxObject[key] = primaryEmails[key];
//             }
//         }
//         console.log(inboxObject);
//         createElements(inboxObject);
//         document.querySelector('#nav-ul-el').style.display = '';
//         // console.log(Object.keys(primaryEmails).length)
//     }

//     // THIS SECTION IS FOR DISPLAYING NEW EMAIL COMPOSING SCREEN
//     if(id === 'compose-plus-icon' || id === 'compose-text'){
//         document.querySelector('.email-compose-screen').style.display = 'block'
//     }
//     if(id === 'close-new-message-screen'){
//         document.querySelector('.email-compose-screen').style.display = 'none'
//     }

//     // THIS SECTION IS FOR DISPLAYING OPTIONS FOR MAIN-TOP-LEFT-ARROW-DOWN ICON
//     if(id === 'main-top-left-fa-arrow-down'){
//         document.querySelector('.main-top-left-checkbox-display').classList.toggle('main-top-left-checkbox-display-on-off')
//     }

//     // THIS SECTION IS ...
//     if(id === 'main-top-left-refresh'){
//         // document.querySelector('.main-top-middle').classList.toggle('main-top-middle-on-off')
//         document.querySelector('.main-top-middle').style.display = 'block'
//         setTimeout(function () {
//             document.querySelector('.main-top-middle').style.display = 'none';
//         }, 1500);
//     }

//     // THIS SECTION IS FOR CHECKING ALL EMAILS AT ONCE IN THE CURRENT SCREEN
//     if(id === 'main-top-checkbox'){
//         if(document.querySelector('#main-top-checkbox').checked){
//             document.querySelectorAll('.main-ul-li-class input').forEach(item => {
//                 item.checked = true;
//             })
//             document.querySelector('#main-top-left').classList.remove('main-top-left-before');
//             document.querySelector('#main-top-left').classList.add('main-top-left-after');
//             document.querySelector('#main-top-left-refresh').style.display = 'none';
//             document.querySelector('.main-top-checkbox-checked-div').style.display = 'block'
//         } else {
//             document.querySelectorAll('.main-ul-li-class input').forEach(item => {
//                 item.checked = false;
//             })
//             document.querySelector('#main-top-left').classList.add('main-top-left-before');
//             document.querySelector('#main-top-left').classList.remove('main-top-left-after');
//             document.querySelector('#main-top-left-refresh').style.display = 'block';
//             document.querySelector('.main-top-checkbox-checked-div').style.display = 'none';
//         }
//     }

//     // THIS SECTION IS FOR SELECTING INDIVIDUAL INPUT ELEMENTS IN THE EMAIL LIST
//     if(document.getElementById(id).checked){
//         // console.log('you checked single input inside list el')
//         document.querySelector('#main-top-left').classList.remove('main-top-left-before');
//         document.querySelector('#main-top-left').classList.add('main-top-left-after');
//         document.querySelector('#main-top-left-refresh').style.display = 'none';
//         document.querySelector('.main-top-checkbox-checked-div').style.display = 'block'
//     } else {
//         document.querySelector('#main-top-left').classList.add('main-top-left-before');
//         document.querySelector('#main-top-left').classList.remove('main-top-left-after');
//         document.querySelector('#main-top-left-refresh').style.display = 'block';
//         document.querySelector('.main-top-checkbox-checked-div').style.display = 'none';
//     }

// })