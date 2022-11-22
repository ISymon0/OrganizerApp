`use strict`;

const monday = document.querySelector('.monday');
const arrowMon = document.querySelector('.arrow-mon');
const tuesday = document.querySelector('.tuesday');
const arrowTue = document.querySelector('.arrow-tue');
const wednesday = document.querySelector('.wednesday');
const arrowWed = document.querySelector('.arrow-wed');
const thursday = document.querySelector('.thursday');
const arrowThu = document.querySelector('.arrow-thu');
const Friday = document.querySelector('.friday');
const arrowFri = document.querySelector('.arrow-fri');
const saturday = document.querySelector('.saturday');
const arrowSat = document.querySelector('.arrow-sat');
const monList = document.querySelector('.mon-list');
const tueList = document.querySelector('.tue-list');
const wedList = document.querySelector('.wed-list')
const thuList = document.querySelector('.thu-list')
const friList = document.querySelector('.fri-list')
const satList = document.querySelector('.sat-list')
const monTitle = document.querySelector('.title-mon');
const tueTitle = document.querySelector('.title-tue');
const wedTitle = document.querySelector('.title-wed');
const thuTitle = document.querySelector('.title-thu');
const friTitle = document.querySelector('.title-fri');
const satTitle = document.querySelector('.title-sat');
const itaMonBtn = document.getElementById('see-ita-lun');
const sciMonBtn = document.getElementById('see-sci-lun');
const startMonBtn = document.getElementById('see-start-lun');
const fisMonBtn = document.getElementById('see-fis-lun');
const matTusBtn = document.getElementById('see-mat-tus');
const sciTusBtn = document.getElementById('see-sci-tus');
const startTusBtn = document.getElementById('see-start-tus');
const fisTusBtn = document.getElementById('see-fis-tus');
const ingTusBtn = document.getElementById('see-ing-tus');
const ircWedBtn = document.getElementById('see-irc-wed');
const sciWedBtn = document.getElementById('see-sci-wed');
const infWedBtn = document.getElementById('see-inf-wed');
const stfilWedBtn = document.getElementById('see-stfil-wed');
const ingWedBtn = document.getElementById('see-ing-wed');
const fisThuBtn = document.getElementById('see-fis-thu');
const matThuBtn = document.getElementById('see-mat-thu');
const infThuBtn = document.getElementById('see-inf-thu');
const stfilThuBtn = document.getElementById('see-stfil-thu');
const ingThuBtn = document.getElementById('see-ing-thu');
const smotFriBtn = document.getElementById('see-smot-fri');
const sciFriBtn = document.getElementById('see-sci-fri');
const matFriBtn = document.getElementById('see-mat-fri');
const itaFriBtn = document.getElementById('see-ita-fri');
const itaSatBtn = document.getElementById('see-ita-sat');
const sciSatBtn = document.getElementById('see-sci-sat');
const stfilSatBtn = document.getElementById('see-stfil-sat');
const smotSatBtn = document.getElementById('see-smot-sat');
const form = document.querySelector('.container-form');
const formTable = document.querySelector('.form');
const closeForm = document.querySelector('.close-form');
const add = document.querySelector('.add');
const nameInput = document.querySelector('#name-input');
const surnameInput = document.querySelector('#surname-input');
const itaMonPlus = document.querySelector('.plus-ita-lun');
const sciMonPlus = document.querySelector('.plus-sci-lun');
const startMonPlus = document.querySelector('.plus-start-lun');
const fisMonPlus = document.querySelector('.plus-fis-lun');
const matTusPlus = document.querySelector('.plus-mat-tus');
const sciTusPlus = document.querySelector('.plus-sci-tus');
const startTusPlus = document.querySelector('.plus-start-tus');
const fisTusPlus = document.querySelector('.plus-fis-tus');
const ingTusPlus = document.querySelector('.plus-ing-tus');
const ircWedPlus = document.querySelector('.plus-irc-wed');
const sciWedPlus = document.querySelector('.plus-sci-wed');
const infWedPlus = document.querySelector('.plus-inf-wed');
const stfilWedPlus = document.querySelector('.plus-stfil-wed');
const ingWedPlus = document.querySelector('.plus-ing-wed');
const fisThuPlus = document.querySelector('.plus-fis-thu');
const matThuPlus = document.querySelector('.plus-mat-thu');
const infThuPlus = document.querySelector('.plus-inf-thu');
const stfilThuPlus = document.querySelector('.plus-stfil-thu');
const ingThuPlus = document.querySelector('.plus-ing-thu');
const smotFriPlus = document.querySelector('.plus-smot-fri');
const sciFriPlus = document.querySelector('.plus-sci-fri');
const matFriPlus = document.querySelector('.plus-mat-fri');
const itaFriPlus = document.querySelector('.plus-ita-fri');
const itaSatPlus = document.querySelector('.plus-ita-sat');
const sciSatPlus = document.querySelector('.plus-sci-sat');
const stfilSatPlus = document.querySelector('.plus-stfil-sat');
const smotSatPlus = document.querySelector('.plus-smot-sat');

const Names = {
    SIMONE: "ABBRACCIAVENTO",
    SALVATORE: 'ALONGI',
    LORENZO: 'ALTIMARE',
    GABRIELE: 'BARBIERI',
    ANDREA: 'COZZI',
    MARCO: 'DICOLANDREA',
    GIUSEPPE: "D'IPPOLITO",
    GIUSEPPE: 'FISCHETTI',
    MATTIA: 'IEVA',
    FRANCESCO: 'LANEVE',
    HENRI: 'MOSCATO',
    GIULIA: 'PISTOIA',
    MARIACHIARA: 'ROCCAFORTE',
    MARIAGRAZIA: 'RUSSO',
    ANDREA: 'QUINTO',
    GIOVANNI: 'SALERNI',
    MATTEO: 'SEBASTIO',
    MARIO: 'SERAFINO',
    DAVIDE: 'TORRE',
    ALESSANDRO: 'TOTARO',
    GIORGIA: 'VAMPO'
}

const validator = function (names) {
    let tmpName = nameInput.value;
    let tmpSurname = surnameInput.value;
    const keys = Object.keys(names);
    for (let key in keys) {
        if (tmpName.toUpperCase() == keys[key]) {
            if (tmpSurname.toUpperCase() == Names[keys[key]]) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

let rotateMon = false;
let rotateTus = false;
let rotateWed = false;
let rotateThu = false;
let rotateFri = false;
let rotateSat = false;

const rotate = function (rotated, day, arrowDay, list) {
    day.addEventListener('click', function () {
        if (rotated) {
            arrowDay.style.transform = 'rotate(0deg)';
            list.style.display = 'none';
            rotated = false;
        } else if (!rotated) {
            rotated = true;
            arrowDay.style.transform = 'rotate(90deg)';
            list.style.display = 'block';
        }
    });
}

rotate(rotateMon, monTitle, arrowMon, monList);
rotate(rotateTus, tueTitle, arrowTue, tueList);
rotate(rotateWed, wedTitle, arrowWed, wedList);
rotate(rotateThu, thuTitle, arrowThu, thuList);
rotate(rotateFri, friTitle, arrowFri, friList);
rotate(rotateSat, satTitle, arrowSat, satList);

let open = false;

const baseUrl = 'http://localhost:8000/info';
async function getInfo(e) {
    e.preventDefault()
    const res = await fetch(baseUrl, {
        method: 'GET'
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
}
async function postInfo() {

}

const splitter = function (id) {
    const splitArray = id.split('-');
    let func = splitArray[0];
    let subj = splitArray[1];
    let day = splitArray[2];
    let qry = subj + '_' + day;
    return qry;
}


const urlChange = function (button, qry) {
    button.addEventListener('click', function () {
        url = 'http://localhost:8000/modal/' + qry;
        location.href = url;
    });
}

urlChange(itaMonBtn, splitter(itaMonBtn.id));
urlChange(sciMonBtn, splitter(sciMonBtn.id));
urlChange(startMonBtn, splitter(startMonBtn.id));
urlChange(fisMonBtn, splitter(fisMonBtn.id));
urlChange(matTusBtn, splitter(matTusBtn.id));
urlChange(sciTusBtn, splitter(sciTusBtn.id));
urlChange(startTusBtn, splitter(startTusBtn.id));
urlChange(fisTusBtn, splitter(fisTusBtn.id));
urlChange(ingTusBtn, splitter(ingTusBtn.id));
urlChange(ircWedBtn, splitter(ircWedBtn.id));
urlChange(sciWedBtn, splitter(sciWedBtn.id));
urlChange(infWedBtn, splitter(infWedBtn.id));
urlChange(stfilWedBtn, splitter(stfilWedBtn.id));
urlChange(ingWedBtn, splitter(ingWedBtn.id));
urlChange(fisThuBtn, splitter(fisThuBtn.id));
urlChange(matThuBtn, splitter(matThuBtn.id));
urlChange(infThuBtn, splitter(infThuBtn.id));
urlChange(stfilThuBtn, splitter(stfilThuBtn.id));
urlChange(ingThuBtn, splitter(ingThuBtn.id));
urlChange(smotFriBtn, splitter(smotFriBtn.id));
urlChange(sciFriBtn, splitter(sciFriBtn.id));
urlChange(matFriBtn, splitter(matFriBtn.id));
urlChange(itaFriBtn, splitter(itaFriBtn.id));
urlChange(itaSatBtn, splitter(itaSatBtn.id));
urlChange(sciSatBtn, splitter(sciSatBtn.id));
urlChange(stfilSatBtn, splitter(stfilSatBtn.id));
urlChange(smotSatBtn, splitter(smotSatBtn.id));

const modal = function (plusBtn) {
    plusBtn.addEventListener('click', function () {
        form.classList.remove('modal-close');
        form.classList.add('modal-open');
        document.body.style.overflowY = 'hidden';
        const qry = splitter(plusBtn.className);
        add.addEventListener('click', function () {
            if (validator(Names)) {
                add.setAttribute('type', 'submit');
                add.style.pointerEvents = 'all';
                let name = nameInput.value;
                let surname = surnameInput.value;
                let completeName = name + ' ' + surname;
                url = '/modal/' + qry + '/' + completeName;
                formTable.setAttribute('action', url);
            }
            else {
                add.setAttribute('type', 'button');
                alert('The name is not valid!');
            }
        });
    });

}

closeForm.addEventListener('click', function () {
    form.classList.remove('modal-open');
    form.classList.add('modal-close');
    document.body.style.overflowY = 'auto';
})

modal(itaMonPlus);
modal(sciMonPlus);
modal(startMonPlus);
modal(fisMonPlus);
modal(matTusPlus);
modal(sciTusPlus);
modal(startTusPlus);
modal(fisTusPlus);
modal(ingTusPlus);
modal(ircWedPlus);
modal(sciWedPlus);
modal(infWedPlus);
modal(stfilWedPlus);
modal(ingWedPlus);
modal(fisThuPlus);
modal(matThuPlus);
modal(infThuPlus);
modal(stfilThuPlus);
modal(ingThuPlus);
modal(smotFriPlus);
modal(sciFriPlus);
modal(matFriPlus);
modal(itaFriPlus);
modal(itaSatPlus);
modal(sciSatPlus);
modal(stfilSatPlus);
modal(smotSatPlus);