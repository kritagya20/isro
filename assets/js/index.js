
// HAMBURGER-CLOSE BUTTON SHIFT AND NAVIGATION TOGGLE
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click",() =>{
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


// Changing the Page from index to mission Page through button on click
try{
    const button = document.querySelector('.large-button');
    button.addEventListener("click", () => { window.location.href="mission.html"});
} catch {
    console.log();
}


// ======================================TABS=====================================
try{
    const tabList = document.querySelector('[role="tablist"]'); //Selecting div containing the tabs
    const tabs = tabList.querySelectorAll('[role="tab"]'); //Selecting all the tabs in form of array

    //keydown event on our every tab
    tabList.addEventListener("keydown", changeTabFocus); 

    //click event on our every tab 
    tabs.forEach((tab) => {
        tab.addEventListener("click", changeTabPanel);
    });

    //fuction to change the tabs through click
    function changeTabPanel (e){

        const targetTab = e.target ; //selecting the clicked tab
        const targetPanel = targetTab.getAttribute("aria-controls"); //getting value of "aria-control" of the clicked tab

        const tabContainer = targetTab.parentNode; //Selecting the parent container of the clicked tab
        const mainContainer = tabContainer.parentNode; //Selecting the top most container which consist of all different sections
    
        //Switching the underline from one tab to selected one
        tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
        targetTab.setAttribute("aria-selected", true);

        var hiddenContainer = mainContainer.querySelectorAll("[role='tabpanel']"); //Selecting the containers which are linked to tab
        hiddenContainer.forEach((panel) => panel.setAttribute("hidden", true)); //Hidden all the linked containers

        var switchingContainers = mainContainer.querySelectorAll([`.${targetPanel}`]); //Selecting all the container which needs to be displayed on screen
        switchingContainers.forEach((container) => container.removeAttribute("hidden")); // Removing hidden attribute to display required components

        //switching the underline indicator for selected tab
        tabs.forEach((tab) => {
            if (tab === targetTab){
                //adding underline on selected tab
                tab.classList.add("active");
            } else {
                //removing underline from not-selected tabs
                tab.classList.remove("active");
            }
        })
    }

    //Function for switching the tabs throw keys 
    var tabFocus = 0; //to tabfocus is value to select our element from the list 
    function changeTabFocus (e) {
        //keyCode for left arrow & right arrow key is 39 & 37
        const keydownLeft = 37;
        const keydownUp = 38;
        const keydownRight = 39;
        const keydownDown = 40;

        if (e.keyCode === keydownLeft || e.keyCode === keydownRight || e.keyCode === keydownUp || e.keyCode === keydownDown) {
            // whenever either of the key is pressed, tabs first element's tabindex attribute is  set to -1
            tabs[tabFocus].setAttribute("tabindex", -1);
        }

        if (e.keyCode === keydownRight || e.keyCode === keydownDown) {
            // whenever right key is pressed, tabfocus increases its value to change switch to next tab in the list
            tabFocus++ ;

            if (tabFocus >= tabs.length) {
                //when tabfocus reaches to last tab in the list, it is reset to 0 to select very first tab
                tabFocus = 0;
            }
        }

        if (e.keyCode === keydownLeft || e.keyCode === keydownUp) {
            // whenever left key is pressed, tabfocus decreases its value to change switch to previous tab in the list
            tabFocus--;

            if (tabFocus < 0){
                //when tabfocus reaches to first tab in the list, it is reset to (length-1) value to select very last tab
                tabFocus = tabs.length - 1;
            }
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
        
    }
}catch{
    console.log("page doesn't have tabs");
}
//=======================================================================================

//==========================Additional Information of Mission Page=======================
try{

    //extra details of the mission moon  visibility through button
    const ExtraInfoMoon = document.querySelector("#moon-extra"); //additional information paragraph of moon
    const MoonBtn = document.querySelector("#moon-extra-btn");//additional information button of moon

    MoonBtn.addEventListener("click", moonAdditionalInfo);

    function moonAdditionalInfo () {
        const visibility = ExtraInfoMoon.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoMoon.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoMoon.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("moon-extra-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoMoon.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoMoon.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("moon-extra-btn").innerText = "Show Details";
        }
    }


    //extra details of the mission mars visibility through button
    const ExtraInfoMars = document.querySelector("#mars-extra"); //additional information paragraph of mars
    const MarsBtn = document.querySelector("#mars-btn");//additional information button of mars
    //console.log(ExtraInfomars);
    //console.log(MarsBtn);

    MarsBtn.addEventListener("click", marsAdditionalInfo);

    function marsAdditionalInfo () {
        console.log("Clicked");
        const visibility = ExtraInfoMars.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoMars.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoMars.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("mars-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoMars.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoMars.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("mars-btn").innerText = "Show Details";
        }
    }



    //extra details of the mission sun visibility through button
    const ExtraInfoSun = document.querySelector("#sun-extra"); //additional information paragraph of Sun
    const SunBtn = document.querySelector("#sun-btn");//additional information button of Sun
    //console.log(ExtraInfoSun);
    //console.log(SunBtn);

    SunBtn.addEventListener("click", SunAdditionalInfo);

    function SunAdditionalInfo () {
        const visibility = ExtraInfoSun.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoSun.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoSun.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("sun-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoSun.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoSun.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("sun-btn").innerText = "Show Details";
        }
    }



    //extra details of the mission Star visibility through button
    const ExtraInfoStar = document.querySelector("#star-extra"); //additional information paragraph of Star
    const StarBtn = document.querySelector("#star-btn");//additional information button of Star
    //console.log(ExtraInfoStar);
    //console.log(StarBtn);

    StarBtn.addEventListener("click", StarAdditionalInfo);

    function StarAdditionalInfo () {
        const visibility = ExtraInfoStar.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoStar.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoStar.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("star-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoStar.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoStar.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("star-btn").innerText = "Show Details";
        }
    }

    //extra details of the mission Venus visibility through button
    const ExtraInfoVenus = document.querySelector("#venus-extra"); //additional information paragraph of Venus
    const VenusBtn = document.querySelector("#venus-btn");//additional information button of Venus
    //console.log(ExtraInfoVenus);
    //console.log(VenusBtn);

    VenusBtn.addEventListener("click", VenusAdditionalInfo);

    function VenusAdditionalInfo () {
        const visibility = ExtraInfoVenus.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoVenus.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoVenus.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("venus-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoVenus.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoVenus.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("venus-btn").innerText = "Show Details";
        }
    }
}catch{
    console.log(" ");
}
//=====================================================================
//=============Additional Information of Technology Page===============
var buttonVisible = document.querySelector("[tabindex='0']").getAttribute("aria-controls");
var sectionDisplayed = document.querySelector(`section[id="${buttonVisible}"]`);
try {

    const ExtraInfoSlv = document.querySelector("#slv-extra"); //additional information paragraph of slv
    const slvBtn = document.querySelector("#slv-btn");//additional information button of slv
    

    const ExtraInfoAslv = document.querySelector("#aslv-extra"); //additional information paragraph of aslv
    const aslvBtn = document.querySelector("#aslv-btn");//additional information button of aslv
    

    const ExtraInfoPslv = document.querySelector("#pslv-extra"); //additional information paragraph of pslv
    const pslvBtn = document.querySelector("#pslv-btn");//additional information button of pslv
    
   
    const ExtraInfoGslv2 = document.querySelector("#gslv-2-extra"); //additional information paragraph of gslv-2
    const gslv2Btn = document.querySelector("#gslv-2-btn");//additional information button of gslv-3
    

    const ExtraInfoGslv3 = document.querySelector("#gslv-3-extra"); //additional information paragraph of gslv-3
    const gslv3Btn = document.querySelector("#gslv-3-btn");//additional information button of gslv-3
    

    const ExtraInfoRlvtd = document.querySelector("#rlvtd-extra"); //additional information paragraph of rlvtd
    const rlvtdBtn = document.querySelector("#rlvtd-btn");//additional information button of rlvtd
    
    

    slvBtn.addEventListener("click", slvAdditionalInfo);
    function slvAdditionalInfo () {
        const visibility = ExtraInfoSlv.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoSlv.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoSlv.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("slv-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoSlv.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoSlv.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("slv-btn").innerText = "Show Details";
        }
    }




    aslvBtn.addEventListener("click", aslvAdditionalInfo);
    function aslvAdditionalInfo () {
        const visibility = ExtraInfoAslv.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoAslv.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoAslv.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("aslv-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoAslv.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoAslv.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("aslv-btn").innerText = "Show Details";
        }
    }


    pslvBtn.addEventListener("click", pslvAdditionalInfo);
    function pslvAdditionalInfo () {
        const visibility = ExtraInfoPslv.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoPslv.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoPslv.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("pslv-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoPslv.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoPslv.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("pslv-btn").innerText = "Show Details";
        }
    }



    gslv2Btn.addEventListener("click", gslv2AdditionalInfo);
    function gslv2AdditionalInfo () {
        const visibility = ExtraInfoGslv2.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoGslv2.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoGslv2.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("gslv-2-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoGslv2.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoGslv2.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("gslv-2-btn").innerText = "Show Details";
        }
    }



    gslv3Btn.addEventListener("click", gslv3AdditionalInfo);
    function gslv3AdditionalInfo () {
        const visibility = ExtraInfoGslv3.getAttribute("data-visible");
        if (visibility === "false") {
            // changes the attribute to false
            ExtraInfoGslv3.setAttribute("data-visible", true);
            // removes no-display class display of additional information
            ExtraInfoGslv3.classList.remove("no-display");
            // changes button text to Hide Details
            document.getElementById("gslv-3-btn").innerText = "Hide Details";
        } else {
            // changes the attribute to True
            ExtraInfoGslv3.setAttribute("data-visible", false);
            // Adds no-display class to stop display of additional information
            ExtraInfoGslv3.classList.add("no-display");
            // changes button text to Show Details
            document.getElementById("gslv-3-btn").innerText = "Show Details";
        }
    }


    
        rlvtdBtn.addEventListener("click", rlvtdAdditionalInfo);
        function rlvtdAdditionalInfo () {
            const visibility = ExtraInfoRlvtd.getAttribute("data-visible");
            if (visibility === "false") {
                // changes the attribute to false
                ExtraInfoRlvtd.setAttribute("data-visible", true);
                // removes no-display class display of additional information
                ExtraInfoRlvtd.classList.remove("no-display");
                // changes button text to Hide Details
                document.getElementById("rlvtd-btn").innerText = "Hide Details";
            } else {
                // changes the attribute to True
                ExtraInfoRlvtd.setAttribute("data-visible", false);
                // Adds no-display class to stop display of additional information
                ExtraInfoRlvtd.classList.add("no-display");
                // changes button text to Show Details
                document.getElementById("rlvtd-btn").innerText = "Show Details";
            }
        }

}catch{
    console.log(" ");
}

//=====================================================================