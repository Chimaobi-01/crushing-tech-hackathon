

const user = document.getElementById('UserProfile')
const menuContainer = document.getElementById('menu')
const alertContainer = document.getElementById('alertContainer')
const alertBtn = document.getElementById('alertBtn')
const CloseAdsBtn = document.getElementById('CloseAdsBtn')
const ads = document.getElementById('ads')
const StateOfOnboardingSteps = document.getElementById('StateOfOnboardingSteps')
const OnboardingStep = document.querySelectorAll('.OnboardingStep')
const Circle = document.querySelectorAll('.dark-circle')







user.addEventListener('click', () => {
    alertContainer.classList.add('hidden')
    menuContainer.classList.toggle('hidden')
})
alertBtn.addEventListener('click', () => {
    menuContainer.classList.add('hidden')
    alertContainer.classList.toggle('hidden')
})
CloseAdsBtn.addEventListener('click', () => {
    ads.classList.add('hidden')
    document.querySelector('main').style.paddingTop = '3rem'
})

OnboardingStep.forEach(element => {
    element.addEventListener('click', e => {
        const detail = e.currentTarget

        StateOfOnboardingSteps.innerHTML = `${element.id} / 5 completed`

        if (detail.open === true) {
            detail.open = false
        }

        if (detail.open === false) {

            OnboardingStep.forEach(node => {
                if (node.id !== element.id) {
                    node.open = false
                }
            })
        }

    }
    )
})

Circle.forEach(element => {
    let isCheck = false


    element.addEventListener('click', (e) => {
        const img = e.currentTarget
        if(isCheck === false){
            isCheck = true

            img.setAttribute('src', 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg')
            img.style.filter =  'brightness(1)'
        }
        else if(isCheck === true) {
            isCheck = false

            img.setAttribute('src', 'https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg')
            img.style.filter =  'brightness(.5)'
        }
        
 })
})





