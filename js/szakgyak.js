var txtFile = new XMLHttpRequest();
var gyakArray = [];
var temp;
var str = '<tr><th>Cégnév</th><th>Együttműködési szerződés dátuma </th><th>Kiegészítő szerződés dátuma </th><th>Kar </th></tr>';
txtFile.open("GET", "/docs/gyak_list.txt", true);
txtFile.onreadystatechange = function () {
    if (txtFile.readyState === 4) { // Makes sure the document is ready to parse.
        if (txtFile.status === 200) { // Makes sure the file exists.
            allText = txtFile.responseText;
            lines = txtFile.responseText.split("\n"); // Will separate each line into an array
            for (let i = 0; i < lines.length; i++) {
                let sor = lines[i].split(";");

                if (sor[3] != " ") {
                    temp = "GTK";
                } else if (sor[4] != " ") {
                    temp = "GK";
                } else if (sor[5] != " ") {
                    temp = "MK";
                } else if (sor[6] != " ") {
                    temp = "MFTK";
                } else if (sor[7] != " ") {
                    temp = "MIK";
                }
                gyakArray.push({ cegnev: sor[0], szerz1: sor[1], szerz2: sor[2], kar: temp })

            }

            console.log(gyakArray);

            for (let i = 0; i < gyakArray.length; i++) {
                str += '<tr><td>' + gyakArray[i].cegnev + '</td><td>' + gyakArray[i].szerz1 + '</td><td>' + gyakArray[i].szerz2 + '</td><td>' + gyakArray[i].kar + '</td></tr>';
            }

            var customTextElement2 = document.getElementById('f0');
            //customTextElement2.innerHTML = str;
        }
    }
}
txtFile.send(null);


for (let i = 0; i < gyakArray.length; i++) {

    str += '<tr><td>' + gyakArray[i].cegnev + '</td><td>' +
        gyakArray[i].szerz1 + '</td><td>' + gyakArray[i].szerz2 + '</td><td>' + gyakArray[i].kar + '</td></tr>';
    console.log("Hozzáadva");
}

customTextElement2 = document.getElementById('f0');
customTextElement2.innerHTML = str;

function kiir(kar) {
    var str = '<tr><th>Cégnév</th><th>Együttműködési szerződés dátuma </th><th>Kiegészítő szerződés dátuma </th><th>Kar </th></tr>';

    for (let i = 0; i < gyakArray.length; i++) {
        console.log(kar + " " + gyakArray[i].kar + (kar == gyakArray[i].kar));
        if (kar != 'all') {
            if ((kar == gyakArray[i].kar)) {
                str += '<tr><td>' + gyakArray[i].cegnev + '</td><td>' +
                    gyakArray[i].szerz1 + '</td><td>' + gyakArray[i].szerz2 + '</td><td>' + gyakArray[i].kar + '</td></tr>';
                console.log("Hozzáadva");
            } else {
                console.log("NEMJÓ");
            }
        } else {
            str += '<tr><td>' + gyakArray[i].cegnev + '</td><td>' +
                gyakArray[i].szerz1 + '</td><td>' + gyakArray[i].szerz2 + '</td><td>' + gyakArray[i].kar + '</td></tr>';
            console.log("Hozzáadva");
        }

    }
    customTextElement2 = document.getElementById('f0');
    customTextElement2.innerHTML = str;
}