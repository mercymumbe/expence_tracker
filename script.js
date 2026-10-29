// categories
const categories = [
    { name: "Medical", amount: 100 },
    { name: "Shopping", amount: 2000 },
    { name: "Food", amount: 240 },
    { name: "Transport", amount:1500 },
    { name: "Other", amount: 2132 }
    
];

const categoryGrid = document.getElementById("categoryGrid");

function loadCategories() {
    let new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categories.length > 0) {
                resolve(categories);
            } else {
                reject("No categories found.");
            }
        }, 1000);
    });
}

loadCategories()
    .then(data => {
        displayCategories(data);
        statusMessage.textContent = "Categories loaded successfully!";
    })
    .catch(error => {
        statusMessage.textContent = error.message;
    });

displayCategories();