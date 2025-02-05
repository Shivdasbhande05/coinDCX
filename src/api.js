import renderTable from "./tableData.js"



let p = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");

let arr = [];
p.then((value) => {
    return value.json();
}).then((value2) => {
    arr = value2;
    renderTable(arr);
});

function sortByMarketCap(){
    const sortedByMkt = [...arr].sort((a,b) => b.market_cap - a.market_cap);
    renderTable(sortedByMkt);
}

function sortByPercentage(){
    const sortByPer = [...arr].sort((a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    renderTable(sortByPer);
}
function search(){
    const searchBar = document.getElementById("search").value.toLowerCase();

    const searchCoins = arr.filter(coin => coin.name.toLowerCase().includes(searchBar) || coin.symbol.toLowerCase().includes(searchBar));

    renderTable(searchCoins);
}


document.getElementById("market-cap").addEventListener("click",sortByMarketCap);
document.getElementById("percentage-change").addEventListener("click",sortByPercentage);
document.getElementById("search").addEventListener("input",search);
