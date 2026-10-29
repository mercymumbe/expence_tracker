// categories
const categories = [
    { name: "Medical", amount: 100 },
    { name: "Shopping", amount: 2000 },
    { name: "Food", amount: 240 },
    { name: "Transport", amount:1500 },
    { name: "Other", amount: 2132 }
    
];

const categoryGrid = document.getElementById("categoryGrid");

function displayCategories() {
    categoryGrid.innerHTML = categories.map(category => {
        const { name, amount } = category;

        return `
            <div class="category-card">
                <h3>${name}</h3>
                <p>$ ${amount.toLocaleString("en-US")}</p>
            </div>
        `;
    }).join("");
}

displayCategories();