
let allButtons = document.querySelectorAll('.accept_btn');

console.log(allButtons.length);
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', addGame);
    function addGame() {
        let games = {
            player1: this.value,
            player2: document.getElementById("t01").rows[i+1].cells[3].innerHTML,
            date : document.getElementById("t01").rows[i+1].cells[0].innerHTML,
            location : document.getElementById("t01").rows[i+1].cells[1].innerHTML,
            message_id: this.getAttribute("message_id"),
            player1_id: this.getAttribute("player1_id"),
            player2_id: this.getAttribute("player2_id")
        };

        fetch("/games", {
                method: "POST",
                body: JSON.stringify(games),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
               
            }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        }
        
}
