fetch('assignment.json')
    .then(response => response.json())
    .then(data => {
        const products = Object.values(data.products);
        products.sort((a, b) => b.popularity - a.popularity);
        products.forEach(product => {
            const tableBody = document.getElementById('product-table').getElementsByTagName('tbody')[0];
            const newRow = tableBody.insertRow();
            const titleCell = newRow.insertCell();
            const subcategoryCell = newRow.insertCell();
            const priceCell = newRow.insertCell();
            const popularityCell = newRow.insertCell();

            titleCell.textContent = product.title;
            subcategoryCell.textContent = product.subcategory;
            priceCell.textContent = product.price;
            popularityCell.textContent = product.popularity;
        });
    });