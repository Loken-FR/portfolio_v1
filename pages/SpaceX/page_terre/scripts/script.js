
// SET VARIABLES EARTH //

const containEarth = document.querySelector('.containEarth')
const textsSectionEarth = containEarth.querySelector('.texts-section')

const missionSectionEarth = textsSectionEarth.querySelector('.mission-section')
const displayDescriptionMissEarth = missionSectionEarth.querySelector('.display-description')
const imgChevronMissEarth = displayDescriptionMissEarth.querySelector('.chevron-description')
const descriptionMissionEarth = missionSectionEarth.querySelector('.description')

const rocketSectionEarth = textsSectionEarth.querySelector('.rocket-section')
const displayDescriptionRockEarth = rocketSectionEarth.querySelector('.display-description')
const imgChevronRockEarth = displayDescriptionRockEarth.querySelector('.chevron-description')
const descriptionRocketEarth = rocketSectionEarth.querySelector('.description')

const datasSectionEarth = textsSectionEarth.querySelector('.datas-section')
const displayDescriptionDatasEarth = datasSectionEarth.querySelector('.display-description')
const imgChevronDatasEarth = displayDescriptionDatasEarth.querySelector('.chevron-description')
const descriptionDatasEarth = datasSectionEarth.querySelector('.description')

const actionsSectionEarth = containEarth.querySelector('.action-section')
const prevPlanetEarth = actionsSectionEarth.querySelector('.prev')
const nextPlanetEarth = actionsSectionEarth.querySelector('.next')


// TEXTS SECTIONS INTERACTIONS //


// display the description or no with interaction click on button "Chevron"


// missions sections
function isDisplayDescriptionMissEarth() {
    if(descriptionMissionEarth.classList.contains('displayNone')) {
        // display it
        descriptionMissionEarth.classList.remove('displayNone')
        descriptionMissionEarth.classList.add('displayYes')
        imgChevronMissEarth.src = 'images/earthChevron2.png'
        
    } else if(descriptionMissionEarth.classList.contains('displayYes')) {
        // remove display
        descriptionMissionEarth.classList.remove('displayYes')
        descriptionMissionEarth.classList.add('displayNone')
        imgChevronMissEarth.src = 'images/earthChevron.png'
    }
}

displayDescriptionMissEarth.addEventListener('click', isDisplayDescriptionMissEarth)


// rocket section
function isDisplayDescriptionRocketEarth() {
    if(descriptionRocketEarth.classList.contains('displayNone')) {
        // display it
        descriptionRocketEarth.classList.remove('displayNone')
        descriptionRocketEarth.classList.add('displayYes')
        imgChevronRockEarth.src = 'images/earthChevron2.png'
        
    } else if(descriptionRocketEarth.classList.contains('displayYes')) {
        // remove display
        descriptionRocketEarth.classList.remove('displayYes')
        descriptionRocketEarth.classList.add('displayNone')
        imgChevronRockEarth.src = 'images/earthChevron.png'
    }
}

displayDescriptionRockEarth.addEventListener('click', isDisplayDescriptionRocketEarth)


// datas sections
function isDisplayDescriptionDatasEarth() {
    if(descriptionDatasEarth.classList.contains('displayNone')) {
        // display it
        descriptionDatasEarth.classList.remove('displayNone')
        descriptionDatasEarth.classList.add('displayYes')
        imgChevronDatasEarth.src = 'images/earthChevron2.png'
        
    } else if(descriptionDatasEarth.classList.contains('displayYes')) {
        // remove display
        descriptionDatasEarth.classList.remove('displayYes')
        descriptionDatasEarth.classList.add('displayNone')
        imgChevronDatasEarth.src = 'images/earthChevron.png'
    }
}

displayDescriptionDatasEarth.addEventListener('click', isDisplayDescriptionDatasEarth)


// close other sections when user click on section who is close for open it

// mission section tab
function closeTab1() {
        // close rocket section
        descriptionRocketEarth.classList.remove('displayYes')
        descriptionRocketEarth.classList.add('displayNone')
        imgChevronRockEarth.src = 'images/earthChevron.png'
        //close datas sections
        descriptionDatasEarth.classList.remove('displayYes')
        descriptionDatasEarth.classList.add('displayNone')
        imgChevronDatasEarth.src = 'images/earthChevron.png'
}

displayDescriptionMissEarth.addEventListener('click', closeTab1)

// rocket section tab
function closeTab2() {
        // close missions section
        descriptionMissionEarth.classList.remove('displayYes')
        descriptionMissionEarth.classList.add('displayNone')
        imgChevronMissEarth.src = 'images/earthChevron.png'
        // close datas section
        descriptionDatasEarth.classList.remove('displayYes')
        descriptionDatasEarth.classList.add('displayNone')
        imgChevronDatasEarth.src = 'images/earthChevron.png'
}

displayDescriptionRockEarth.addEventListener('click', closeTab2)

// datas section tab
function closeTab3() {
        // close missions section
        descriptionMissionEarth.classList.remove('displayYes')
        descriptionMissionEarth.classList.add('displayNone')
        imgChevronMissEarth.src = 'images/earthChevron.png'
        // close rocket section
        descriptionRocketEarth.classList.remove('displayYes')
        descriptionRocketEarth.classList.add('displayNone')
        imgChevronRockEarth.src = 'images/earthChevron.png'
}

displayDescriptionDatasEarth.addEventListener('click', closeTab3)




















