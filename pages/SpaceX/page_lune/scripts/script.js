
// SET VARIABLES MOON //

const containMoon = document.querySelector('.containMoon')
const textsSectionMoon = containMoon.querySelector('.texts-section')

const missionSectionMoon = textsSectionMoon.querySelector('.mission-section')
const displayDescriptionMissMoon = missionSectionMoon.querySelector('.display-description')
const imgChevronMissMoon = displayDescriptionMissMoon.querySelector('.chevron-description')
const descriptionMissionMoon = missionSectionMoon.querySelector('.description')

const rocketSectionMoon = textsSectionMoon.querySelector('.rocket-section')
const displayDescriptionRockMoon = rocketSectionMoon.querySelector('.display-description')
const imgChevronRockMoon = displayDescriptionRockMoon.querySelector('.chevron-description')
const descriptionRocketMoon = rocketSectionMoon.querySelector('.description')

const datasSectionMoon = textsSectionMoon.querySelector('.datas-section')
const displayDescriptionDatasMoon = datasSectionMoon.querySelector('.display-description')
const imgChevronDatasMoon = displayDescriptionDatasMoon.querySelector('.chevron-description')
const descriptionDatasMoon = datasSectionMoon.querySelector('.description')

const actionsSectionMoon = containMoon.querySelector('.action-section')
const prevPlanetMoon = actionsSectionMoon.querySelector('.prev')
const nextPlanetMoon = actionsSectionMoon.querySelector('.next')


// TEXTS SECTIONS INTERACTIONS //


// display the description or no with interaction click on button "Chevron"


// missions sections
function isDisplayDescriptionMissMoon() {
    if(descriptionMissionMoon.classList.contains('displayNone')) {
        // display it
        descriptionMissionMoon.classList.remove('displayNone')
        descriptionMissionMoon.classList.add('displayYes')
        imgChevronMissMoon.src = 'images/moonChevron2.png'
        
    } else if(descriptionMissionMoon.classList.contains('displayYes')) {
        // remove display
        descriptionMissionMoon.classList.remove('displayYes')
        descriptionMissionMoon.classList.add('displayNone')
        imgChevronMissMoon.src = 'images/moonChevron.png'
    }
}

displayDescriptionMissMoon.addEventListener('click', isDisplayDescriptionMissMoon)


// rocket section
function isDisplayDescriptionRocketMoon() {
    if(descriptionRocketMoon.classList.contains('displayNone')) {
        // display it
        descriptionRocketMoon.classList.remove('displayNone')
        descriptionRocketMoon.classList.add('displayYes')
        imgChevronRockMoon.src = 'images/moonChevron2.png'
        
    } else if(descriptionRocketMoon.classList.contains('displayYes')) {
        // remove display
        descriptionRocketMoon.classList.remove('displayYes')
        descriptionRocketMoon.classList.add('displayNone')
        imgChevronRockMoon.src = 'images/moonChevron.png'
    }
}

displayDescriptionRockMoon.addEventListener('click', isDisplayDescriptionRocketMoon)


// datas sections
function isDisplayDescriptionDatasMoon() {
    if(descriptionDatasMoon.classList.contains('displayNone')) {
        // display it
        descriptionDatasMoon.classList.remove('displayNone')
        descriptionDatasMoon.classList.add('displayYes')
        imgChevronDatasMoon.src = 'images/moonChevron2.png'
        
    } else if(descriptionDatasMoon.classList.contains('displayYes')) {
        // remove display
        descriptionDatasMoon.classList.remove('displayYes')
        descriptionDatasMoon.classList.add('displayNone')
        imgChevronDatasMoon.src = 'images/moonChevron.png'
    }
}

displayDescriptionDatasMoon.addEventListener('click', isDisplayDescriptionDatasMoon)


// close other sections when user click on section who is close for open it

// mission section tab
function closeTab1c() {
        // close rocket section
        descriptionRocketMoon.classList.remove('displayYes')
        descriptionRocketMoon.classList.add('displayNone')
        imgChevronRockMoon.src = 'images/moonChevron.png'
        //close datas sections
        descriptionDatasMoon.classList.remove('displayYes')
        descriptionDatasMoon.classList.add('displayNone')
        imgChevronDatasMoon.src = 'images/moonChevron.png'
}

displayDescriptionMissMoon.addEventListener('click', closeTab1c)

// rocket section tab
function closeTab2c() {
        // close missions section
        descriptionMissionMoon.classList.remove('displayYes')
        descriptionMissionMoon.classList.add('displayNone')
        imgChevronMissMoon.src = 'images/moonChevron.png'
        // close datas section
        descriptionDatasMoon.classList.remove('displayYes')
        descriptionDatasMoon.classList.add('displayNone')
        imgChevronDatasMoon.src = 'images/moonChevron.png'
}

displayDescriptionRockMoon.addEventListener('click', closeTab2c)

// datas section tab
function closeTab3c() {
        // close missions section
        descriptionMissionMoon.classList.remove('displayYes')
        descriptionMissionMoon.classList.add('displayNone')
        imgChevronMissMoon.src = 'images/moonChevron.png'
        // close rocket section
        descriptionRocketMoon.classList.remove('displayYes')
        descriptionRocketMoon.classList.add('displayNone')
        imgChevronRockMoon.src = 'images/moonChevron.png'
}

displayDescriptionDatasMoon.addEventListener('click', closeTab3c)




















