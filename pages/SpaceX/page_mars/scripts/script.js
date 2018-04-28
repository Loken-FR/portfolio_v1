
// SET VARIABLES MARS //

const containMars = document.querySelector('.containMars')
const textsSectionMars = containMars.querySelector('.texts-section')

const missionSectionMars = textsSectionMars.querySelector('.mission-section')
const displayDescriptionMissMars = missionSectionMars.querySelector('.display-description')
const imgChevronMissMars = displayDescriptionMissMars.querySelector('.chevron-description')
const descriptionMissionMars = missionSectionMars.querySelector('.description')

const rocketSectionMars = textsSectionMars.querySelector('.rocket-section')
const displayDescriptionRockMars = rocketSectionMars.querySelector('.display-description')
const imgChevronRockMars = displayDescriptionRockMars.querySelector('.chevron-description')
const descriptionRocketMars = rocketSectionMars.querySelector('.description')

const datasSectionMars = textsSectionMars.querySelector('.datas-section')
const displayDescriptionDatasMars = datasSectionMars.querySelector('.display-description')
const imgChevronDatasMars = displayDescriptionDatasMars.querySelector('.chevron-description')
const descriptionDatasMars = datasSectionMars.querySelector('.description')

const actionsSectionMars = containMars.querySelector('.action-section')
const prevPlanetMars = actionsSectionMars.querySelector('.prev')
const nextPlanetMars = actionsSectionMars.querySelector('.next')


// TEXTS SECTIONS INTERACTIONS //


// display the description or no with interaction click on button "Chevron"


// missions sections
function isDisplayDescriptionMissMars() {
    if(descriptionMissionMars.classList.contains('displayNone')) {
        // display it
        descriptionMissionMars.classList.remove('displayNone')
        descriptionMissionMars.classList.add('displayYes')
        imgChevronMissMars.src = 'images/marsChevron2.png'
        
    } else if(descriptionMissionMars.classList.contains('displayYes')) {
        // remove display
        descriptionMissionMars.classList.remove('displayYes')
        descriptionMissionMars.classList.add('displayNone')
        imgChevronMissMars.src = 'images/marsChevron.png'
    }
}

displayDescriptionMissMars.addEventListener('click', isDisplayDescriptionMissMars)


// rocket section
function isDisplayDescriptionRocketMars() {
    if(descriptionRocketMars.classList.contains('displayNone')) {
        // display it
        descriptionRocketMars.classList.remove('displayNone')
        descriptionRocketMars.classList.add('displayYes')
        imgChevronRockMars.src = 'images/marsChevron2.png'
        
    } else if(descriptionRocketMars.classList.contains('displayYes')) {
        // remove display
        descriptionRocketMars.classList.remove('displayYes')
        descriptionRocketMars.classList.add('displayNone')
        imgChevronRockMars.src = 'images/marsChevron.png'
    }
}

displayDescriptionRockMars.addEventListener('click', isDisplayDescriptionRocketMars)


// datas sections
function isDisplayDescriptionDatasMars() {
    if(descriptionDatasMars.classList.contains('displayNone')) {
        // display it
        descriptionDatasMars.classList.remove('displayNone')
        descriptionDatasMars.classList.add('displayYes')
        imgChevronDatasMars.src = 'images/marsChevron2.png'
        
    } else if(descriptionDatasMars.classList.contains('displayYes')) {
        // remove display
        descriptionDatasMars.classList.remove('displayYes')
        descriptionDatasMars.classList.add('displayNone')
        imgChevronDatasMars.src = 'images/marsChevron.png'
    }
}

displayDescriptionDatasMars.addEventListener('click', isDisplayDescriptionDatasMars)


// close other sections when user click on section who is close for open it

// mission section tab
function closeTab1b() {
        // close rocket section
        descriptionRocketMars.classList.remove('displayYes')
        descriptionRocketMars.classList.add('displayNone')
        imgChevronRockMars.src = 'images/marsChevron.png'
        //close datas sections
        descriptionDatasMars.classList.remove('displayYes')
        descriptionDatasMars.classList.add('displayNone')
        imgChevronDatasMars.src = 'images/marsChevron.png'
}

displayDescriptionMissMars.addEventListener('click', closeTab1b)

// rocket section tab
function closeTab2b() {
        // close missions section
        descriptionMissionMars.classList.remove('displayYes')
        descriptionMissionMars.classList.add('displayNone')
        imgChevronMissMars.src = 'images/marsChevron.png'
        // close datas section
        descriptionDatasMars.classList.remove('displayYes')
        descriptionDatasMars.classList.add('displayNone')
        imgChevronDatasMars.src = 'images/marsChevron.png'
}

displayDescriptionRockMars.addEventListener('click', closeTab2b)

// datas section tab
function closeTab3b() {
        // close missions section
        descriptionMissionMars.classList.remove('displayYes')
        descriptionMissionMars.classList.add('displayNone')
        imgChevronMissMars.src = 'images/marsChevron.png'
        // close rocket section
        descriptionRocketMars.classList.remove('displayYes')
        descriptionRocketMars.classList.add('displayNone')
        imgChevronRockMars.src = 'images/marsChevron.png'
}

displayDescriptionDatasMars.addEventListener('click', closeTab3b)




















