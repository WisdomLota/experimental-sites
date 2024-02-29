const header = document.getElementById('navigate');
header.style.backgroundColor = "#110300";

const heroSection = document.getElementById("hero_section");
heroSection.style.backgroundImage = "url('condomSite-extracts/hero_img.png')";

const weirdSection = document.getElementById("weird-section");
weirdSection.style.backgroundColor = "#110300";
weirdSection.style.backgroundImage = "url('condomSite-extracts/visual_interest_one.png')";
weirdSection.style.backgroundRepeat = "no-repeat";
weirdSection.onmouseover = () => {
    weirdSection.style.backgroundPosition = "center";
}

const expressoSection = document.getElementById("expresso");
expressoSection.style.backgroundColor = "#110300";
expressoSection.style.backgroundImage = "url('condomSite-extracts/visual_interest_one.png')";
expressoSection.style.backgroundRepeat = "no-repeat";

const letterSection = document.getElementById("letter");
letterSection.style.backgroundImage = "url('condomSite-extracts/pl_letter_img.png')";
letterSection.style.backgroundRepeat = "no-repeat";
letterSection.style.backgroundSize = "cover";

const email = document.getElementById("email");
email.onclick = () => {
    email.style.backgroundColor = "#FDFF89";
}
