/**
 * Created by Anna Hwang on 1/15/2015.
 */

var leftPageBuilder = document.getElementById("left_page");
var rightPageBuilder = document.getElementById("right_page");

function SubPageBuilderFactory() {
    this.makeBuilder = function(pageNum) {
        switch(pageNum) {
            case 3:
                return new ProjectSubPageBuilder();
            case 4:
                return new PartsSubPageBuilder();
            case 5:
                return new NotebookSubPageBuilder();
            case 7:
                return new AttributionsSubPageBuilder();
            default:
                return new SubPageBuilder();
        }
    };
}

/**@class SubPageBuilder
 * @description Creates the correct SubPage based on the SubPageNum input and the pageNum passed to it upon
 * construction **/
function SubPageBuilder() {
    var maxSubPage = 1;

    this.getMaxSubPage = function() {
        document.getElementById("igem_header").innerHTML = "for some reason here";
        return maxSubPage;
    };

    this.createSubPage = function (subPageNum) {};

    this.addMultLI = function(ul, arr) {
        for(var i = 0; i < arr.length; i++) {
            var tmp = document.createElement("LI");
            tmp.appendChild(document.createTextNode(arr[i]));
            ul.appendChild(tmp);
        }
    };

    this.insertTextRow = function(table, names){
        var row = table.insertRow();
        row.style.textAlign="center";
        for (var i = 0; i < names.length; i++) {
            var str = row.insertCell(i);
                str.innerHTML = names[i];
        }
    };

    this.createRowFromArray = function(table, elements) {
        var row = table.insertRow();
        row.style.textAlign="center";
        for (var i = 0; i < elements.length; i++) {
            var str = row.insertCell(i);
            str.appendChild(elements[i]);
        }
    };

    this.createPhoto = function(src, alt, w, h, para) {
        var img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.width = w;
        img.height = h;
        img.style.margin = "0px";

        var photo = document.createElement("div");
        photo.style.backgroundColor = "floralwhite";
        photo.style.position = "relative";
        photo.style.display = "inline-block";
        photo.style.width = img.width + "px";
        photo.style.height = (img.height + 70) + "px";
        photo.style.padding = "0.5em";
        photo.style.margin = "1%";
        photo.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)";

        var text = document.createElement("p");
        text.appendChild(document.createTextNode(para));
        text.style.height = "65px";
        text.style.textAlign = "right";
        text.style.overflow = "auto";
        text.style.fontStyle = "italic";
        text.style.margin = "2px";

        photo.appendChild(img);
        photo.appendChild(text);
        return photo;
    };

    this.createP = function(str){
        document.getElementById("igem_header").innerHTML = "reached createP";
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(str));
        return p;
    };

    this.createPlainIMG = function(src, alt, w, h){
        var img = document.createElement("img");
        img.src = src;
        img.alt =  alt;
        img.width = w;
        img.height = h;
        return img;
    };

    this.createIMG = function(src, alt, w, h, f){
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
    };
}

function ProjectSubPageBuilder() {
    var subPage = new SubPageBuilder();
    subPage.maxSubPage = 5;

    document.getElementById("igem_header").innerHTML = "subPage.prototype = SbPageBuilder? : " + (Object.getPrototypeOf(subPage) == SubPageBuilder).toString();

    subPage.getMaxSubPage = function() {
        return subPage.maxSubPage;
    };

    subPage.createSubPage = function (subPageNum) {
        switch(subPageNum){
            case 1:
                subPage.createIntroLeft();
                subPage.createIntroRight();
                break;
            case 2:
                subPage.createDesignLeft();
                subPage.createDesignRight();
                break;
            case 3:
                subPage.createMethodsLeft();
                subPage.createMethodsRight();
                break;
            case 4:
                subPage.createResultsDirectionsLeft();
                subPage.createResultsDirectionsRight();
                break;
            case 5:
                subPage.createCollaborationsLeft();
                subPage.createCollaborationsRight();
                break;
        }
    };

    subPage.createIntroLeft = function() {
        var head = document.createElement("header");
        head.appendChild(document.createTextNode("Introduction"));

        var text = "The production of plant essential oils and their derivatives represents an over 9 billion dollar " +
            "industry when considering just their applications in the food and fragrance industries 1. A staggering 23 " +
            "million kilograms of citrus oil alone are produced worldwide each year. Up until only a couple decades ago, " +
            "the production of these essential oils was done exclusively by chemical extraction from plant material. " +
            "However, the sudden emergence of synthetic biology a versatile and efficient tool has the potential to " +
            "transform this immense industry, the products of which nearly everyone will come in contact with on a daily " +
            "basis. ";

        var p1 = subPage.createP(text);
        document.getElementById("igem_header").innerHTML = "reached intro left 2";

        var plant = subPage.createIMG("VU_greenhouse_plants.JPG", "VU greenhouse plants", 300, 300, "right");

        text = "By harnessing existing biosynthetic pathways and introducing enzymes taken from plants into more " +
        "malleable model systems, it will be possible to significantly improve on current methods of the active " +
        "components of essential oils, most notably the terpenoids. While most plants express terpenes in the range of " +
        "parts per million and thus require very large scale operations to be commercially viable, early forays into the " +
        "biological production of terpenes have proven that it is possible to improve yields 100-fold 2. We selected a " +
        "total of nine different terpenes to produce (see table), each of which has practical applications which make " +
        "them prime candidates for alternate means of production. The first aspect of our project involves using the " +
        "great potential of synthetic biology to design a commercially-viable strategy for the production of any class " +
        "of terpenoid. ";
        var p2 = subPage.createP(text);

        text = "Just as important to the economic benefit of this approach is its environment benefit. With chemical " +
        "terpene extraction being such a relatively inefficient process, it is necessary to process large amounts of " +
        "plant material to get a substantive yield. This may not pose as significant of an issue for citrus growers, but" +
        " many of the most prized compounds are taken from the rarest species of plant. The continuation of the status quo " +
        "in terms of terpene extraction is not an environmentally sustainable solution. In our selection of terpenes, we " +
        "placed a large emphasis on choosing compounds from some of the most rare species possible. ";
        var p3 = subPage.createP(text);

        text = "The best example of this idea behind our project can be seen in the gene for santalene synthase. The only " +
        "species know to have genes to produce this terpene are found in remote regions of India and Australia, and one " +
        "of them is listed as a vulnerable species by the IUCN. The trees can live for hundreds of years, but are the " +
        "target of widespread over-exploitation, to the point that, for example, the Indian government has banned the " +
        "export of sandalwood. Synthetic biology can produce the exact same active ingredients of sandalwood oil in a " +
        "way that is both more economically and environmentally sound. ";
        var p4 = subPage.createP(text);

        text = "In order for our idea to truly be applicable to exotic and endangered species of plant, we had to take an " +
        "approach that was quite different from the one most iGEM teams have historically taken. What we were looking for " +
        "was a quick, inexpensive method of cloning genes that was also compatible with species that have not had their " +
        "entire genomes sequenced. Often, iGEM teams resort to synthesizing their genes through third parties. However, " +
        "this can be fairly costly especially given the moderately large size of many of these synthase genes, may take " +
        "several weeks or even a month to finish synthesizing, and cannot be done unless the gene's sequence is known in " +
        "its entirety. By going back to basics and taking raw plants as our source material, we were able to avoid these " +
        "issues and demonstrated how our approach was a practically viable one.";
        var p5 = subPage.createP(text);

        leftPageBuilder.appendChild(head);
        leftPageBuilder.appendChild(p1);
        leftPageBuilder.appendChild(plant);
        leftPageBuilder.appendChild(p2);
        leftPageBuilder.appendChild(p3);
        leftPageBuilder.appendChild(p4);
        leftPageBuilder.appendChild(p5);
    };

    subPage.createIntroRight = function() {
        var table = document.createElement("table");
        table.style.margin = "auto";
        var row = table.insertRow();

        var cell = row.insertCell(0);
        cell.appendChild(subPage.createPhoto("VU_Cadenine.png", "Cadenine", 150, 150, "Cadenine"));
        cell = row.insertCell(1);
        cell.appendChild(subPage.createPhoto("VU_Carene.png", "Caderene", 150, 150, "Caderene"));
        cell = row.insertCell(2);
        cell.appendChild(subPage.createPhoto("VU_Humelene.png", "Humelene", 150, 150, "Humelene"));

        row = table.insertRow();
        cell = row.insertCell(0);
        cell.appendChild(subPage.createPhoto("VU_Myrcene.png", "Myrcene", 150, 150, "Myrcene"));
        cell = row.insertCell(1);
        cell.appendChild(subPage.createPhoto("VU_R_linalool.png", "R Linalool", 150, 150, "R Linalool"));
        cell = row.insertCell(2);
        cell.appendChild(subPage.createPhoto("VU_S_linalool.png", "S Linalool", 150, 150, "S Linalool"));

        row = table.insertRow();
        cell = row.insertCell(0);
        cell.appendChild(subPage.createPhoto("VU_Sabinene.png", "Sabinene", 150, 150, "Sabinene"));
        cell = row.insertCell(1);
        cell.appendChild(subPage.createPhoto("VU_Santalene.png", "Santalene", 150, 150, "Santalene"));
        cell = row.insertCell(2);
        cell.appendChild(subPage.createPhoto("VU_Zingiberene.png", "Zingiberene", 150, 150, "Zingiberene"));

        rightPageBuilder.appendChild(table);
    };

    subPage.createDesignLeft = function() {
        var head = document.createElement("header");
        head.appendChild(document.createTextNode("Design"));

        var text = "Terpene biosynthesis in plants is part of larger pathways that metabolize isoprenoid intermediates. " +
            "Genes encoding for enzymes known as synthases catalyze the terminal step in these pathways, from a precursor " +
            "(commonly farnesyl pyrophosphate (FPP) or garnyl pyrophosphate (GPP)) to the final terpene product. As it " +
            "happens, two well established and genetically manipulable model organisms- the bacterium Escherichia coli " +
            "and baker's yeast Saccharomyces cerevisiae- produce moderate amounts of GPP and FPP as part of their " +
            "endogenous non-mevalonate pathway (MEP) and mevalonate pathway (MEV) respectively3. All that is required " +
            "for either of these organisms to begin producing terepenes is to introduce that single synthase gene. ";
        var p1 = subPage.createP(text);

        text = "Yeast initially was our main target for a few advantages it appeared to have as a production platform. " +
        "First, the MEV pathway is found in all eukaryotes including plants and fungi, so better yield were expected by " +
        "choosing it over the MEP pathway in prokaryotes4. Second, it would be possible to physically integrate our gene" +
        " into one of the yeast's chromosomes by using homologous recombination. An inducible promoter could be included" +
        " to further increase production. Third, as a diploid the yeast could be made homozygous for the terpene gene. We" +
        " soon found out that no exiting vector had all of the features we would want. Therefore, we designed our own new" +
        " plasmid vector, pVU140006, that contained a number of important features and advances over previous plasmids for" +
        " this purpose. See our parts page for more information on what special features we included and their relevance " +
        "to the project";
        var p2 = subPage.createP(text);

        leftPageBuilder.appendChild(head);
        leftPageBuilder.appendChild(p1);
        leftPageBuilder.appendChild(p2);
    };

    subPage.createDesignRight = function() {
        var img = subPage.createPhoto(
            "Terpenoid_biosynthesis_pathway.png","Terpenoid Biosysnthesis Pathway", 700, 967,
            "Terpenoid Biosysnthesis Pathway");
        img.style.margin = "auto";
        img.style.marginBottom = "1em";
        rightPageBuilder.appendChild(img);
    };

    subPage.createMethodsLeft = function() {
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
        var p1 = subPage.createP(text);

        text = "Each group first planted seeds under the appropriate soil, humidity, and temperature conditions at the" +
        " Vanderbilt Greenhouse. Once the majority of these grew into saplings with green leaves, Samples were flash froz" +
        "en in liquid nitrogen in preparation for a genomic DNA extraction. After the extractions, nanodrop concentration" +
        " readings and agarose gels confirmed the presence of high molecular weight genomic DNA. Groups then ran a PCR on" +
        " their genomic DNA with primers specific to their synthase gene. More gels were run to check for PCR product. At" +
        " this point, the semester was coming to an end, so groups were disbanded before most managed to isolate their sy" +
        "nthase gene. Over the summer, the president and wetware director continued troubleshooting those genes which wer" +
        "e not amplifying and eventually got each to the point where consistent PCR product bands were produced. ";
        var p2 = subPage.createP(text);

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
        var p3 = subPage.createP(text);

        text = "In the spring concurrent to work by the terpene groups, work began on plasmid construction. This was pre" +
        "formed by the president, wetware director, and a handful of others rather than in group format. Each gene casset" +
        "te for our final plasmid was first identified in an existing, readily available plasmid. All of these cassettes " +
        "were extracted by PCR using those plasmids as templates. Overlap extension PCR was then done on the gel-purifie" +
        "d product to add restriction sites and homology regions for the purposes of eventually combining all of the cas" +
        "settes together into a single plasmid. By the end of the summer, only one final fragment remained to be inserte" +
        "d to complete the intermediate plasmid pVU14004. Upon the successful creation of pVU14004, several restriction" +
        " enzyme sites had to be removed by site directed mutagensis in order to make the plasmid RFC10 compatible. ";
        var p4 = subPage.createP(text);

        leftPageBuilder.appendChild(head);
        leftPageBuilder.appendChild(p1);
        leftPageBuilder.appendChild(p2);
        leftPageBuilder.appendChild(p3);
        leftPageBuilder.appendChild(p4);
    };

    subPage.createMethodsRight = function() {
        var img1 = subPage.createPhoto("VU_experiment_1_diagram.png", "Experiment 1 Diagram",
            421, 571, "Experiment 1 Diagram");
        img1.style.margin = "auto";
        img1.style.marginBottom = "1em";
        var img2 = subPage.createPhoto("VU_experiment_2_diagram.png", "Experiment 2 Diagram",
            484, 591, "Experiment 2 Diagram");
        img2.style.margin = "auto";
        img2.style.marginBottom = "1em";

        document.getElementById("right_page").appendChild(img1);
        document.getElementById("right_page").appendChild(img2);
    };

    subPage.createResultsDirectionsLeft = function() {
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
        var p1 = subPage.createP(text);

        text = "We successfully constructed pVU14004, which contains all of the cassettes needed to have all of function" +
        "ality we had intended. However, this form of the plasmid has XbaI and EcoRI sites that make it incompatible with " +
        "RFC10. These sites were successfully changed to missense mutations by site directed mutagenesis. The final step " +
        "required to make pVU14006 is changing the multiple cloning site (MCS) to have the biobrick prefix and suffix. In" +
        " its current form, the plasmid has a functional MCS but it does not yet have the specific order of EcoRI, XbaI," +
        " SpeI, and PstI sites required by RFC10. ";
        var p2 = subPage.createP(text);

        text = "For a listing of all the medal requirements we successfully fulfilled over the course of our project, " +
        "please visit this page.";
        var p3 = subPage.createP(text);

        document.getElementById("left_page").appendChild(head);
        document.getElementById("left_page").appendChild(p1);
        document.getElementById("left_page").appendChild(p2);
        document.getElementById("left_page").appendChild(p3);
    };

    subPage.createResultsDirectionsRight = function() {
        var table = document.createElement("table");
        table.style.margin = "auto";

        var cTitles = ["Terpene",
            "Plant Genomic DNA Extraction Success",
            "PCR-isolation of Synthase Gene",
            "Plant RNA Extraction success",
            "Synthase Gene Reverse-Transcription success",
            "Terpene Production in E.coli/yeast success"];

        subPage.insertTextRow(table, cTitles);

        var greenCheck = "Green_check_mark.png";
        var redX = "Red_X.png";
        var yellowSquare = "Yellow_square.png";

        var row1 = [document.createTextNode("Cadinene"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x")];

        var row2 = [document.createTextNode("Carene"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x")];

        var row3 = [document.createTextNode("Humelene"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x")];

        var row4 = [document.createTextNode("Myrcene"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x")];

        var row5 = [document.createTextNode("(R)-Linalool"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x")];

        var row6 = [document.createTextNode("(L)-Linalool"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x")];

        var row7 = [document.createTextNode("Sabinene"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(yellowSquare, "yellow square", 32, 32, "yellow square")];

        var row8= [document.createTextNode("Santalene"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(yellowSquare, "yellow square", 32, 32, "yellow square")];

        var row9 = [document.createTextNode("Zingiberene"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(greenCheck, "green check", 32, 32, "green check"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x"),
            subPage.createPlainIMG(redX, "red x", 32, 32, "red x")];

        subPage.createRowFromArray(table, row1);
        subPage.createRowFromArray(table, row2);
        subPage.createRowFromArray(table, row3);
        subPage.createRowFromArray(table, row4);
        subPage.createRowFromArray(table, row5);
        subPage.createRowFromArray(table, row6);
        subPage.createRowFromArray(table, row7);
        subPage.createRowFromArray(table, row8);
        subPage.createRowFromArray(table, row9);

        rightPageBuilder.appendChild(table);
    };

    subPage.createCollaborationsLeft = function() {
        var head = document.createElement("header");
        head.appendChild(document.createTextNode("Results and Directions"));

        var text = "In addition to our own wetware project, our team led fruitful collaborations with a total of three" +
            " other iGEM teams. First, we played a major role in assisting Vanderbilt's microfluidic division with the b" +
            "iological aspect of their project. We prepared the biobrick parts they tested in their microfluidic device" +
            ", including transforming the E. coli they used to study their quorum-sensing fluorescent oscillator circui" +
            "t. Second, we provided feedback to Vanderbilt's software division about their own project involving a prog" +
            "ram to aid in the manipulation of genetic sequences. We used the program as if it were for a real project " +
            "and gave them suggestions on how to make their program easier to use and more useful to biologists. ";
        var p1 = subPage.createP(text);

        var building = subPage.createPhoto("Ravenwood_high_school.jpg", "Ravenwood High School", 250, 250, "Ravenwood High School");
        building.style.float = "left";
        building.style.margin = "1%";

        text = "Last but not least, we provided significant assistance and guidance to the Ravenwood Raptors high schoo" +
        "l iGEM team. In a series of conversations with Dr. Amanda Benson, we planned a smaller scale version of our ow" +
        "n project that involved only a single terpene synthase gene. After visiting the high school and presenting our" +
        " idea, the students voted to choose it for their project. We also provided the primers and sage genomic DNA te" +
        "mplate they used in their experiments. ";
        var p2 = subPage.createP(text);

        leftPageBuilder.appendChild(head);
        leftPageBuilder.appendChild(p1);
        leftPageBuilder.appendChild(building);
        leftPageBuilder.appendChild(p2);
    };

    subPage.createCollaborationsRight = function() {
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

        var p1 = subPage.createP(text1);
        var p2 = subPage.createP(text2);
        var p3 = subPage.createP(text3);
        var p4 = subPage.createP(text4);

        p1.style.fontStyle = "italic";
        p2.style.fontStyle = "italic";
        p3.style.fontStyle = "italic";
        p4.style.fontStyle = "italic";

        rightPageBuilder.appendChild(header);
        rightPageBuilder.appendChild(p1);
        rightPageBuilder.appendChild(p2);
        rightPageBuilder.appendChild(p3);
        rightPageBuilder.appendChild(p4);
    };

    return subPage;
}

function PartsSubPageBuilder() {
    var subPage = new SubPageBuilder();
    subPage.maxSubPage = 3;

    subPage.getMaxSubPage = function() {
        return subPage.maxSubPage;
    };

    subPage.createSubPage = function(subPageNum) {
        switch(subPageNum){
            case 1:
                subPage.createBBa_K1322231Left();
                subPage.createBBa_K1322231Right();
                break;
            case 2:
                subPage.createpVU14006Left();
                subPage.createpVU14006Right();
                break;
            case 3:
                subPage.createBBa_K1322001SabineneSynthaseLeft();
                subPage.createBBa_K1322001SabineneSynthaseRight();
                break;
        }
    };

    subPage.createBBa_K1322231Left = function() {
        var header = document.createElement("header");
        header.appendChild(document.createTextNode("BBa_K1322231: Optimized Santalene Synthase"));

        var text1 =
            "BBa_K1322231 is a codon-optimized biobrick part encoding the gene for alpha-santalene synthase (E" +
            "C 4.2.3.82). The enzyme catalyze the conversion of the common isoprenoid intermediate farnesyl pyrophospha" +
            "te (FPP) into the sesquiterpene (+)-alpha-santelene in a single step. Traces of (-)-beta-santalene and ber" +
            "gamontene have previously been shown to be produced by this enzyme as well. ";
        var text2 =
            "The gene, derived from a relative of the exotic sandalwood tree, has been demonstrated to produce function" +
            "al terpene product in both yeast (Scalcinati et al 2012) and E. coli (data pending). This is possible due to" +
            " several endogenous pathways that produce FPP as an intermediate, including the MEV and MEP pathways.";
        var text3 =
            "In addition to being a prized fragrance, with what is often described as a warm, sweet woody scent, the " +
            "sandalwood oil has been investigated for a number of other practical applications, including as a chemopr" +
            "otective against carcinogenesis (Banaerjee, Ecavade, and Rao 1993) and inhibitors of viral reproduction " +
            "(Koch et al 2008). ";
        var text4 =
            "Our biobrick has additional functionality added to it beyond just the coding sequence for santalene synth" +
            "ase. Immediately before the start codon is a yeast consensus sequence to permit efficient translation of " +
            "the gene transcript in S. cerevisiae. Toward the end of the sequence there is also a sequence added inside" +
            " the reading frame that encodes for a strep tag. The strep tag is a small, eight amino acid epitope tag th" +
            "at is translated onto the C terminus of the recombinant polypeptide. Its small size ensures that it will " +
            "not likely interfere with protein function, yet in most situations it is still prominent enough that the " +
            "common molecule streptavidin (in the form of Strep-tactin) can recognize and bind to it. Because anti-str" +
            "eptavidin antibodies are widely available, this opens the way for a range of possibilities, including sim" +
            "ple confirmation assays of synthase expression by western blotting and quick purification of the synthase" +
            " enzyme. ";
        var text5 =
            "We confirmed our part succesfully ligated into pSB1C3 by a diagnostic digest of miniprepped plasmid. While " +
            "none of the samples had the santalene insert cleanly cut out, two observations were made which confirmed th" +
            "at in the fourth miniprepped sample, santalene had been successfully integrated. First, the size of the uncu" +
            "t fourth plasmid is equal to pSB1C3 plus the santalene synthase gene. Second, it was later noticed that the" +
            " plasmids were grown in a non-demethylated strain of E. coli. This would explain why no inserts were cut ou" +
            "t, since one enzyme used, ApaI, was dam methylation sensitive. This would also explain why the digested prod" +
            "uct is consistently larger than the undigested, since the linearized DNA should be above the uncut supercoil" +
            "ed form (Tirabassi 2014).";

        var p1 = subPage.createP(text1);
        var p2 = subPage.createP(text2);
        var p3 = subPage.createP(text3);
        var p4 = subPage.createP(text4);
        var p5 = subPage.createP(text5);

        leftPageBuilder.appendChild(header);
        leftPageBuilder.appendChild(p1);
        leftPageBuilder.appendChild(p2);
        leftPageBuilder.appendChild(p3);
        leftPageBuilder.appendChild(p4);
        leftPageBuilder.appendChild(p5);
    };

    subPage.createBBa_K1322231Right = function() {
        var img1 = subPage.createPhoto("VU_Santalene_biosynthesis_path.gif",
            "Santalene Biosynthesis Path",
            450, 122.25,
            "Santalene Biosynthesis Path");
        img1.style.margin = "auto";
        img1.style.marginBottom = "1em";

        var img2 = subPage.createPhoto("VU_San_psb_confirmation.jpg",
            "San PSB Confirmation",
            500, 290,
            "San PSB Confirmation");
        img2.style.margin = "auto";
        img2.style.marginBottom = "1em";

        rightPageBuilder.appendChild(img1);
        rightPageBuilder.appendChild(img2);
    };

    subPage.createpVU14006Left = function() {
        var header = document.createElement("header");
        header.appendChild(document.createTextNode("pVU14006"));

        var text1 = "As a shuttle vector, pVU14006 is capable of expression both in E. coli and S. cerevisiae. It has r" +
            "esistance markers to both ampicillin and kanomycin, making selection convenient in both bacteria and yeas" +
            "t. For cloning in bacteria, it has a prokaryotic origin of replication taken out of pUC19. Two regions of" +
            " base pair homology with the S. cerevisiae genome allow it to efficiently integrate into the yeast genome" +
            ". Genomic integration has a number of advantages, including the potential for increased product yield. Th" +
            "ere is a multiple cloning site with a range of different restriction enzymes to make the plasmid compatib" +
            "le with almost all of the most commonly used restriction enzymes, including those used in RFC10 compatibl" +
            "e biobricks.";

        var text2 = "A Gal1 inducible promoter is upstream of where the protein coding gene would be inserted. This prom" +
            "oter is strongly repressed by glucose and further allows the protein coding gene to be transcriptionally up-" +
            "regulated upon the addition of galactose. Changing which of these two carbohydrates are present in the growt" +
            "h media therefore gives an enormous degree of control over the level of gene expression. Finally, a CYC1 te" +
            "rminator is present to ensure proper termination of transcription.";

        var p1 = subPage.createP(text1);
        var p2 = subPage.createP(text2);

        leftPageBuilder.appendChild(header);
        leftPageBuilder.appendChild(p1);
        leftPageBuilder.appendChild(p2);
    };

    subPage.createpVU14006Right = function() {
        var img3 = subPage.createPhoto("VU_pVU14006.jpg",
            "pVU14006",
            698, 448,
            "pVU14006");
        img3.style.margin = "auto";
        img3.style.marginBottom = "1em";

        rightPageBuilder.appendChild(img3);
    };

    subPage.createBBa_K1322001SabineneSynthaseLeft = function() {
        var header1 = document.createElement("header");
        header1.appendChild(document.createTextNode("BBa_K1322001- All-RFC Compatible Fluorescent Oscillator"));

        var header2 = document.createElement("header");
        header2.appendChild(document.createTextNode("Sabinene Synthase"));

        var rheader = document.createElement("header");
        rheader.appendChild(document.createTextNode("References"));
        rheader.style.fontSize = "1em";

        var text1 = "As part of our collaboration with Vanderbilt Microfluidics, we were working with the existing bio" +
            "brick K546546, which encodes a self-regulating fluorescent oscillating system. We wanted to make this par" +
            "t compatible with all major RFC standards, and did so by using our site-directed mutagenesis kit with spe" +
            "cially designed primers. The sequence changes were designed so that the part should function equally well" +
            " as it did before. For a gel showing confirmation, please see our lab notebook under October 11th.";

        var text2 = "Although it is not yet RFC10 compatible and thus will not appear in the registry until later, we h" +
            "ave successfully extracted the gene for sabinene synthase out of raw plant RNA. Following successful mutag" +
            "enesis, we plan to add the biobrick prefix and suffixes so that this part can be made available at the reg" +
            "istry for other iGEM teams to use.";

        var ref1 = "Scalcinati et al.: Combined metabolic engineering of precursor and co-factor supply to increa" +
            "se α-santalene production by Saccharomyces cerevisiae. Microbial Cell Factories 2012 11:117";

        var ref2 = "Banerjee, Ecavade and Rao: Modulatory influence of sandalwood oil on mouse hepatic glutathione S-tr" +
            "ansferase activity and acid soluble sulphydryl level. Cancer Letters, 68 (1993) 105 - 109 Koch et al: Inhi" +
            "bitory effect of essential oils against herpes simplex virus type 2. Phytomedicine 2008;15(1-2):71-8. ";

        var ref3 = "Rebecca Tirabassi, How to identify supercoils, nicks and circles in plasmid preps. Bitesizebio. Oc" +
            "tober 8, 2014.";

        var p1 = subPage.createP(text1);
        var p2 = subPage.createP(text2);
        var p_ref1 = subPage.createP(ref1);
        var p_ref2 = subPage.createP(ref2);
        var p_ref3 = subPage.createP(ref3);

        p_ref1.style.fontStyle = "italic";
        p_ref2.style.fontStyle = "italic";
        p_ref3.style.fontStyle = "italic";

        p_ref1.style.fontSize = "0.75em";
        p_ref2.style.fontSize = "0.75em";
        p_ref3.style.fontSize = "0.75em";

        leftPageBuilder.appendChild(header1);
        leftPageBuilder.appendChild(p1);
        leftPageBuilder.appendChild(header2);
        leftPageBuilder.appendChild(p2);
        leftPageBuilder.appendChild(rheader);
        leftPageBuilder.appendChild(p_ref1);
        leftPageBuilder.appendChild(p_ref2);
        leftPageBuilder.appendChild(p_ref3);
    };

    subPage.createBBa_K1322001SabineneSynthaseRight = function() {
        var img3 = subPage.createPhoto("Sabinene_synthesis_pathway.gif",
            "Sabinene Synthesis Pathway",
            597, 192,
            "Sabinene Synthesis Pathway");
        img3.style.margin = "auto";
        img3.style.marginBottom = "1em";

        rightPageBuilder.appendChild(img3);
    };

    return subPage;
}

function NotebookSubPageBuilder() {
    var subPage = new SubPageBuilder();
    subPage.maxSubPage = 3;

    subPage.getMaxSubPage = function() {
        return subPage.maxSubPage;
    };

    subPage.createSubPage = function(subPageNum) {
        document.getElementById("igem_header").innerHTML = "reachd createSubPage (notebook)";
        switch(subPageNum) {
            case 1:
                subPage.createSpring2014Left();
                subPage.createSpring2014Right();
                break;
            case 2:
                subPage.createSummer2014Left();
                subPage.createSummer2014Right();
                break;
            case 3:
                subPage.createFall2014Left();
                subPage.createFall2014Right();
                break;
        }
    };

    subPage.createSpring2014Left = function() {
        document.getElementById("igem_header").innerHTML = "reachd createsummer2014left";
        var header = document.createElement("header");
        header.appendChild(document.createTextNode("Spring 2014"));

        var p_m27 = subPage.createP("March 27th");
        var p_m30 = subPage.createP("March 30th");
        var p_m31 = subPage.createP("March 31st");

        var p_a1 = subPage.createP("April 1st");
        var p_a2 = subPage.createP("April 2nd");
        var p_a3 = subPage.createP("April 3rd");
        var p_a4 = subPage.createP("April 4th");
        var p_a5 = subPage.createP("April 5th");
        var p_a7 = subPage.createP("April 7th");
        var p_a24 = subPage.createP("April 24th");
        var p_a25 = subPage.createP("April 25th");
        var p_a27 = subPage.createP("April 27th");
        var p_a29 = subPage.createP("April 29th");

        var m27 = document.createElement("ul");
        var m30 = document.createElement("ul");
        var m31 = document.createElement("ul");

        var a1 = document.createElement("ul");
        var a2 = document.createElement("ul");
        var a3 = document.createElement("ul");
        var a4 = document.createElement("ul");
        var a5 = document.createElement("ul");
        var a7 = document.createElement("ul");
        var a24 = document.createElement("ul");
        var a25 = document.createElement("ul");
        var a27 = document.createElement("ul");
        var a29 = document.createElement("ul");

        var text = [["Extracted genomic DNA from 100 mg of Arabidopsis thaliana leaves using a Viogene DNA extraction kit. Samples were " +
        "labeled ZIN for zingiberene."],
            ["Two samples were prepared and nanodropped. The concentration of the first w" +
            "as 2.6 ng/ul, and the second was 3.5 ng/ul of DNA, indicating a minimal yield of DNA."]];
        subPage.addMultLI(m27, text);

        text = [["Extracted genomic DNA from 100 mg of Picea abies needles using the same extr" +
        "action kit and protocol. Samples were labeled CAR for carene."],
            ["Two samples were prepared and nanodropped. The concentration of the first w" +
            "as 2.6 ng/ul, and the second was 3.5 ng/ul of DNA, indicating a minimal yield of DNA."]];
        subPage.addMultLI(m30, text);

        text = [["Ran a 0.6 % argarose gel on the DNA extracted from ZIN and CAR, as well as the column flow-throu" +
        "gh from the kit."],
            ["ZIN1, ZIN2, CAR1, and CAR2 all show a faint but distinct DNA band above the highest rung on the DNA l" +
            "adder (>10kb), showing the presence of DNA. No bands were seen on the kit flow-through. Indicates successful g" +
            "enomic extraction."],
            ["Preformed a second genomic extraction on Picea abies to improve yield. Nanodrop shows CAR3 to be " +
            "at 6.2 ng/ul and CAR4 to be 11.5 ng/ul."],
            ["Extracted genomic DNA from Gossypium hirsutum. Samples nanodroppped: CAD1 1.8 ng/ul and CAD2 7.8 ng/ul."]];
        subPage.addMultLI(m31, text);

        text = [["Ran a gel on CAR3, CAR4, CAD1, and CAD2. Brighter genomic DNA bands were seen on the cadinene camples" +
        " than before, but cadinene samples showed significant smearing near the top of the gel."]];
        subPage.addMultLI(a1, text);

        text = [["Extracted genomic DNA from Salvia officinalis . Samples nanodropped: SAB1 7.5 ng/ul, and SAB 11.4 ng/ul."],
            ["Extracted genomic DNA from Mentha citrata . Samples nanodropped: LNR1 3.4 ng/ul, LNR2 6.2 ng/ul, LNR3 7.3 ng/ul"],
            ["E. coli containing p404GALS and pDZ207 from Addgene were grown on LB plates with ampicilin. These were min" +
            "iprepped using a Viogen kit. Samples nanodropped: p404GALS (A) 130.2 ng/ul, p404GALS (B) 112.3 ng/ul, pDZ2" +
            "07 (A) 145.3 ng/ul, pDZ207 (B) 84.1 ng/ul."]];
        subPage.addMultLI(a2, text);

        text = [["Extracted genomic DNA again from Arabidopsis thaliana . Sample nanodropped: LNS1 53.4 ng/ul, LNS2 585.2 ng/ul"],
            ["Ran gel on LNR1, LNR2, LNR3, LNS1, LNS2, SAB1, and SAB2. All show high weight DNA bands, with Linalool (S) sampl" +
            "es having the brightest."]];
        subPage.addMultLI(a3, text);

        text = [["Extracted genomic DNA from Zingiber zermbet . Sample nanodropped: HUM1 31.9 ng/ul and HUM2 18.6 ng/ul"],
            ["Extracted genomic DNA from Ocimum basilicum . Sample nanodropped: GER1 2.3 ng/ul"]];
        subPage.addMultLI(a4, text);

        text = [["Extracted genomic DNA from Santalum album seeds since the sapling was still not fully grown. Sample nan" +
        "odropped: SAN1 53.8 ng/ul and SAN2 28.4 ng/ul"]];
        subPage.addMultLI(a5, text);

        text = [["Extracted genomic DNA from Perilla frutescens . Sample nanodropped: MYR1 632.8 ng/ul and MYR2 958.6 ng/ul"],
            ["Extracted genomic DNA from Perilla frutescens . Sample nanodropped: MYR1 632.8 ng/ul and MYR2 958.6 ng/ul"]];
        subPage.addMultLI(a7, text);

        text = [["Preformed PCR using zingiberene synthase primers on LNS2 genomic DNA and using linalool (S) synthase p" +
        "rimers on the sample template."],
            ["Ran gel on PCR product. Resulted in no visible bands formed."]];
        subPage.addMultLI(a24, text);

        text = [["Took 1.8 ul of HUM1 genomic DNA and preformed a PCR with humelene synthase primers."],
            ["Ran gel on PCR product. Resulted in three total bands, one faint around 1.2 kb, and two bands very close " +
            "in size just under 3.0 kb."],
            ["Both ~3 kb bands were gel extracted, combining across all four lanes. Samples nanodropped: HUM-top 8.5 ng/u" +
            "l, HUM-bottom 10.6 ng/ul."]];
        subPage.addMultLI(a25, text);

        text = [["Preformed PCR using linalool (R) synthase primers on LNR3 genomic DNA."],
            ["Ran gel on PCR product. Resulted in no visible bands formed."]];
        subPage.addMultLI(a27, text);

        text = [["Preformed PCR using myrcene synthase primers on MYR2 genomic DNA."],
            ["Ran gel on PCR product. Smeared bands on gel but no distinct bands."],
            ["Preformed overlap-extension PCR on the gel extracted humelene samples (both HUM-top and HUM-bottom) to add " +
            "epitope tag sequence."],
            ["Ran gel on OE-PCR product. Only extremely faint bands were visible."]];
        subPage.addMultLI(a29, text);

        leftPageBuilder.appendChild(header);

        leftPageBuilder.appendChild(p_m27);
        leftPageBuilder.appendChild(m27);

        leftPageBuilder.appendChild(p_m30);
        leftPageBuilder.appendChild(m30);

        leftPageBuilder.appendChild(p_m31);
        leftPageBuilder.appendChild(m31);

        leftPageBuilder.appendChild(p_a1);
        leftPageBuilder.appendChild(a1);

        leftPageBuilder.appendChild(p_a2);
        leftPageBuilder.appendChild(a2);

        leftPageBuilder.appendChild(p_a3);
        leftPageBuilder.appendChild(a3);

        leftPageBuilder.appendChild(p_a4);
        leftPageBuilder.appendChild(a4);

        leftPageBuilder.appendChild(p_a5);
        leftPageBuilder.appendChild(a5);

        leftPageBuilder.appendChild(p_a7);
        leftPageBuilder.appendChild(a7);

        leftPageBuilder.appendChild(p_a24);
        leftPageBuilder.appendChild(a24);

        leftPageBuilder.appendChild(p_a25);
        leftPageBuilder.appendChild(a25);

        leftPageBuilder.appendChild(p_a27);
        leftPageBuilder.appendChild(a27);

        leftPageBuilder.appendChild(p_a29);
        leftPageBuilder.appendChild(a29);
    };

    subPage.createSpring2014Right = function() {
        var img1 = subPage.createPhoto("VU_Genomic_DNA_bands_check_LNS.JPG", "Genomic DNA bonds check", 395.2, 516.8,
        "An example of a gel showing high molecular weight (>10 kb) bands corresponding to successfully " +
        "extracted plant genomic DNA (in this case, samples LNS1 and LNS2 from Arabidopsis DNA");

        var img2 = subPage.createPhoto("VU_humelene_genomic_dna_pcr.JPG", "Humelene Genomic DNA PCR", 374, 348.5,
            "PCR products resulting from primers targeted to hmelene synthase using Zingiber genomic" +
            "DNA as a template. The sixth ladder band down corresponds to 3000 bp.");

        var img3 = subPage.createPhoto("VU_labeled_PCON_Gel.JPG", "Labeled PCON Gel", 374, 348.5,
            "Labeled PCON Gel");

        rightPageBuilder.appendChild(img1);
        rightPageBuilder.appendChild(img2);
        rightPageBuilder.appendChild(img3);
    };

    subPage.createSummer2014Left = function() {
        var header = document.createElement("header");
        header.appendChild(document.createTextNode("Summer 2014"));

        var p_may = subPage.createP("May");
        var p_june = subPage.createP("June");
        var p_july = subPage.createP("July");

        var may = document.createElement("ul");
        var june = document.createElement("ul");
        var july = document.createElement("ul");

        var text = [["Continued troubleshooting PCR reaction conditions for all of the terpenes that failed " +
                    "to amplify. Tried adjusting template concentration, adding DMSO, changing thermocycler program, hot " +
                    "start PCR, new polymerase and dNTPs."],
                    ["Re-did genomic extractions for those that produced less than 50 ng/ul of genomic DNA. " +
                    "Used this new template in further PCRs."],
                    ["Extracted the Gal10 gene from our template plasmid and a kanomycin resistance gene borde" +
                    "red by LoxP sites."]];
        subPage.addMultLI(may, text);

        text = [["All of the gene cassettes for plasmid construction that were successfully extracted so far" +
        " were ligated together and inserted into the MCS of pUC19. This formed our first intermediate plasmid."]];
        subPage.addMultLI(june, text);

        text = [["Finally reached the point that all terpene genes were consistently amplifying with the " +
        "synthase gene primers. The genomic DNA sample for sabinene was completely used before this point, " +
        "although all other of the 8 terpenes showed clear bands.."]];
        subPage.addMultLI(july, text);

        leftPageBuilder.appendChild(header);
        leftPageBuilder.appendChild(p_may);
        leftPageBuilder.appendChild(may);
        leftPageBuilder.appendChild(p_june);
        leftPageBuilder.appendChild(june);
        leftPageBuilder.appendChild(p_july);
        leftPageBuilder.appendChild(july);
    };

    subPage.createSummer2014Right = function() {
        var img = subPage.createPhoto("VU_genomic_DNA_PCR.jpg",
            "The results of the genomic DNA PCR on all of the plant species.",
            554, 735,
            "The results of the genomic DNA PCR indicated each gene had a large fraction of introns. " +
            "None of the genes had a distinct band at exactly the right weight corresponding with what " +
            "the intron-less cDNA size would be.");
        rightPageBuilder.appendChild(img);
    };

    subPage.createFall2014Left = function() {
        document.getElementById("igem_header").innerHTML = "reachd createsummer2014left";
        var header = document.createElement("header");
        header.appendChild(document.createTextNode("Spring 2014"));

        var p_aug = subPage.createP("August");
        var p_sept = subPage.createP("September");
        var p_s17 = subPage.createP("September 17th");
        var p_s18 = subPage.createP("September 18th");
        var p_s19 = subPage.createP("September 19th");
        var p_s20 = subPage.createP("September 20th");
        var p_s26 = subPage.createP("September 26th");

        var p_o5 = subPage.createP("October 5th");
        var p_o7 = subPage.createP("October 7th");
        var p_o9 = subPage.createP("October 9th");
        var p_o10 = subPage.createP("October 10th");
        var p_o11 = subPage.createP("October 11th");
        var p_o12 = subPage.createP("October 12th");
        var p_o13 = subPage.createP("October 13th");
        var p_o14 = subPage.createP("October 14th");
        var p_o15 = subPage.createP("October 15th");
        var p_o16 = subPage.createP("October 16th");

        var aug = document.createElement("ul");
        var sept = document.createElement("ul");
        var s17 = document.createElement("ul");
        var s18 = document.createElement("ul");
        var s19 = document.createElement("ul");
        var s20 = document.createElement("ul");
        var s26 = document.createElement("ul");

        var o5 = document.createElement("ul");
        var o7 = document.createElement("ul");
        var o9 = document.createElement("ul");
        var o10 = document.createElement("ul");
        var o11 = document.createElement("ul");
        var o12 = document.createElement("ul");
        var o13 = document.createElement("ul");
        var o14 = document.createElement("ul");
        var o15 = document.createElement("ul");
        var o16 = document.createElement("ul");

        var text = [["Moved the lab into its new space before the start of the semester."],
            ["Created the plasmid intermediate pVU1400A, which is missing only a single insert to become pVU14004."]];
        subPage.addMultLI(p_aug, text);

        text = [["Ran RNA extraction on all the plants that were still available. This excluded Myrcene and " +
        "Linalool (R) since both Perilla frutescens and Mentha aquatica had withered over the summered."],
            ["Repeated RNA extractions on those which showed appreciable concentration on the nanodrop. Event" +
            "ually all 7 remanining terpenes had plant RNA in appreciable quantities (most between 20-50 " +
            "ng/ul, with a few less than 10 and a few more than 100 ng/ul)."]];
        subPage.addMultLI(p_sept, text);

        text = [["Digested plasmid intermediate grown in demethylated bacteria with ClaI. Ligated final " +
            "insert into vector. No transfomants grow after 24 hours."],
            ["Diagnostic digest shows the ClaI enzyme is cutting properly. pUC19 positive control for transforma" +
            "tions show that the competent cells are working."]];
        subPage.addMultLI(p_s17, text);

        text = [["Ran reverse transcription PCR on extracted RNA to isolate synthase cDNA. Humelene and sabinene " +
        "show clear positive results, santalene shows amplification at smaller region, and cadinene shows no" +
        " cDNA bands."]];
        subPage.addMultLI(p_s18, text);

        text = [["Made liquid cultures of K546546 in preparation for mutagenesis. Also made glycerol stock to store at -80."],
            ["Diagnostic digest of ligation of pVU1400A intermediate and the final insert needed to make " +
            "finished plasmid. Gel clearly shows bands in exactly the correct positions for each of three " +
            "comparison conditions, proving that the creation of pVU14004 was finally successful.."]];
        subPage.addMultLI(p_s19, text);

        text = [["Miniprep of K546546 liquid cultures (1 ml ). First culture tube concentration of 85.7 ng/ul " +
                "DNA, second 105.1 ng/ul."],
                ["RNA extracted arabadopsis and Picea abies to improve yield and quality. Carene still failed to " +
                "get an RNA concentration greater than 10 ng/ul, while Arabidopsis produced 107 ng/ul with a go" +
                "od A260/A280 ratio."],
                ["Miniprep of K546546 liquid cultures (1 ml ). First culture tube concentration of 85.7 ng/ul " +
                "DNA, second 105.1 ng/ul"]];
        subPage.addMultLI(p_s20, text);

        text = [["RT-PCR done on humelene, linalool (S), sabinene, and zingiberene. Sabinene produces clear " +
        "bands, while zingiberene shows one faint band at roughly the correct size. Positive controls are also " +
        "run to confirm that the reverse transcription step is not the cause of any failures to amplify."]];
        subPage.addMultLI(p_s26, text);

        text = [["RT-PCR done on humelene, sabinene, and santalene. Sabinene again produces clear bands,and " +
        "santalene does as well although much fainter. Both bands were gel extracted to yield a small " +
        "(<10 ng/ul) amount of DNA."],
        ["Extracted DNA was ligated into pUC19 and transformed into E. coli."]];
        subPage.addMultLI(p_o5, text);

        text = [["Site direction mutagenesis kit and specially designed primers were used to mutagenize K546546 " +
        "at its BglI site, sabinene cDNA at its XbaI and EcoRI sites, and pVU14004 at its EcoRI and XbaI sites."],
            ["Mutagenesis product was transformed into E. coli."]];
        subPage.addMultLI(p_o7, text);

        text = [["Minipreps were done on 5 ml liquid cultures of mutagenized pVU14004, sabinene, and K546546. " +
        "Four liquid cultures were made for each, and both sabinene and pVU14004 were done in duplicate."],
            ["Diagnostic digests were done on miniprepped plasmid to check if the restriction sites were " +
            "mutagenized. pVU14004 appeared to have lost its XbaI site but not its EcoRI site, sabinene shows " +
            "a size that suggests it failed to ligate as an insert into pUC19, and K546 shows only a single " +
            "band at around its starting weight."]];
        subPage.addMultLI(p_o9, text);

        text = [["All 8 minipreps of sabinene ligated into pUC19 were digested with SpeI and ApaI to check for " +
        "the synthase insert. Only one, Sab B2, shows a second band at the right size."]];
        subPage.addMultLI(p_o10, text);

        text = [["Santalene synthase was ligated into pVU14004 and pSB1C3. E. coli was transformed and incubated."],
            ["The sites that failed to show mutagenesis were mutagenized again using and transformed into E. " +
            "coli. K546546 had its AgeI site mutagenized."]];
        subPage.addMultLI(p_o11, text);

        text = [["All liquid cultures were miniprepped, producing 8 samples of pVU14004 with confirmed XbaI " +
        "mutagenesis, 4 pVU14004 with no sites confirmed, 4 sabinene, and 6 samples produced from santalene in " +
        "pVU14004. None of the plates with santalene in pSB1C3 produced colonies."],
            ["Diagnostic digests were run on all miniprepped plasmid (K546- AgeI, BglI, SphI. Sabinene- EcoRI, " +
            "BamH1. Santalene in pVU- ApaI, XbaI. pVU- EcoRI, XbaI, BamHI, KpnI). Santalene appeared not to have " +
            "ligated into pVU14004. Sabinene did not have its EcoRI site removed by mutagenesis. K546546 had at least" +
            " one cut, but the second sample may have had one site mutagenized."],
            ["Santalene was re-ligated into pSB1C3 and transformed."]];
        subPage.addMultLI(p_o12, text);

        text = [["Santalene in pSB1C3 was miniprepped to good yield. Each of 4 replicates was digested with " +
        "SpeI and ApaI to test for ligation. The ApaI enzyme appears not have cut, but the fourth sample showed an " +
        "uncut plasmid size which corresponded to that of pSB1C with santalene successfully inserted."]];
        subPage.addMultLI(p_o13, text);

        text = [["Ligated santalene synthase again into pVU14004 and transformed into E. coli."]];
        subPage.addMultLI(p_o14, text);

        text = [["One colony grew and was put in liquid culture."],
            ["Culture miniprepped and digested. Again no gene insertion was detectable."]];
        subPage.addMultLI(p_o15, text);

        text = [["Transformed pVU14004 into a dam- strain of E. coli to address the methylation sensitivity of ApaI."],
            ["Finished planning and acquiring materials for GC-MS confirmation of terpene presence."]];
        subPage.addMultLI(p_o16, text);

        leftPageBuilder.appendChild(header);

        leftPageBuilder.appendChild(p_aug);
        leftPageBuilder.appendChild(aug);

        leftPageBuilder.appendChild(p_sept);
        leftPageBuilder.appendChild(sept);

        leftPageBuilder.appendChild(p_s17);
        leftPageBuilder.appendChild(s17);

        leftPageBuilder.appendChild(p_s18);
        leftPageBuilder.appendChild(s18);

        leftPageBuilder.appendChild(p_s19);
        leftPageBuilder.appendChild(s19);

        leftPageBuilder.appendChild(p_s20);
        leftPageBuilder.appendChild(s20);

        leftPageBuilder.appendChild(p_s26);
        leftPageBuilder.appendChild(s26);

        leftPageBuilder.appendChild(p_o5);
        leftPageBuilder.appendChild(o5);

        leftPageBuilder.appendChild(p_o7);
        leftPageBuilder.appendChild(o7);

        leftPageBuilder.appendChild(p_o9);
        leftPageBuilder.appendChild(o9);

        leftPageBuilder.appendChild(p_o10);
        leftPageBuilder.appendChild(o10);

        leftPageBuilder.appendChild(p_o11);
        leftPageBuilder.appendChild(o11);

        leftPageBuilder.appendChild(p_o12);
        leftPageBuilder.appendChild(o12);

        leftPageBuilder.appendChild(p_o13);
        leftPageBuilder.appendChild(o13);

        leftPageBuilder.appendChild(p_o14);
        leftPageBuilder.appendChild(o14);

        leftPageBuilder.appendChild(p_o15);
        leftPageBuilder.appendChild(o15);

        leftPageBuilder.appendChild(p_o16);
        leftPageBuilder.appendChild(o16);
    };

    subPage.createFall2014Right = function() {
        var img1 = subPage.createPhoto("VU_First_RT_PCR_results_cad_hum_sab_san.JPG",
            "Results of a reverse transcription PCR, showing the cDNA amplified from plant RNA template.",
            346, 417,
        "Results of a reverse transcription PCR, showing the cDNA amplified from plant RNA template.");

        var img2 = subPage.createPhoto("VU_Diagnostic_Digest_10-9.JPG",
            "Diagnostic digest produces bands of exactly the correct size (from left to right, 2700, 2700," +
            "and 950, 2700, and 1700, confirming that pVU14004 was successfully constructed.",
            303, 314,
            "Diagnostic digest produces bands of exactly the correct size (from left to right, 2700, 2700," +
            "and 950, 2700, and 1700, confirming that pVU14004 was successfully constructed.");

        var img3 = subPage.createPhoto("VU_PVU14004_Conf_9_19.jpg",
            "10-9 Diagnostic digest",
            340, 286.375,
            "10-9 Diagnostic digest");

        var img4 = subPage.createPhoto("VU_10-11_diagnostic_digest.JPG",
            "10-11 Diagnostic digest",
            331.5, 381.8,
            "10-11 Diagnostic digest");

        rightPageBuilder.appendChild(img1);
        rightPageBuilder.appendChild(img2);
        rightPageBuilder.appendChild(img3);
        rightPageBuilder.appendChild(img4);
    };

    return subPage;
}

function AttributionsSubPageBuilder() {
    var subPage = new SubPageBuilder();
    subPage.maxSubPage = 2;

    subPage.getMaxSubPage = function() {
        return subPage.maxSubPage;
    };

    subPage.createSubPage = function(subPageNum) {
        switch(subPageNum){
            case 1:
                document.getElementById("igem_header").innerHTML = "case 1 of attributions";
                subPage.createIntro();
                subPage.createProfFacul();
                break;
            case 2:
                subPage.createStaffRes();
                subPage.createSponsors();
                break;
        }
    };

    subPage.createIntro = function() {
        document.getElementById("igem_header").innerHTML = "beginning of createIntro";
        var header = document.createElement("header");
        header.appendChild(document.createTextNode("Our Attributions"));
        document.getElementById("igem_header").innerHTML = "1 of createIntro";

        var text = "While Vanderbilt University's iGEM team is driven by its undergraduates, our work is indebted to " +
            "the generosity of our mentors and gracious sponsors. Vanderbilt iGEM prides itself in being a team run by un" +
            "dergraduates, for undergraduates. All project design and data analysis, lab work and experimentation, fundr" +
            "aising and outreach, and all the other work done by the team was all preformed by undergraduate student vo" +
            "lunteers. However outside companies, faculty and staff, institutions, and individuals all have made contri" +
            "butions that have been essential in our team's growth and success. We would like to take the time to speci" +
            "ally thank each one of them.";

        document.getElementById("igem_header").innerHTML = "2 of createIntro";
        var p = subPage.createP(text);
        document.getElementById("igem_header").innerHTML = "middle of createIntro";

        leftPageBuilder.appendChild(header);
        leftPageBuilder.appendChild(p);
        document.getElementById("igem_header").innerHTML = "end of createIntro";
    };

    subPage.createProfFacul = function() {
        var header = document.createElement("header");
        header.appendChild(document.createTextNode("Professors and Faculty"));
        var img1 = subPage.createPhoto("VU_Chrissy_marasco.JPG",
            "Chrissy Marasco",
            300, 300,
            "Dr. Chrissy Marasco");

        var img2 = subPage.createPhoto("VU_Kevin_seale.jpg",
            "Kevin Seale",
            300, 300,
            "Kevin Seale");

        var img3 = subPage.createPhoto("VU_Kathy_friedman.jpg",
            "Kathy Friedman",
            300, 300,
            "Kathy Friedman");

        var img4 = subPage.createPhoto("VU_Ian_macara.jpg",
            "Ian Macara",
            300, 300,
            "Ian Macara");

        var img5 = subPage.createPhoto("VU_Mark_woelfle.jpg",
            "Mark Woelfle",
            300, 300,
            "Mark Woelfle");

        var img6 = subPage.createPhoto("VU_Amanda_benson.jpg",
            "Amanda Benson",
            300, 300,
            "Amanda Benson");

        rightPageBuilder.appendChild(header);
        rightPageBuilder.appendChild(img1);
        rightPageBuilder.appendChild(img2);
        rightPageBuilder.appendChild(img3);
        rightPageBuilder.appendChild(img4);
        rightPageBuilder.appendChild(img5);
        rightPageBuilder.appendChild(img6);
    };

    subPage.createStaffRes = function() {
        var header = document.createElement("header");
        header.appendChild(document.createTextNode("Staff and Resources"));
        var img1 = subPage.createPhoto("VU_Greenhouse_ertelt.jpg",
            "Vanderbilt Greenhouse and Jonathan Ertelt",
            300, 300,
            "VU Greenhouse and Jonathan Ertelt");

        var img2 = subPage.createPhoto("VU_mass_spec.jpg",
            "Mass Spec at Vanderbilt Mass Spectrometry Core",
            300, 300,
            "Vanderbilt Mass Spectrometry Core");

        var text = "Dr. Steven Baskauf for general assistance in running our lab.";
        var p1 = subPage.createP(text);

        text = "Charles Sissom and Sara Samoray for protocol advice, equipment t" +
        "raining, and assistance in running our lab.";
        var p2 = subPage.createP(text);

        text = "Anthony Tharp for access to common equipment resources.";
        var p3 = subPage.createP(text);

        text = "Vanderbilt Environmental Health and Safety for training in pro" +
        "per lab practice and safe waste disposal.";
        var p4 = subPage.createP(text);

        text = "University of Massachusetts Medical Center, especially Dr. Aviva Joseph, for tec" +
        "hnical advice related to our genetic constructs.";
        var p5 = subPage.createP(text);

        document.getElementById("left_page").appendChild(header);
        document.getElementById("left_page").appendChild(img1);
        document.getElementById("left_page").appendChild(img2);
        document.getElementById("left_page").appendChild(p1);
        document.getElementById("left_page").appendChild(p2);
        document.getElementById("left_page").appendChild(p3);
        document.getElementById("left_page").appendChild(p4);
        document.getElementById("left_page").appendChild(p5);
    };

    subPage.createSponsors = function() {
        var header = document.createElement("header");
        header.appendChild(document.createTextNode("Sponsors"));

        var img1 = [subPage.createPlainIMG("VU_SyBBURE.png", "SyBBURE", 300, 146),
                    subPage.createPlainIMG("VU_VIIBRE.png", "VIIBRE", 300, 69)];
        var img2 = [subPage.createPlainIMG("VU_Biomatters.png", "Biomatters", 300, 101),
                    subPage.createPlainIMG("VU_School_of_Engineering.jpg", "Vanderbilt School of Engineering", 300, 51)];

        var table = document.createElement("table");
        table.style.width = "80%";
        table.style.margin = "auto";

        subPage.createRowFromArray(table, img1);
        subPage.createRowFromArray(table, img2);

        document.getElementById("right_page").appendChild(header);
        document.getElementById("right_page").appendChild(table);
    };

    return subPage;
}