function renderTable(data) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach(coin => {
        const row = document.createElement("tr");
         row.innerHTML = `<td><img src=${coin.image}  alt=${coin.name} class="symbol"></td>
         <td> ${coin.name}</td>
         <td>${coin.symbol}</td>
         <td>$${coin.current_price.toFixed(2)}</td>
         <td>$${coin.total_volume}</td>
         <td style="color : red;">${coin.price_change_percentage_24h.toFixed(2)}%</td>
         <td>Mkt Cap: ${coin.market_cap}</td>`;

         tableBody.appendChild(row);
    });
}

export default renderTable;



