/**
 * Created by Anna Hwang on 1/9/2015.
 */
var pageNum = 0;

createParts(pageNum);

document.getElementById("left_button").onclick=function(){
    --pageNum;
    createParts(pageNum);
};

document.getElementById("right_button").onclick=function(){
    ++pageNum;
    createParts(pageNum);
};

function updateButtons(pageNum) {
    switch(pageNum) {
        case 0:
            document.getElementById("left_button").style.visibility = "hidden";
            document.getElementById("right_button").style.visibility = "visible";
            break;
        case 2:
            document.getElementById("left_button").style.visibility = "visible";
            document.getElementById("right_button").style.visibility = "hidden";
            break;
        default:
            document.getElementById("left_button").style.visibility = "visible";
            document.getElementById("right_button").style.visibility = "visible";
    }
}

function createParts(pageNum) {
    removeLeft();
    removeRight();
    updateButtons(pageNum);
    switch(pageNum){
        case 0:
            createBBa_K1322231Left();
            createBBa_K1322231Right();
            break;
        case 1:
            createpVU14006Left();
            createpVU14006Right();
            break;
        case 2:
            createBBa_K1322001SabineneSynthaseLeft();
            createBBa_K1322001SabineneSynthaseRight();
            break;
    }
}

/** START OF: TAB PAGES ---------------------------------------------------------------------------**/

function createBBa_K1322231Left() {
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

    var p1 = createP(text1);
    var p2 = createP(text2);
    var p3 = createP(text3);
    var p4 = createP(text4);
    var p5 = createP(text5);

    document.getElementById("left_page").appendChild(header);
    document.getElementById("left_page").appendChild(p1);
    document.getElementById("left_page").appendChild(p2);
    document.getElementById("left_page").appendChild(p3);
    document.getElementById("left_page").appendChild(p4);
    document.getElementById("left_page").appendChild(p5);
}

function createBBa_K1322231Right() {
    var img1 = createPhoto("VU_Santalene_biosynthesis_path.gif",
        "Santalene Biosynthesis Path",
        450, 122.25,
        "Santalene Biosynthesis Path");
    img1.style.margin = "auto";
    img1.style.marginBottom = "1em";


    var img2 = createPhoto("VU_San_psb_confirmation.jpg",
        "San PSB Confirmation",
        500, 290,
        "San PSB Confirmation");
    img2.style.margin = "auto";
    img2.style.marginBottom = "1em";

    document.getElementById("right_page").appendChild(img1);
    document.getElementById("right_page").appendChild(img2);
}

function createpVU14006Left() {
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

    var p1 = createP(text1);
    var p2 = createP(text2);

    document.getElementById("left_page").appendChild(header);
    document.getElementById("left_page").appendChild(p1);
    document.getElementById("left_page").appendChild(p2);
}

function createpVU14006Right() {
    var img3 = createPhoto("VU_pVU14006.jpg",
        "pVU14006",
        698, 448,
        "pVU14006");
    img3.style.margin = "auto";
    img3.style.marginBottom = "1em";

    document.getElementById("right_page").appendChild(img3);
}

function createBBa_K1322001SabineneSynthaseLeft() {
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

    var p1 = createP(text1);
    var p2 = createP(text2);
    var p_ref1 = createP(ref1);
    var p_ref2 = createP(ref2);
    var p_ref3 = createP(ref3);

    p_ref1.style.fontStyle = "italic";
    p_ref2.style.fontStyle = "italic";
    p_ref3.style.fontStyle = "italic";

    p_ref1.style.fontSize = "0.75em";
    p_ref2.style.fontSize = "0.75em";
    p_ref3.style.fontSize = "0.75em";

    document.getElementById("left_page").appendChild(header1);
    document.getElementById("left_page").appendChild(p1);
    document.getElementById("left_page").appendChild(header2);
    document.getElementById("left_page").appendChild(p2);
    document.getElementById("left_page").appendChild(rheader);
    document.getElementById("left_page").appendChild(p_ref1);
    document.getElementById("left_page").appendChild(p_ref2);
    document.getElementById("left_page").appendChild(p_ref3);
}

function createBBa_K1322001SabineneSynthaseRight() {
    var img3 = createPhoto("Sabinene_synthesis_pathway.gif",
        "Sabinene Synthesis Pathway",
        597, 192,
        "Sabinene Synthesis Pathway");
    img3.style.margin = "auto";
    img3.style.marginBottom = "1em";

    document.getElementById("right_page").appendChild(img3);
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