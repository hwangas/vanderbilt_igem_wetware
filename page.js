/**
 * Created by Anna Hwang on 1/15/2015.
 */

var leftPage = document.getElementById("left_page");
var rightPage = document.getElementById("right_page");

var leftButton = document.getElementById("left_button");
var rightButton = document.getElementById("right_button");

var factory = new SubPageBuilderFactory();

/**@class Page
 * @description A class in charge of creating, updating, and destroying pages between page turns.
 * @param pageNum: the page number of the page (e.g. Home = 1, Team = 2, ...)
 * **/
function Page(pageNum) {

    document.getElementById("igem_header").innerHTML = "reached Page constr: 1";
    var subPageNum = 1;
    var builder = factory.makeBuilder(pageNum);
    var maxSubPage = builder.getMaxSubPage();

    this.destroyPage = function() {
        while(leftPage.hasChildNodes()) {
            leftPage.removeChild(leftPage.childNodes[0]);
        }
        while(rightPage.hasChildNodes()) {
            rightPage.removeChild(rightPage.childNodes[0]);
        }
    };


    this.turnPage = function(dir) {
        subPageNum += dir;
        this.destroyPage();
        builder.createSubPage(subPageNum);
    };


    this.getSubPageNum = function () {
        return subPageNum;
    };

    this.getMaxSubPage = function() {
        return maxSubPage;
    };
}


var thisPage = new Page(thisPageNum);
thisPage.turnPage(0);

/**@description These functions cause the Buttons on the page to change the SubPage when clicked.**/
leftButton.onclick=function(){
    thisPage.turnPage(-1);
    updateButtons(thisPage.getSubPageNum());
};

rightButton.onclick=function(){
    thisPage.turnPage(1);
    updateButtons(thisPage.getSubPageNum());
};

function updateButtons(subPageNum) {
    document.getElementById("igem_header").innerHTML = "reached updateButtons";
    if(subPageNum == 1) {
        leftButton.style.visibility = "hidden";
        rightButton.style.visibility = "visible";
    }
    else if(subPageNum == thisPage.getMaxSubPage()) {
        leftButton.style.visibility = "visible";
        rightButton.style.visibility = "hidden";
    }
    else {
        leftButton.style.visibility = "visible";
        rightButton.style.visibility = "visible";
    }
}
