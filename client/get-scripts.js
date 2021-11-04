/* *************************
 *** DISPLAY BY USER ***
************************** */
function displayMine() {
    console.log('displayMine Function Called')
    const accessToken = localStorage.getItem('SessionToken');

    fetch(`http://localhost:3000/journal/mine`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let display = document.getElementById('journals');
            for (i = 0; i = display.childNodes.length; i++) {
                display.removeChild(display.firstChild)
            }

            if (data.length === 0) {
                let display = document.getElementById('journals');
                let header = document.createElement('h5');

                display.appendChild(header);
                header.textContent = "You haven't made any posts yet!";
                header.setAttribute("class", "noPosts")
            } else {
                for(i = 0; i < data.length; i++) {
                    let display = document.getElementById('journals');
                    let card = document.createElement('div');
                    let body = document.createElement('div');
                    let header = document.createElement('h5');
                    let subtitle = document.createElement('h6');
                    let para = document.createElement('p');
                    let editBtn = document.createElement('button');
                    let deleteBtn = document.createElement('button');

                    let current = data[i];
                    let title = current.title;
                    let date = current.date;
                    let entry = current.entry;
                }
            }
        })
        .catch(err => {
            console.error(err)
        })
}


/* *************************
 *** DISPLAY ALL ***
************************** */
function displayAll() {
    console.log('displayAll Function Called')
}


/* *************************
 *** DISPLAY BY TITLE ***
************************** */
function displayByTitle() {
    console.log('displayByTitle Function Called')
}