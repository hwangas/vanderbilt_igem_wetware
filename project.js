/**
 * Created by Anna Hwang on 1/12/2015.
 */
var pageNum = 0;

createProject(pageNum);

document.getElementById("left_button").onclick=function(){
    --pageNum;
    createProject(pageNum);
};
updateButtons(pageNum);

document.getElementById("right_button").onclick=function(){
    ++pageNum;
    createProject(pageNum);
};

function updateButtons(pageNum) {
    switch(pageNum) {
        case 0:
            document.getElementById("left_button").style.visibility = "hidden";
            document.getElementById("right_button").style.visibility = "visible";
            break;
        case 4:
            document.getElementById("left_button").style.visibility = "visible";
            document.getElementById("right_button").style.visibility = "hidden";
            break;
        default:
            document.getElementById("left_button").style.visibility = "visible";
            document.getElementById("right_button").style.visibility = "visible";
    }
}

function createProject(pageNum) {
    removeLeft();
    removeRight();
    updateButtons(pageNum);
    switch(pageNum){
        case 0:
            createIntroLeft();
            createIntroRight();
            break;
        case 1:
            createDesignLeft();
            createDesignRight();
            break;
        case 2:
            createMethodsLeft();
            createMethodsRight();
            break;
        case 3:
            createResultsDirectionsLeft();
            createResultsDirectionsRight();
            break;
        case 4:
            createCollaborationsLeft();
            createCollaborationsRight();
            break;
    }
}

/** START OF PAGES ---------------------------------------------------------------------------**/

function createIntroLeft() {
    var head = document.createElement("header");
    head.appendChild(document.createTextNode("Introduction"));

    var text = "The production of plant essential oils and their derivatives represents an over 9 billion dollar " +
        "industry when considering just their applications in the food and fragrance industries 1. A staggering 23 " +
        "million kilograms of citrus oil alone are produced worldwide each year. Up until only a couple decades ago, " +
        "the production of these essential oils was done exclusively by chemical extraction from plant material. " +
        "However, the sudden emergence of synthetic biology a versatile and efficient tool has the potential to " +
        "transform this immense industry, the products of which nearly everyone will come in contact with on a daily " +
        "basis. ";
    var p1 = createP(text);

    var plant = createIMG("VU_greenhouse_plants.JPG", "VU greenhouse plants", 300, 300, "right");

    text = "By harnessing existing biosynthetic pathways and introducing enzymes taken from plants into more " +
    "malleable model systems, it will be possible to significantly improve on current methods of the active " +
    "components of essential oils, most notably the terpenoids. While most plants express terpenes in the range of " +
    "parts per million and thus require very large scale operations to be commercially viable, early forays into the " +
    "biological production of terpenes have proven that it is possible to improve yields 100-fold 2. We selected a " +
    "total of nine different terpenes to produce (see table), each of which has practical applications which make " +
    "them prime candidates for alternate means of production. The first aspect of our project involves using the " +
    "great potential of synthetic biology to design a commercially-viable strategy for the production of any class " +
    "of terpenoid. ";
    var p2 = createP(text);

    text = "Just as important to the economic benefit of this approach is its environment benefit. With chemical " +
    "terpene extraction being such a relatively inefficient process, it is necessary to process large amounts of " +
    "plant material to get a substantive yield. This may not pose as significant of an issue for citrus growers, but" +
    " many of the most prized compounds are taken from the rarest species of plant. The continuation of the status quo " +
    "in terms of terpene extraction is not an environmentally sustainable solution. In our selection of terpenes, we " +
    "placed a large emphasis on choosing compounds from some of the most rare species possible. ";
    var p3 = createP(text);

    text = "The best example of this idea behind our project can be seen in the gene for santalene synthase. The only " +
    "species know to have genes to produce this terpene are found in remote regions of India and Australia, and one " +
    "of them is listed as a vulnerable species by the IUCN. The trees can live for hundreds of years, but are the " +
    "target of widespread over-exploitation, to the point that, for example, the Indian government has banned the " +
    "export of sandalwood. Synthetic biology can produce the exact same active ingredients of sandalwood oil in a " +
    "way that is both more economically and environmentally sound. ";
    var p4 = createP(text);

    text = "In order for our idea to truly be applicable to exotic and endangered species of plant, we had to take an " +
    "approach that was quite different from the one most iGEM teams have historically taken. What we were looking for " +
    "was a quick, inexpensive method of cloning genes that was also compatible with species that have not had their " +
    "entire genomes sequenced. Often, iGEM teams resort to synthesizing their genes through third parties. However, " +
    "this can be fairly costly especially given the moderately large size of many of these synthase genes, may take " +
    "several weeks or even a month to finish synthesizing, and cannot be done unless the gene's sequence is known in " +
    "its entirety. By going back to basics and taking raw plants as our source material, we were able to avoid these " +
    "issues and demonstrated how our approach was a practically viable one.";
    var p5 = createP(text);

    document.getElementById("left_page").appendChild(head);
    document.getElementById("left_page").appendChild(p1);
    document.getElementById("left_page").appendChild(plant);
    document.getElementById("left_page").appendChild(p2);
    document.getElementById("left_page").appendChild(p3);
    document.getElementById("left_page").appendChild(p4);
    document.getElementById("left_page").appendChild(p5);
}

function createIntroRight() {
    var table = document.createElement("table");
    table.style.margin = "auto";
    var row = table.insertRow();

    var cell = row.insertCell(0);
    cell.appendChild(createPhoto("VU_Cadenine.png", "Cadenine", 150, 150, "Cadenine"));
    cell = row.insertCell(1);
    cell.appendChild(createPhoto("VU_Carene.png", "Caderene", 150, 150, "Caderene"));
    cell = row.insertCell(2);
    cell.appendChild(createPhoto("VU_Humelene.png", "Humelene", 150, 150, "Humelene"));

    row = table.insertRow();
    cell = row.insertCell(0);
    cell.appendChild(createPhoto("VU_Myrcene.png", "Myrcene", 150, 150, "Myrcene"));
    cell = row.insertCell(1);
    cell.appendChild(createPhoto("VU_R_linalool.png", "R Linalool", 150, 150, "R Linalool"));
    cell = row.insertCell(2);
    cell.appendChild(createPhoto("VU_S_linalool.png", "S Linalool", 150, 150, "S Linalool"));

    row = table.insertRow();
    cell = row.insertCell(0);
    cell.appendChild(createPhoto("VU_Sabinene.png", "Sabinene", 150, 150, "Sabinene"));
    cell = row.insertCell(1);
    cell.appendChild(createPhoto("VU_Santalene.png", "Santalene", 150, 150, "Santalene"));
    cell = row.insertCell(2);
    cell.appendChild(createPhoto("VU_Zingiberene.png", "Zingiberene", 150, 150, "Zingiberene"));

    document.getElementById("right_page").appendChild(table);
}

function createDesignLeft() {
    var head = document.createElement("header");
    head.appendChild(document.createTextNode("Design"));

    var text = "Terpene biosynthesis in plants is part of larger pathways that metabolize isoprenoid intermediates. " +
        "Genes encoding for enzymes known as synthases catalyze the terminal step in these pathways, from a precursor " +
        "(commonly farnesyl pyrophosphate (FPP) or garnyl pyrophosphate (GPP)) to the final terpene product. As it " +
        "happens, two well established and genetically manipulable model organisms- the bacterium Escherichia coli " +
        "and baker's yeast Saccharomyces cerevisiae- produce moderate amounts of GPP and FPP as part of their " +
        "endogenous non-mevalonate pathway (MEP) and mevalonate pathway (MEV) respectively3. All that is required " +
        "for either of these organisms to begin producing terepenes is to introduce that single synthase gene. ";
    var p1 = createP(text);

    text = "Yeast initially was our main target for a few advantages it appeared to have as a production platform. " +
    "First, the MEV pathway is found in all eukaryotes including plants and fungi, so better yield were expected by " +
    "choosing it over the MEP pathway in prokaryotes4. Second, it would be possible to physically integrate our gene" +
    " into one of the yeast's chromosomes by using homologous recombination. An inducible promoter could be included" +
    " to further increase production. Third, as a diploid the yeast could be made homozygous for the terpene gene. We" +
    " soon found out that no exiting vector had all of the features we would want. Therefore, we designed our own new" +
    " plasmid vector, pVU140006, that contained a number of important features and advances over previous plasmids for" +
    " this purpose. See our parts page for more information on what special features we included and their relevance " +
    "to the project";
    var p2 = createP(text);

    document.getElementById("left_page").appendChild(head);
    document.getElementById("left_page").appendChild(p1);
    document.getElementById("left_page").appendChild(p2);
}

function createDesignRight() {
    var img = createPhoto(
        "Terpenoid_biosynthesis_pathway.png","Terpenoid Biosysnthesis Pathway", 700, 967,
        "Terpenoid Biosysnthesis Pathway");
    img.style.margin = "auto";
    img.style.marginBottom = "1em";
    document.getElementById("right_page").appendChild(img);
}

function createMethodsLeft() {
    var head = document.createElement("header");
    head.appendChild(document.createTextNode("Methods"));

    var text = "Our project had several co-dependent sub-project that were all worked on in parallel. These can " +
        "roughly be divided into two categories: the first involving work on our synthase genes and the second" +
        " involving the construction of a new, specially designed plasmid vector. We tried two different team " +
        "structures over the year to see which would give the best results. For the Spring, we had the original " +
        "idea of dividing members into independent groups, each working on a specific terpene. Each group was " +
        "headed by a single group manager who would teach 4-5 new members the protocol that was to be preformed " +
        "and then supervise that the work was carried out correctly. On occasion either the group managers or the" +
        " organization president or wetware director would also given lessons to teach members about the techniques" +
        " and theory involved at each step. All group managers were in turn trained by either the president " +
        "or wetware director, both of whom had come with the experiment, acquired all the necessary primers and r" +
        "eagents, wrote up the protocol, and had preformed it prior to any group-phase work for the purposes of t" +
        "roubleshooting and predicting where issues may come up. The president or wetware director also helped the" +
        " group manager in being present during all experiments for answering questions, preparing materials, and " +
        "other forms of assistance.";
    var p1 = createP(text);

    text = "Each group first planted seeds under the appropriate soil, humidity, and temperature conditions at the" +
    " Vanderbilt Greenhouse. Once the majority of these grew into saplings with green leaves, Samples were flash froz" +
    "en in liquid nitrogen in preparation for a genomic DNA extraction. After the extractions, nanodrop concentration" +
    " readings and agarose gels confirmed the presence of high molecular weight genomic DNA. Groups then ran a PCR on" +
    " their genomic DNA with primers specific to their synthase gene. More gels were run to check for PCR product. At" +
    " this point, the semester was coming to an end, so groups were disbanded before most managed to isolate their sy" +
    "nthase gene. Over the summer, the president and wetware director continued troubleshooting those genes which wer" +
    "e not amplifying and eventually got each to the point where consistent PCR product bands were produced. ";
    var p2 = createP(text);

    text = "Once we had clear banding patterns, it became clear that the number of introns in each of our genes (a " +
    "variable which was unknown since most of the plants we worked with have not had their genomes sequenced) was too " +
    "great for cloning and expression to be practical. Therefore, as soon as the fall semester began, we shifted strat" +
    "egy to isolating RNA from our plants. This RNA could be converted to cDNA by reverse transcription, which would e" +
    "liminate the issue with introns we were having. Several of our greenhouse plants were no longer available, so w" +
    "e reduced the number of target terpenes we were focusing on. After extracting RNA and running an RT-PCR, severa" +
    "l samples produced bands that corresponded roughly to where the synthase gene should be. These were gel extract" +
    "ed. Because almost every synthase gene had restriction sites in them that prevented them from being RFC10 compa" +
    "tible, we ligated the genes in pUC19 for site directed mutagenesis. After that, a second processing step would " +
    "have been necessary to add the correct restriction sites to each gene to allow them to be integrated into pSB1C" +
    "3 as a biobrick. In the interest of time, we synthesized a codon-optimized santalene synthase gene in order to " +
    "skip these RFC10 processing steps, even though we had already successfully reverse transcribed cDNA of the san" +
    "talene synthase gene. ";
    var p3 = createP(text);

    text = "In the spring concurrent to work by the terpene groups, work began on plasmid construction. This was pre" +
    "formed by the president, wetware director, and a handful of others rather than in group format. Each gene casset" +
    "te for our final plasmid was first identified in an existing, readily available plasmid. All of these cassettes " +
    "were extracted by PCR using those plasmids as templates. Overlap extension PCR was then done on the gel-purifie" +
    "d product to add restriction sites and homology regions for the purposes of eventually combining all of the cas" +
    "settes together into a single plasmid. By the end of the summer, only one final fragment remained to be inserte" +
    "d to complete the intermediate plasmid pVU14004. Upon the successful creation of pVU14004, several restriction" +
    " enzyme sites had to be removed by site directed mutagensis in order to make the plasmid RFC10 compatible. ";
    var p4 = createP(text);

    document.getElementById("left_page").appendChild(head);
    document.getElementById("left_page").appendChild(p1);
    document.getElementById("left_page").appendChild(p2);
    document.getElementById("left_page").appendChild(p3);
    document.getElementById("left_page").appendChild(p4);
}

function createMethodsRight() {
    var img1 = createPhoto("VU_experiment_1_diagram.png", "Experiment 1 Diagram",
        421, 571, "Experiment 1 Diagram");
    img1.style.margin = "auto";
    img1.style.marginBottom = "1em";
    var img2 = createPhoto("VU_experiment_2_diagram.png", "Experiment 2 Diagram",
        484, 591, "Experiment 2 Diagram");
    img2.style.margin = "auto";
    img2.style.marginBottom = "1em";

    document.getElementById("right_page").appendChild(img1);
    document.getElementById("right_page").appendChild(img2);
}

function createResultsDirectionsLeft() {
    var head = document.createElement("header");
    head.appendChild(document.createTextNode("Results and Directions"));

    var text = "Several factors contributed to the difficulty we experienced during the final phase of the project." +
        " First, member engagement suffered a significant decline between the spring and fall semesters, to the point" +
        " where only a small handful of people were left to preform all experiments. Second, the late realization tha" +
        "t we had to change our cloning strategy to modified cDNA inserts effectively meant we had to start anew in l" +
        "ate August despite having what was a good head start when we began in early March. Third, the RFC10 require" +
        "ments added a substantial dimension of difficulty to the project since all of our starting material (both t" +
        "he extracted gene cassettes for plasmid construction and the synthase genes) contained multiple sites that " +
        "made them incompatible with the biobrick standard. Nevertheless, our team accomplished an enormous amount d" +
        "uring our first year in competition. ";
    var p1 = createP(text);

    text = "We successfully constructed pVU14004, which contains all of the cassettes needed to have all of function" +
    "ality we had intended. However, this form of the plasmid has XbaI and EcoRI sites that make it incompatible with " +
    "RFC10. These sites were successfully changed to missense mutations by site directed mutagenesis. The final step " +
    "required to make pVU14006 is changing the multiple cloning site (MCS) to have the biobrick prefix and suffix. In" +
    " its current form, the plasmid has a functional MCS but it does not yet have the specific order of EcoRI, XbaI," +
    " SpeI, and PstI sites required by RFC10. ";
    var p2 = createP(text);

    text = "For a listing of all the medal requirements we successfully fulfilled over the course of our project, " +
    "please visit this page.";
    var p3 = createP(text);

    document.getElementById("left_page").appendChild(head);
    document.getElementById("left_page").appendChild(p1);
    document.getElementById("left_page").appendChild(p2);
    document.getElementById("left_page").appendChild(p3);
}

function createResultsDirectionsRight() {
    var table = document.createElement("table");
    table.style.margin = "auto";

    var cTitles = ["Terpene",
        "Plant Genomic DNA Extraction Success",
        "PCR-isolation of Synthase Gene",
        "Plant RNA Extraction success",
        "Synthase Gene Reverse-Transcription success",
        "Terpene Production in E.coli/yeast success"];

    makeTextRow(table, cTitles, 6);

    var greenCheck = "Green_check_mark.png";
    var redX = "Red_X.png";
    var yellowSquare = "Yellow_square.png";

    var row1 = [document.createTextNode("Cadinene"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(redX, "red x", 32, 32, "red x"),
        createPlainIMG(redX, "red x", 32, 32, "red x")];

    var row2 = [document.createTextNode("Carene"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(redX, "red x", 32, 32, "red x"),
        createPlainIMG(redX, "red x", 32, 32, "red x")];

    var row3 = [document.createTextNode("Humelene"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(redX, "red x", 32, 32, "red x")];

    var row4 = [document.createTextNode("Myrcene"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(redX, "red x", 32, 32, "red x"),
        createPlainIMG(redX, "red x", 32, 32, "red x")];

    var row5 = [document.createTextNode("(R)-Linalool"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(redX, "red x", 32, 32, "red x"),
        createPlainIMG(redX, "red x", 32, 32, "red x"),
        createPlainIMG(redX, "red x", 32, 32, "red x")];

    var row6 = [document.createTextNode("(L)-Linalool"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(redX, "red x", 32, 32, "red x")];

    var row7 = [document.createTextNode("Sabinene"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(yellowSquare, "yellow square", 32, 32, "yellow square")];

    var row8= [document.createTextNode("Santalene"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(yellowSquare, "yellow square", 32, 32, "yellow square")];

    var row9 = [document.createTextNode("Zingiberene"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
        createPlainIMG(redX, "red x", 32, 32, "red x"),
        createPlainIMG(redX, "red x", 32, 32, "red x")];

    createRowArray(table, row1, 6);
    createRowArray(table, row2, 6);
    createRowArray(table, row3, 6);
    createRowArray(table, row4, 6);
    createRowArray(table, row5, 6);
    createRowArray(table, row6, 6);
    createRowArray(table, row7, 6);
    createRowArray(table, row8, 6);
    createRowArray(table, row9, 6);

    document.getElementById("right_page").appendChild(table);
}

function createCollaborationsLeft() {
    var head = document.createElement("header");
    head.appendChild(document.createTextNode("Results and Directions"));

    var text = "In addition to our own wetware project, our team led fruitful collaborations with a total of three" +
        " other iGEM teams. First, we played a major role in assisting Vanderbilt's microfluidic division with the b" +
        "iological aspect of their project. We prepared the biobrick parts they tested in their microfluidic device" +
        ", including transforming the E. coli they used to study their quorum-sensing fluorescent oscillator circui" +
        "t. Second, we provided feedback to Vanderbilt's software division about their own project involving a prog" +
        "ram to aid in the manipulation of genetic sequences. We used the program as if it were for a real project " +
        "and gave them suggestions on how to make their program easier to use and more useful to biologists. ";
    var p1 = createP(text);

    var building = createPhoto("Ravenwood_high_school.jpg", "Ravenwood High School", 250, 250, "Ravenwood High School");
    building.style.float = "left";
    building.style.margin = "1%";

    text = "Last but not least, we provided significant assistance and guidance to the Ravenwood Raptors high schoo" +
    "l iGEM team. In a series of conversations with Dr. Amanda Benson, we planned a smaller scale version of our ow" +
    "n project that involved only a single terpene synthase gene. After visiting the high school and presenting our" +
    " idea, the students voted to choose it for their project. We also provided the primers and sage genomic DNA te" +
    "mplate they used in their experiments. ";
    var p2 = createP(text);

    document.getElementById("left_page").appendChild(head);
    document.getElementById("left_page").appendChild(p1);
    document.getElementById("left_page").appendChild(building);
    document.getElementById("left_page").appendChild(p2);
}

function createCollaborationsRight() {
    var header = document.createElement("header");
    header.appendChild(document.createTextNode("References"));

    var text1 = "1. USDA Industrial Uses Reports. Essential Oils Widely Used in Flavors and Fragrances. September 1995.";
    var text2 =
        "2. Ajikumar PK, Tyo K, Carlsen S, Mucha O, Phon TH, Stephanopoulos G. Terpenoids: opportunities for biosynth" +
        "esis of natural product drugs using engineered microorganisms. Mol Pharm. 2008;5(2):167-90.";
    var text3 =
        "3. Dudareva N, Klempien A, Muhlemann JK, Kaplan I. Biosynthesis, function and metabolic engineering of plant " +
        "volatile organic compounds. New Phytol. 2013;198(1):16-32.";
    var text4 =
        "4.Martin VJ, Pitera DJ, Withers ST, Newman JD, Keasling JD. Engineering a mevalonate pathway in Escherichia " +
        "coli for production of terpenoids. Nat Biotechnol. 2003;21(7):796-802.";

    var p1 = createP(text1);
    var p2 = createP(text2);
    var p3 = createP(text3);
    var p4 = createP(text4);

    p1.style.fontStyle = "italic";
    p2.style.fontStyle = "italic";
    p3.style.fontStyle = "italic";
    p4.style.fontStyle = "italic";

    document.getElementById("right_page").appendChild(header);
    document.getElementById("right_page").appendChild(p1);
    document.getElementById("right_page").appendChild(p2);
    document.getElementById("right_page").appendChild(p3);
    document.getElementById("right_page").appendChild(p4);
}

function addMultLI(ul, arr) {
    for(var i = 0; i < arr.length; i++) {
        addLI(ul, arr[i]);
    }
}

/** END OF: TAB PAGES ---------------------------------------------------------------------------**/
//------------------------------------------------------------------------------------------------//
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
function createRowArray(table, elements, size) {
    var row = table.insertRow();
    row.style.textAlign="center";

    for (var i = 0; i < size; i++) {
        var str = row.insertCell(i);
        str.appendChild(elements[i]);
    }
}

function createPhoto(src, alt, w, h, para) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.width = w;
    img.height = h;

    var photo = document.createElement("div");
    photo.style.backgroundColor = "floralwhite";
    photo.style.position = "relative";
    photo.style.display = "inline-border";
    photo.style.width = img.width + "px";
    photo.style.height = (img.height + 50) + "px";
    photo.style.padding = "0.5em";
    photo.style.margin = "1%";
    photo.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)";

    var text = document.createElement("p");
    text.appendChild(document.createTextNode(para));
    text.style.textAlign = "left";
    text.style.overflow = "auto";
    text.style.float = "right";
    text.style.fontStyle = "italic";

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
    img.className = "var_page_img";
    img.style.float = f;
    img.style.marginLeft = "1%";
    img.style.marginRight = "1%";

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