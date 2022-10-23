const data = new Date();
const day = data.getDate();
const month = data.getMonth() + 1;
const year = data.getFullYear();

const $CARENT_DATA = document.querySelector(".current_data");
$CARENT_DATA.textContent = `${day}.${month}.${year}.`;
