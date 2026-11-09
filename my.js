const paperData = {
    "Обычная": 1.5,
    "Повышенной белизны": 2.5,
    "Мелованная": 4,
    "Дизайнерская": 6
};

const colorData = {
    "1-0": [100, 15],
    "1-1": [150, 25],
    "4-0": [200, 60],
    "4-1": [210, 85],
    "4-4": [220, 112]
};

const countInput = document.getElementById("count");
const paperSelect = document.getElementById("typePaper");
const colorSelect = document.getElementById("typeColor");
const totalEl = document.getElementById("total");

Object.keys(paperData).forEach(key => {
    paperSelect.innerHTML += "<option>" + key + "</option>";
});

Object.keys(colorData).forEach(key => {
    colorSelect.innerHTML += "<option>" + key + "</option>";
});

function getTotal() {
    const count = Math.max(30, Number(countInput.value) || 0);
    const lists = Math.ceil(count / 30);
    const paperPrice = paperData[paperSelect.value];
    const [formPrice, printPrice] = colorData[colorSelect.value];
    return formPrice + paperPrice * lists + printPrice * lists;
}

function update() {
    totalEl.innerText = getTotal();
}

countInput.oninput = update;
paperSelect.onchange = update;
colorSelect.onchange = update;

update();