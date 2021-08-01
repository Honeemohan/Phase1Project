function loadImg() {
    var img = document.createElement('img');
    img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    document.getElementById('addblog').appendChild(img);
}


function addimage() {
    var img = document.createElement("img");
    var name = document.getElementById("imgUrl").value;
    console.log(name);
    img.src = name; //'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';//"~/images/paddlewheel.png";
    img.height = 100;
    img.width = 100;
    img.setAttribute("class", class_name);

    document.getElementById("mainimg").appendChild(img);
};

var count = 1;



function addData() {
    var name = document.getElementById("title").value;
    var description = document.getElementById("desc").value;
    // For Title
    var container = document.createElement("div");
    container.id = "maincontainer";
    container.className = "container";
    if (name != " ") {
        container.innerHTML = "Title: " + name;
    } else {
        container.innerHTML = "Title: " + " Default Title ";
    }
    container.innerHTML = "Title: " + name;
    container.style.cssText = 'background-color: #80cbc4; border: 10px solid #000000; width:600px; margin-bottom: 10px;';
    container.setAttribute("id", count);
    //For Div
    var desccontainer = document.createElement("div");
    desccontainer.id = "descriptioncontainer";
    desccontainer.className = "desccontainer";
    var contTxt = "Continue reading...";
    if (description != "") {
        desccontainer.innerHTML = "Description:" + description.substring(0, 250) + "  " + "<a href='#'> Continue reading...</a>";
    } else {
        var descStr = "A website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Notable examples are wikipedia.org, google.com, and amazon.com."
            + "All publicly accessible websites collectively constitute the World Wide Web.There are also private websites that can only be accessed on a private network, such as a company's internal website for its employees.";
        desccontainer.innerHTML = "Description:" + descStr.substring(0, 250) + "  " + "<a href='#'> Continue reading...</a>";
    }

    container.appendChild(desccontainer);
    //For Image
    var img = document.createElement("img");
    var imgUrlName = document.getElementById("imgUrl").value;
    console.log(imgUrlName);
    if (imgUrlName != "") {
        img.src = imgUrlName;
    } else {
        img.src = "https://images4.alphacoders.com/206/thumb-350-20658.jpg";
    }
    img.height = 100;
    img.width = 100;
    container.appendChild(img);

    var deleteNode = document.createElement("a");
    var deleteNodeContent = document.createTextNode("Close");
    deleteNode.setAttribute("href", "#");
    deleteNode.setAttribute("onClick", "deleteInfo(" + count + ")");
    deleteNode.appendChild(deleteNodeContent);

    container.appendChild(deleteNode);

    console.log("Count is = " + count);
    count++;
    document.getElementById("main").appendChild(container);
    reset();
}

function deleteInfo(count) {
    console.log("delete fun called.." + count);
    document.getElementById(count).remove();
}

function reset() {
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("imgUrl").value = "";
}
