let currentLanguage = "CZ";

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("button");

    let flag = document.getElementById("flag");

    let B1 = document.getElementById("oneB");
    let S1 = document.getElementById("oneS");

    let B2 = document.getElementById("twoB");
    let S2 = document.getElementById("twoS");

    let B3 = document.getElementById("threeB");
    let S3 = document.getElementById("threeS");

    let B4 = document.getElementById("fourB");
    let S4 = document.getElementById("fourS");

    function zmena() {
        if (currentLanguage === "CZ") {
            flag.src = "1280px-Flag_of_the_United_Kingdom_(2-3).svg.png";
            B1.innerText = "EN";
            S1.innerText = "EN";
            B2.innerText = "About Me";
            S2.innerText = "I am a passionate IT professional specializing in data processing, ETL, and reporting. I enjoy extracting data from various systems and transforming it into clear visualizations that provide added value to users. My work allows me to leverage modern technologies and continuously learn new things. I love challenges and enjoy solving complex problems that require a creative and efficient approach. Working with data is not just a job for me; it's a hobby.\n";
            B3.innerText = "Used Technologies";
            S3.innerText = "I have extensive experience with well-known databases such as MSSQL and Oracle, but my favorite is Snowflake. I use Keboola as my ETL tool, where I hold a Senior Data Engineer certification. For data visualization, I use Microsoft's PowerBI, where I am certified as a PowerBI Data Analyst.";
            B4.innerText = "References";
            S4.innerText = "Homecredit International: Comprehensive reporting setup using various data sources, Keboola for transfer and transformation, and outputs to PowerBI.\n" +
                "CreditInfo: Replacing MSSQL DWH with Keboola for data pumps.\n" +
                "Encall: Management and operation of reporting solutions in Keboola and PowerBI.\n";
            currentLanguage = "EN";
        } else if (currentLanguage === "EN") {
            flag.src = "Flag_of_the_Czech_Republic.svg.png";
            B1.innerText = "CZ";
            S1.innerText = "CZ";
            B2.innerText = "O mně";
            S2.innerText = "Jsem vášnivý IT profesionál se specializací na data processing, ETL a reporting. Baví mě získávat data z různých systémů a transformovat je do přehledných vizualizací, které přinášejí přidanou hodnotu uživatelům. Moje práce mi umožňuje využívat moderní technologie a neustále se učit nové věci. Mám rád výzvy a rád řeším komplexní problémy, které vyžadují kreativní a efektivní přístup. Práce s daty je pro mě nejen povoláním, ale i koníčkem.\n";
            B3.innerText = "Použité technologie";
            S3.innerText = "Mám rozsáhlé zkušenosti s nejznámějšími databázemi jako MSSQL a Oracle, ale mojí srdcovkou je Snowflake. Jako ETL nástroj používám Keboolu, kde mám certifikaci Senior Data Engineer. Pro vizualizaci dat používám PowerBI od Microsoftu, ve kterém mám certifikaci PowerBI Data Analyst.";
            B4.innerText = "Reference";
            S4.innerText = "Homecredit International: Komplexní nastavení reportingu s využitím různých datových zdrojů, Keboola pro jejich přenos a transformaci, a výstupy do PowerBI.\n" +
                "CreditInfo: Nahrazení MSSQL DWH za Keboolu pro datové pumpy.\n" +
                "Encall: Správa a provoz reportingového řešení v Keboole a PowerBI.\n";
            currentLanguage = "CZ";
        }
    }


        button.addEventListener("click", zmena);
});


document.getElementById('transferButton').addEventListener('click', function() {
    window.location.href = 'https://example.com';})

document.getElementById('transferButton2').addEventListener('click', function() {
    window.location.href = 'https://example.com';})
