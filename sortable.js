
function sortTable(n) {
    var table;
    var rows, i, x, y, count = 0;
    var switching = true;
    var direction = "ASC";
    var Switch = true;

    table = document.getElementById("Table");


    while (switching) {
        switching = false;
        var rows = table.rows;


        for (i = 1; i < (rows.length - 1); i++) {
            Switch = false;


            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            console.log(x);
            console.log(y);
            // Check the direction of order 
            if (direction == "ASC") {

                // Check if 2 rows need to be switched 
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If yes, mark Switch as needed and break loop 
                    Switch = true;
                    break;
                }
            } else if (direction == "DSC") {

                // Check direction 
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

                    Switch = true;
                    break;
                }
            }
        }
        if (Switch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;


            count++;
        } else {

            if (count == 0 && direction == "ASC") {
                direction = "DSC";
                switching = true;
            }
        }
    }
}


function sortTableDate() {


    var table;
    var rows, i, x, y, a, b, count = 0;
    var switching = true;
    var direction = "ASC";
    var Switch = true;

    table = document.getElementById("Table");


    while (switching) {
        switching = false;
        var rows = table.rows;


        for (i = 1; i < (rows.length - 1); i++) {
            Switch = false;


            x = rows[i].getElementsByTagName("TD")[2];


            y = rows[i + 1].getElementsByTagName("TD")[2];

            console.log(x.innerHTML);
            console.log(y.innerHTML);

            const a = Date.parse(x.innerHTML);
            const b = Date.parse(y.innerHTML);
            console.log(a);
            console.log(b);
            // Check the direction of order 
            if (direction == "ASC") {

                // Check if 2 rows need to be switched 
                if (a > b) {

                    // If yes, mark Switch as needed and break loop 
                    Switch = true;
                    break;
                }
            } else if (direction == "DSC") {

                // Check direction 
                if (a < b) {

                    Switch = true;
                    break;
                }
            }
        }
        if (Switch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;


            count++;
        } else {

            if (count == 0 && direction == "ASC") {
                direction = "DSC";
                switching = true;
            }
        }
    }
}