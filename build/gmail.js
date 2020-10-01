let urlPrimary = 'https://polar-reaches-49806.herokuapp.com/api?page=1&category=primary';
let urlSocial = 'https://polar-reaches-49806.herokuapp.com/api?page=1&category=social';
let urlPromotions = 'https://polar-reaches-49806.herokuapp.com/api?page=1&category=promotions';
const primaryEmails = {};
const socialEmails = {};
const promotionsEmails = {};
var keyArray = [];

fetch(urlPrimary)
.then(response => response.json())
.then((output) => {
    for(let i=0;i<output.items.length;i++){
        primaryEmails[i] = output.items[i]
    }
    displayData(primaryEmails);
})
.catch(error => { throw error });

fetch(urlSocial)
.then(response => response.json())
.then((output) => {
    for(let i=0;i<output.items.length;i++){
      socialEmails[i] = output.items[i]
    }
})
.catch(error => { throw error });

fetch(urlPromotions)
.then(response => response.json())
.then((output) => {
    for(let i=0;i<output.items.length;i++){
      promotionsEmails[i] = output.items[i]
    }
})
.catch(error => { throw error });

function displayData(email_category_dataset){
  keyArray = [];
    for(let key in email_category_dataset){
        if(!email_category_dataset[key].tags.isTrash){
            if(!keyArray.includes(Number(key))){
              keyArray.push(Number(key));
              createElements(key, email_category_dataset);
            }
        }
    }
    displayDataStarred(email_category_dataset);
}

function displayDataStarred(email_category_dataset_starred){
  for(let key in email_category_dataset_starred){
      if(email_category_dataset_starred[key].tags.isStarred){
          document.querySelectorAll('.ul-li-list #child3')[key].style.color = '#fe7e00';
      }
  }
}

displayData(primaryEmails);
displayDataStarred(primaryEmails);

document.body.addEventListener('click', function(event){
    const id = event.target.getAttribute('id');

    // THIS SECTION IS FOR PRIMARY CATEGORY EMAILS
    if(id === 'primary'){
      displayData(primaryEmails);
      if(!event.target.className.includes('active-bot-red')){
        document.querySelectorAll('.nav-list').forEach(item => {
            item.classList.remove('active-bot-red');
        })
        event.target.classList.add('active-bot-red');
        primaryAndInbox();
      }
    }

    // THIS SECTION IS FOR SOCIAL CATEGORY EMAILS
    if(id === 'social'){
      document.querySelectorAll('#email-ul-list .ul-li-list').forEach(item => {
        item.remove();
      })
      displayData(socialEmails);
        if(!event.target.className.includes('active-bot-red')){
            document.querySelectorAll('.nav-list').forEach(item => {
                item.classList.remove('active-bot-red');
            })
            event.target.classList.add('active-bot-red');
            createElements(socialEmails);
        }
    }

    // THIS SECTION IS FOR PROMOTIONS CATEGORY EMAILS
    if(id === 'promotions'){
      document.querySelectorAll('#email-ul-list .ul-li-list').forEach(item => {
        item.remove();
      })
      displayData(promotionsEmails);
        if(!event.target.className.includes('active-bot-red')){
            document.querySelectorAll('.nav-list').forEach(item => {
                item.classList.remove('active-bot-red');
            })
            event.target.classList.add('active-bot-red')
            createElements(promotionsEmails);
        }
    }

    // THIS SECTION IS FOR SELECING INDIVIDUAL EMAILS IN THE EMAIL-LIST AND TRASHING THEM
    if(id === 'trash-email'){
        document.querySelectorAll('#email-ul-list .ul-li-list input').forEach(item => {
            if(item.checked){
                item.parentElement.remove();
                document.querySelector('#trash-counter').innerText++;
                primaryEmails[item.parentElement.getAttribute('id')].tags.isTrash = true;
            }
        })
    }

    // THIS SECTION IS FOR CLICKING LEFT SIDE-BAR INBOX ICON AND DISPLAYING ALL EMAILS
    if(id === 'sidebar-inbox-icon'){
      document.querySelector('.email-content-back-button').style.display = 'none';
      document.querySelector('.main-top-left-checkbox-down').style.display = 'block';
      undisplayMainTopLeft();
      primaryAndInbox();
    }

    // THIS SECTION IS FOR CLICKING LEFT SIDE-BAR TRASH ICON AND DISPLAYING ALL TRASHED EMAILS
    if(id === 'sidebar-trash-icon'){
        document.querySelectorAll('#email-ul-list .ul-li-list').forEach(item => {
            item.remove();
        })
        filterTrashedEmailsFromEachCategory(primaryEmails);
        filterTrashedEmailsFromEachCategory(socialEmails);
        filterTrashedEmailsFromEachCategory(promotionsEmails);
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

    // THIS SECTION IS FOR REFRESHING EMAIL-LIST SCREEN AND FETCH IF THERE IS ANY NEW EMAILS
    if(id === 'main-top-left-refresh'){
        // document.querySelector('.main-top-middle').classList.toggle('main-top-middle-on-off')
        document.querySelector('.main-top-middle').style.display = 'block'
        setTimeout(function () {
            document.querySelector('.main-top-middle').style.display = 'none';
        }, 1500);
    }

    // THIS SECTION IS FOR CHECK MARKING ALL EMAILS AT ONCE IN THE CURRENT SCREEN
    if(id === 'main-top-checkbox'){
        if(document.querySelector('#main-top-checkbox').checked){
            document.querySelectorAll('.ul-li-list input').forEach(item => item.checked = true)
            displayMainTopLeft();
        } else {
            document.querySelectorAll('.ul-li-list input').forEach(item => item.checked = false)
            undisplayMainTopLeft();
        }
    }

    // THIS SECTION IS FOR CLICKING ANY CHECKBOX ELEMENT IN THE EMAIL-LIST AND DISPLAY/UNDISPLAY A DIV IN THE MAIN-TOP-LEFT SECTION
    if(id === 'child2'){
        if(clickingIEachCheckbox()){
            displayMainTopLeft();
        } else {
            undisplayMainTopLeft();
        }
    }

    // THIS SECTION IS FOR DISPLAYING ALL OF THE STARRED EMAILS IN ALL OF THE CATEGORIES
    if(id === 'sidebar-starred-icon'){
        document.querySelectorAll('#email-ul-list .ul-li-list').forEach(item => {
            item.remove();
        })
        filterStarredEmailsFromEachCategory(primaryEmails);
        filterStarredEmailsFromEachCategory(socialEmails);
        filterStarredEmailsFromEachCategory(promotionsEmails);
    }

    // THIS SECTION IS FOR CLICKING EACH EMAIL IN THE EMAIL-LIST
    if(clickingIEachLists(id)){
        document.querySelector('.email-body').style.display = 'none';        
        document.querySelector('.email-content').style.display = 'block';
        document.querySelector('.email-content-back-button').style.display = 'block';
        document.querySelector('.main-top-left-checkbox-down').style.display = 'none';
        displayMainTopLeft();
        for(let key in primaryEmails){
          if(key === id){
            document.querySelector('.email-content-title').innerHTML = primaryEmails[key].messageTitle
            document.querySelector('.email-content-middle-sender-info').innerHTML = primaryEmails[key].senderName + ' ' + primaryEmails[key].senderEmail
            document.querySelector('.email-content-bottom').innerHTML = primaryEmails[key].messages[0].message
          }
        }
    }

    // THIS SECTION IS FOR GOING BACK TO THE MAIN INBOX AFTER ACCESSING ANY EMAIL
    if(id === 'email-content-back-button'){
        document.querySelector('.email-content-back-button').style.display = 'none';
        document.querySelector('.main-top-left-checkbox-down').style.display = 'block';
        primaryAndInbox();
        undisplayMainTopLeft()
    }

    // THIS SECTION IS FOR SEARCHING EMAILS
    if(id === 'search-icon'){
      if(document.querySelector('#search-input').value !== ""){
        document.querySelectorAll('#email-ul-list .ul-li-list').forEach(item => {
          item.remove();
        })
        searchEachCategoryAndPresentData(primaryEmails)
        searchEachCategoryAndPresentData(socialEmails)
        searchEachCategoryAndPresentData(promotionsEmails)
      }
    }
})

function filterTrashedEmailsFromEachCategory(email_category_dataset){
  for(let key in email_category_dataset){
    if(email_category_dataset[key].tags.isTrash){
        createElements(key, email_category_dataset);
    }
  }
}

function filterStarredEmailsFromEachCategory(email_category_dataset){
  for(let key in email_category_dataset){
    if(email_category_dataset[key].tags.isStarred){
      createElements(key, email_category_dataset);
    }
  }
}

function searchEachCategoryAndPresentData(email_category_dataset){
  for(let key in email_category_dataset){
    let searchArray = []
    for(let item in email_category_dataset[key]){
      if(typeof email_category_dataset[key][item] === 'string'){
          searchArray.push(email_category_dataset[key][item].toLowerCase())
      }
    }
    if(searchArray.some(item => item.includes((document.querySelector('#search-input').value).toLowerCase()))){
      createElements(key, email_category_dataset);
    } 
  }
}

function primaryAndInbox(){
    document.querySelector('.email-content').style.display = 'none';
    document.querySelector('.email-body').style.display = 'block';
    document.querySelectorAll('#email-ul-list .ul-li-list').forEach(item => {
        item.remove();
    })
    displayData(primaryEmails);
}

function clickingIEachCheckbox(){
    let arr = [...document.querySelectorAll('#child2')]
    return arr.some(item => item.checked)
}

function clickingIEachLists(id){
    if(id !== null){
        let arr = [...document.querySelectorAll('.ul-li-list')]
        arr.forEach((item, index) => {
            arr[index] = Number(item.getAttribute('id'))
        })
        console.log(arr)
        if(arr.includes(Number(id))){
            return true
        }
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

function createElements(data_key, dataSet){
    const email_ul_list = document.querySelector('#email-ul-list');

    const email_ul_li_list = document.createElement('li');
    const email_list_child1 = document.createElement('i');
    const email_list_child2 = document.createElement('input');
    const email_list_child3 = document.createElement('i');
    const email_list_child4 = document.createElement('div');
    const email_list_child5 = document.createElement('div');
    const email_list_child6 = document.createElement('div');
    const email_list_child7 = document.createElement('div');

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

    email_list_child4.innerText = dataSet[data_key].senderEmail;
    email_list_child5.innerText = dataSet[data_key].messageTitle;
    email_list_child6.innerText = dataSet[data_key].date.slice(11, 19) + ' PM';
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