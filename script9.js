const display = document.getElementById('counterDisplay');

let count = sessionStorage.getItem('pageLoadCount');

if (count === null) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}

sessionStorage.setItem('pageLoadCount', count);

display.textContent = count;