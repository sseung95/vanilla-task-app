// ****** SELECT ITEMS **********
const inputEl = document.querySelector('#grocery');
const formEl = document.querySelector('.grocery-form');
const alertEl = document.querySelector('.alert');
const groceyContainerEl = document.querySelector('.grocery-container');
const groceryListEl = document.querySelector('.grocery-list');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');

let itemList = [];
let editObj; // 수정해야할 객체 담은 변수

// ****** EVENT LISTENERS **********
formEl.addEventListener('submit', submitHandler);
clearBtn.addEventListener('click', clearClickHandler);

// ****** FUNCTIONS **********
function submitHandler(e) {
  e.preventDefault();

  // input에 내용이 없을 때
  if (inputEl.value === '') {
    // 알람
    alert('alert-danger', 'please enter value');
    return;
  }

  const value = inputEl.value;

  // textContent 가 edit 일 때 하는게 맞는걸까?????
  if (submitBtn.textContent === 'edit') {
    editItem(editObj.id, value);
    alert('alert-success', 'value changed');
  } else {
    addItem(value);
    alert('alert-success', 'item added to the list');
  }
  // input 비우기
  inputEl.value = '';
}

function editClickHandler(e) {
  const editBtn = e.target.closest('.edit-btn');

  if (!editBtn) return;

  // item의 id 값 가져오기
  const id = editBtn.closest('.grocery-item').dataset.id;

  // 배열에서 해당 id 값을 filter로 일치하는 객체 가져오기
  //  filter로 가져온 값들은 배열로 받아오기 때문에 구조분해 할당을 사용하여 배열이 아닌 객체로 받아오기 위해
  const [item] = itemList.filter((item) => item.id === +id); // +를 해주는 이유는 data-id 속성을 가져올때 string으로 가져와지기 때문

  // 해당 객체의 value를 input value 에 넣기
  inputEl.value = item.value;

  // 버튼의 텍스트 Edit 으로 변경
  submitBtn.textContent = 'edit';

  // 수정해야할 객체로 담기
  editObj = item;
}

function delClickHandler(e) {
  const delBtn = e.target.closest('.delete-btn');

  if (!delBtn) return;

  const id = delBtn.closest('.grocery-item').dataset.id;

  // 지워야할 객체를 id 로 배열에서 찾아서 제외
  itemList = itemList.filter((item) => item.id !== +id);

  const delItemEl = groceryListEl.querySelector(
    `.grocery-item[data-id="${id}"]`
  );
  delItemEl.remove();

  // 리스트에 아무것도 없으면 clear item 모양 안보이도록 하기
  if (itemList.length === 0) {
    groceyContainerEl.style.visibility = 'hidden';
  }

  alert('alert-danger', 'item removed');
}

function clearClickHandler() {
  itemList = [];
  editObj = null;
  groceryListEl.innerHTML = '';
  groceyContainerEl.style.visibility = 'hidden';

  alert('alert-danger', 'empty list');
}

function addItem(value) {
  // input 입력 값 가져오기
  const id = new Date().getTime();

  // 배열에 추가
  const item = {
    id,
    value,
  };
  itemList.push(item);

  // 엘리먼트 생성 후 화면에 추가
  const itemEl = createItemEl(item);
  groceryListEl.appendChild(itemEl);

  // 리스트 컨테이너 보이게 하기
  groceyContainerEl.style.visibility = 'visible';
}

function editItem(id, value) {
  // 배열 객체 수정
  // 수정해야할 객체의 value 값을 변경하고 반환
  // 수정해야할 객체가 아니라면 원래 값 반환
  // itemList = itemList.map((item) =>
  //   item.id === id ? { id: item.id, value } : item
  // );
  editObj.value = value;

  // 화면 다시 출력
  // 두 개 중 뭐가 나을까?
  // 1. 쿼리 셀렉터로 가져오기
  // 2. item 엘리먼트 리스트 가져오고 그 중에서 dataset.id 일치하는 것 가져오기
  const editItemEl = groceryListEl.querySelector(
    `.grocery-item[data-id="${id}"]`
  );
  editItemEl.querySelector('.title').textContent = value;

  // 버튼의 텍스트 submit으로 변경
  submitBtn.textContent = 'submit';
}

function alert(className, text) {
  alertEl.classList.add(className);
  alertEl.textContent = text;

  // 1초 후 알람 사라지기
  setTimeout(() => {
    alertEl.classList.remove(className);
    alertEl.textContent = '';
  }, 1000);
}

function createItemEl(item) {
  const article = document.createElement('article');
  const title = document.createElement('p');
  const btnContainer = document.createElement('div');
  const editBtn = document.createElement('button');
  const delBtn = document.createElement('button');
  const editIcon = document.createElement('i');
  const delIcon = document.createElement('i');

  article.className = 'grocery-item';
  title.className = 'title';
  btnContainer.className = 'btn-container';
  editBtn.className = 'edit-btn';
  delBtn.className = 'delete-btn';
  editIcon.className = 'fas fa-edit';
  delIcon.className = 'fas fa-trash';

  article.appendChild(title);
  article.appendChild(btnContainer);
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(delBtn);
  editBtn.appendChild(editIcon);
  delBtn.appendChild(delIcon);

  article.dataset.id = item.id;
  title.textContent = item.value;

  // 생성된 수정, 삭제 버튼에 이벤트 걸어주기
  editBtn.addEventListener('click', editClickHandler);
  delBtn.addEventListener('click', delClickHandler);

  return article;
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
