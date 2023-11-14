let front = document.querySelector('#front');
let back = document.querySelector('#back');
let cvv = document.querySelector('#cvv');

front.onmouseenter = () => {
    front.style.transform = 'perspective(1000px) rotateY(-180deg)';
    back.style.transform = 'perspective(1000px) rotateY(0deg)';
}

back.onmouseleave = () => {
    front.style.transform = 'perspective(1000px) rotateY(0deg)';
    back.style.transform = 'perspective(1000px) rotateY(180deg)';
}

cvv.addEventListener('focus', () => {
    front.style.transform = 'perspective(1000px) rotateY(-180deg)';
    back.style.transform = 'perspective(1000px) rotateY(0deg)';
})
cvv.addEventListener('blur', () => {
    front.style.transform = 'perspective(1000px) rotateY(0deg)';
    back.style.transform = 'perspective(1000px) rotateY(180deg)';
})

cvv.oninput = () => {
    document.querySelector('#cv').innerText = cvv.value;
}

document.querySelector('#cardnum').oninput = () => {
    document.querySelector('#cn').innerText = document.querySelector('#cardnum').value;
}

document.querySelector('#cardhold').oninput = () => {
    document.querySelector('#ch').innerText = document.querySelector('#cardhold').value;
}

document.querySelector('#expirationmonth').oninput = () => {
    document.querySelector('#expmonth').innerText = document.querySelector('#expirationmonth').value;
}

document.querySelector('#expirationyear').oninput = () => {
    document.querySelector('#expyear').innerText = document.querySelector('#expirationyear').value;
}