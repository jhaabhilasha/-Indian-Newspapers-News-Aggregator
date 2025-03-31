const newspapers = [
    { name: "Dainik Bhaskar", language: "Hindi", url: "https://en.wikipedia.org/wiki/Dainik_Bhaskar" },
    { name: "Malayala Manorama", language: "Malayalam", url: "https://en.wikipedia.org/wiki/Malayala_Manorama" },
    { name: "The Times of India", language: "English", url: "https://en.wikipedia.org/wiki/The_Times_of_India" },
    { name: "Amar Ujala", language: "Hindi", url: "https://en.wikipedia.org/wiki/Amar_Ujala" },
    { name: "Hindustan", language: "Hindi", url: "https://en.wikipedia.org/wiki/Hindustan_(newspaper)" },
    { name: "Rajasthan Patrika", language: "Hindi", url: "https://en.wikipedia.org/wiki/Rajasthan_Patrika" },
    { name: "Eenadu", language: "Telugu", url: "https://en.wikipedia.org/wiki/Eenadu" },
    { name: "Dainik Jagran", language: "Hindi", url: "https://en.wikipedia.org/wiki/Dainik_Jagran" },
    { name: "Dina Thanthi", language: "Tamil", url: "https://en.wikipedia.org/wiki/Dina_Thanthi" },
    { name: "Mathrubhumi", language: "Malayalam", url: "https://en.wikipedia.org/wiki/Mathrubhumi" },
    { name: "Sakal", language: "Marathi", url: "https://en.wikipedia.org/wiki/Sakal" },
    { name: "Sakshi", language: "Telugu", url: "https://en.wikipedia.org/wiki/Sakshi_(newspaper)" },
    { name: "Anandabazar Patrika", language: "Bengali", url: "https://en.wikipedia.org/wiki/Anandabazar_Patrika" },
    { name: "Hindustan Times", language: "English", url: "https://en.wikipedia.org/wiki/Hindustan_Times" },
    { name: "The Telegraph", language: "English", url: "https://en.wikipedia.org/wiki/The_Telegraph_(India)" },
    { name: "Lokmat", language: "Marathi", url: "https://en.wikipedia.org/wiki/Lokmat" },
    { name: "Deshabhimani", language: "Malayalam", url: "https://en.wikipedia.org/wiki/Deshabhimani" },
    { name: "Vijayavani", language: "Kannada", url: "https://en.wikipedia.org/wiki/Vijayavani" },
    { name: "Divya Bhaskar", language: "Gujarati", url: "https://en.wikipedia.org/wiki/Divya_Bhaskar" },
    { name: "Vijaya Karnataka", language: "Kannada", url: "https://en.wikipedia.org/wiki/Vijaya_Karnataka" },
    { name: "Pudhari", language: "Marathi", url: "https://en.wikipedia.org/wiki/Pudhari" },
    { name: "Bartaman", language: "Bengali", url: "https://en.wikipedia.org/wiki/Bartaman" },
    { name: "Akila Daily", language: "Gujarati", url: "https://en.wikipedia.org/wiki/Akila_Daily" },
    { name: "Andhra Jyothi", language: "Telugu", url: "https://en.wikipedia.org/wiki/Andhra_Jyothi" },
    { name: "Prajavani", language: "Kannada", url: "https://en.wikipedia.org/wiki/Prajavani" },
    { name: "The Economic Times", language: "English", url: "https://en.wikipedia.org/wiki/The_Economic_Times" },
    { name: "Maalai Malar", language: "Tamil", url: "https://en.wikipedia.org/wiki/Maalai_Malar" },
    { name: "DT Next", language: "English", url: "https://en.wikipedia.org/wiki/DT_Next" },
];

// Function to populate the table
const tableBody = document.getElementById("newspaper-table");

newspapers.forEach(paper => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${paper.name}</td>
        <td>${paper.language}</td>
        <td><a href="${paper.url}" target="_blank">View</a></td>
    `;
    tableBody.appendChild(row);
});
