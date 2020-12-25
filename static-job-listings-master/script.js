let _body = document.querySelector('body');
let _tagList = document.querySelector('.tag-list');
let _selectedList = [];

const selectTag = (tagName) => {
    _selectedList.push(tagName);
    createNewTag(tagName);
    showSelected();
}

const deleteTag = (tagName, newTag) => {
    _selectedList.splice(_selectedList.indexOf(tagName), 1);
    newTag.remove();
    showSelected();
}

const showSelected = () => {
    let allCards = document.querySelectorAll('.card');
    for (let itemCard of allCards){
        let showCard = false;
        if (_selectedList.length === 0){
            showCard = true;
        } else {
            let allTags = itemCard.querySelectorAll('.tag-box');
            let allTagsList = [];
            for (let itemTagBox of allTags){
                allTagsList.push(itemTagBox.innerHTML);
            }
            showCard = _selectedList.every(i => allTagsList.includes(i));
        }

        if (showCard){
            itemCard.style.display = 'flex';
        } else {
            itemCard.style.display = 'none';
        }
    }
}

//--------------------------------------------------------------------
//--------------------------------------------------------------------
const createNewTag = (tagName) => {
    let newTag = document.createElement('div');
    newTag.classList.add('selected-tag');

        let _p = document.createElement('p');
        _p.innerHTML = tagName;
        newTag.appendChild(_p);

        let _xDiv = document.createElement('div');
        _xDiv.classList.add('x-icon');
        _xDiv.addEventListener('click', () => {
            deleteTag(tagName, newTag);
        });
            let _xDivImg = document.createElement('img');
            _xDivImg.src = './images/icon-remove.svg';
            _xDivImg.alt = 'remove icon';
            _xDiv.appendChild(_xDivImg);
        newTag.appendChild(_xDiv);
        
    _tagList.appendChild(newTag);
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
const createNewCard = (companyName, logoUrl, newTag, featuredTag, positionName, postedAtTxt, contractTxt, locationTxt, tagList) => {
    let newCard = document.createElement('div');
    newCard.classList.add('card');

        let _info = document.createElement('div');
        _info.classList.add('info');

            let _logo = document.createElement('img');
            _logo.src = logoUrl;
            _info.appendChild(_logo);

            let _data = document.createElement('div');
            _data.classList.add('data');

                let _top = document.createElement('div');
                _top.classList.add('top');
                    let _top_h2 = document.createElement('h2');
                    _top_h2.innerHTML = companyName;
                    _top.appendChild(_top_h2);

                    if (newTag) {
                        let _top_new = document.createElement('div');
                        _top_new.classList.add('css-box-new');
                        _top_new.innerHTML = 'new!';
                        _top.appendChild(_top_new);
                    }
                    if (featuredTag) {
                        let _top_featured = document.createElement('div');
                        _top_featured.classList.add('css-box-featured');
                        _top_featured.innerHTML = 'Featured';
                        _top.appendChild(_top_featured);
                    }
                _data.appendChild(_top);
                
                let _data_h1 = document.createElement('h1');
                _data_h1.innerHTML = positionName;
                _data.appendChild(_data_h1);

                let _data_p = document.createElement('p');
                _data_p.innerHTML = postedAtTxt + ' - ' + contractTxt + ' - ' + locationTxt;
                _data.appendChild(_data_p);
            _info.appendChild(_data);
            
        newCard.appendChild(_info);
        
        let _tags = document.createElement('div');
        _tags.classList.add('tags');
            
            for (item of tagList) {
                let _tags_tagBox = document.createElement('div');
                _tags_tagBox.classList.add('tag-box');
                _tags_tagBox.innerHTML = item;
                _tags_tagBox.addEventListener('click', () => {
                    selectTag(_tags_tagBox.innerHTML);
                });
                _tags.appendChild(_tags_tagBox);
            }
        newCard.appendChild(_tags);
    
    _body.appendChild(newCard);
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------

function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

loadJSON(function(json) {
    json.forEach((obj) => {
        let tagList = [obj.role, obj.level, ...obj.languages, ...obj.tools];

        createNewCard(obj.company, obj.logo, obj.new, obj.featured, obj.position, obj.postedAt, obj.contract, obj.location, tagList);
    })
});
