/**
 * Created by Anna Hwang on 1/12/2015.
 */

/**
 * Created by Anna Hwang on 1/12/2015.
 */
var pageNum = 0;

createPage(pageNum);

document.getElementById("left_button").onclick=function(){
    --pageNum;
    createPage(pageNum);
};

document.getElementById("right_button").onclick=function(){
    ++pageNum;
    createPage(pageNum);
};

function updateButtons(pageNum) {
    switch(pageNum) {
        case 0:
            document.getElementById("left_button").style.visibility = "hidden";
            document.getElementById("right_button").style.visibility = "visible";
            break;
        case 1:
            document.getElementById("left_button").style.visibility = "visible";
            document.getElementById("right_button").style.visibility = "hidden";
            break;
    }
}

function createPage(pageNum) {
    removeLeft();
    removeRight();
    updateButtons(pageNum);
    switch(pageNum){
        case 0:
            createIntro();
            createProfFacul();
            break;
        case 1:
            createStaffRes();
            createSponsors();
            break;
    }
}

/** START OF PAGES ---------------------------------------------------------------------------**/

function createIntro() {
    var header = document.createElement("header");
    header.appendChild(document.createTextNode("Our Attributions"));

    var text = "While Vanderbilt University's iGEM team is driven by its undergraduates, our work is indebted to " +
        "the generosity of our mentors and gracious sponsors. Vanderbilt iGEM prides itself in being a team run by un" +
        "dergraduates, for undergraduates. All project design and data analysis, lab work and experimentation, fundr" +
        "aising and outreach, and all the other work done by the team was all preformed by undergraduate student vo" +
        "lunteers. However outside companies, faculty and staff, institutions, and individuals all have made contri" +
        "butions that have been essential in our team's growth and success. We would like to take the time to speci" +
        "ally thank each one of them.";

    var p = createP(text);

    document.getElementById("left_page").appendChild(header);
    document.getElementById("left_page").appendChild(p);
}

function createProfFacul() {
    var header = document.createElement("header");
    header.appendChild(document.createTextNode("Professors and Faculty"));
    var img1 = createPhoto("VU_Chrissy_marasco.JPG",
                            "Chrissy Marasco",
                            300, 300,
                            "Dr. Chrissy Marasco");

    var img2 = createPhoto("VU_Kevin_seale.jpg",
        "Kevin Seale",
        300, 300,
        "Kevin Seale");

    var img3 = createPhoto("VU_Kathy_friedman.jpg",
        "Kathy Friedman",
        300, 300,
        "Kathy Friedman");

    var img4 = createPhoto("VU_Ian_macara.jpg",
        "Ian Macara",
        300, 300,
        "Ian Macara");

    var img5 = createPhoto("VU_Mark_woelfle.jpg",
        "Mark Woelfle",
        300, 300,
        "Mark Woelfle");

    var img6 = createPhoto("VU_Amanda_benson.jpg",
        "Amanda Benson",
        300, 300,
        "Amanda Benson");

    document.getElementById("right_page").appendChild(header);
    document.getElementById("right_page").appendChild(img1);
    document.getElementById("right_page").appendChild(img2);
    document.getElementById("right_page").appendChild(img3);
    document.getElementById("right_page").appendChild(img4);
    document.getElementById("right_page").appendChild(img5);
    document.getElementById("right_page").appendChild(img6);
}

function createStaffRes() {
    var header = document.createElement("header");
    header.appendChild(document.createTextNode("Staff and Resources"));
    var img1 = createPhoto("VU_Greenhouse_ertelt.jpg",
        "Vanderbilt Greenhouse and Jonathan Ertelt",
        300, 300,
        "VU Greenhouse and Jonathan Ertelt");

    var img2 = createPhoto("VU_mass_spec.jpg",
        "Mass Spec at Vanderbilt Mass Spectrometry Core",
        300, 300,
        "Vanderbilt Mass Spectrometry Core");

    var text = "Dr. Steven Baskauf for general assistance in running our lab.";
    var p1 = createP(text);

    text = "Charles Sissom and Sara Samoray for protocol advice, equipment t" +
    "raining, and assistance in running our lab.";
    var p2 = createP(text);

    text = "Anthony Tharp for access to common equipment resources.";
    var p3 = createP(text);

    text = "Vanderbilt Environmental Health and Safety for training in pro" +
    "per lab practice and safe waste disposal.";
    var p4 = createP(text);

    text = "University of Massachusetts Medical Center, especially Dr. Aviva Joseph, for tec" +
    "hnical advice related to our genetic constructs.";
    var p5 = createP(text);

    document.getElementById("left_page").appendChild(header);
    document.getElementById("left_page").appendChild(img1);
    document.getElementById("left_page").appendChild(img2);
    document.getElementById("left_page").appendChild(p1);
    document.getElementById("left_page").appendChild(p2);
    document.getElementById("left_page").appendChild(p3);
    document.getElementById("left_page").appendChild(p4);
    document.getElementById("left_page").appendChild(p5);
}

function createSponsors() {
    var header = document.createElement("header");
    header.appendChild(document.createTextNode("Sponsors"));

    var imgs1 = [createPlainIMG("VU_SyBBURE.png", "SyBBURE", 300, 146),
                createPlainIMG("VU_VIIBRE.png", "VIIBRE", 300, 69)];
    var imgs2 = [createPlainIMG("VU_Biomatters.png", "Biomatters", 300, 101),
                createPlainIMG("VU_School_of_Engineering.jpg", "Vanderbilt School of Engineering", 300, 51)];

    var table = document.createElement("table");
    table.style.width = "80%";
    table.style.margin = "auto";

    createRowArray(table, imgs1);
    createRowArray(table, imgs2);

    document.getElementById("right_page").appendChild(header);
    document.getElementById("right_page").appendChild(table);
}

/** END OF: TAB PAGES ---------------------------------------------------------------------------**/
//------------------------------------------------------------------------------------------------//

function addMultLI(ul, arr) {
    for(var i = 0; i < arr.length; i++) {
        addLI(ul, arr[i]);
    }
}

function makeTextRow(table, names, size){
    for(var y = 0; y < 2; y++) {
        var row = table.insertRow();
        row.style.textAlign="center";
        for (var i = 0; i < size; i++) {
            var str = row.insertCell(i);
            if(y == 0){
                str.innerHTML = names[i];
            }
            else{
                str.innerHTML = " ";
            }
        }
    }
}

/** The photo's width must be smaller than the screen's width to use **/
function createRowArray(table, elements) {
    var row = table.insertRow();
    row.style.textAlign="center";

    for (var i = 0; i < elements.length; i++) {
        var str = row.insertCell(i);
        str.appendChild(elements[i]);
    }
}

function createPhoto(src, alt, w, h, title) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.width = w;
    img.height = h;

    var text = document.createElement("p");
    text.appendChild(document.createTextNode(title));
    text.style.textAlign = "right";
    text.style.overflow = "auto";
    text.style.fontStyle = "italic";
    text.style.marginTop = "1px";

    var photo = document.createElement("div");
    photo.style.backgroundColor = "floralwhite";
    photo.style.display = "inline-block";
    photo.style.width = img.width + "px";
    photo.style.height = (img.height + 50) + "px";
    photo.style.padding = "0.5em";
    photo.style.margin = "1%";
    photo.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)";

    photo.appendChild(img);
    photo.appendChild(text);

    return photo;
}

function createP(str){
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(str));

    return p;
}

function createPlainIMG(src, alt, w, h){
    var img = document.createElement("img");
    img.src = src;
    img.alt =  alt;
    img.width = w;
    img.height = h;

    return img;
}

function createIMG(src, alt, w, h, f){
    var img = document.createElement("img");
    img.src = src;
    img.alt =  alt;
    img.width = w;
    img.height = h;
    img.className = "page_img";
    img.float = f;

    return img;
}

function removeLeft() {
    var myNode = document.getElementById("left_page");
    while (myNode.hasChildNodes()) {
        myNode.removeChild(myNode.childNodes[0]);
    }
}

function removeRight() {
    var myNode = document.getElementById("right_page");
    while (myNode.hasChildNodes()) {
        myNode.removeChild(myNode.childNodes[0]);
    }
}