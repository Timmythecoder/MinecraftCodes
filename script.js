const validNames = ["TimothyB", "LucasS", "JonothanS", "MaxN", ""]; // Add valid names to the list
const codeMessages = {
    "TM12DWFE": "Recieved 4 Iron Ingots Use Code: I20192082",
    "TM182WJ": "Recieved 13 Logs Use Code: WL23DG324",
    "CODE3": "Message for Code 3",
    };

    function showLoading() {
        document.getElementById("loading").style.display = "block";
    }

    function hideLoading() {
        document.getElementById("loading").style.display = "none";
    }

    function redeemCode() {
        document.getElementById("result").innerText = "";
        document.getElementById("messageText").innerText = "";
        document.getElementById("message").style.display = "none";
        const name = document.getElementById("nameInput").value;
        const inputCode = document.getElementById("codeInput").value;
        const resultElement = document.getElementById("result");

        if (validNames.includes(name)) {
            showLoading();
            setTimeout(() => {
                if (codeMessages[inputCode]) {
                    resultElement.innerText = "Thank You, " + name + "!";
                    document.getElementById("messageText").innerText = codeMessages[inputCode];
                    document.getElementById("message").style.display = "block";
                } else {
                    resultElement.innerText = "Invalid Code. Please try again.";
                }
                hideLoading();
            }, 4000); // 4 seconds
        } else {
            resultElement.innerText = "Invalid Name. Please enter a valid name.";
        }
    }





