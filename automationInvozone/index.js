const puppeteer = require('puppeteer');

///////////////// Automating Invozone.pk -> Schedule a Call / Contact Us Page ////////////////
(async () => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()

    //////////////// Visit this url
    await page.goto('https://invozone.pk/')

    //////////////// Screen Size
    await page.setViewport({width: 1080, height: 1000})

    console.log('Link is visited')

    //////////////// Schedule a meeting button
    const scheduleMeetingBtn = '#hp_hero_section_start_project_btn_gt'
    await page.waitForSelector(scheduleMeetingBtn)
    await page.click(scheduleMeetingBtn)

    console.log('Abaay click ho gaya hai...!!!')

    //////////////// Type Full Name
    const fullNameSelector = '.ContactForm-module--formContainer--36Flj .form-group input[name="fullName"]'
    await page.waitForSelector(fullNameSelector)
    await page.type(fullNameSelector, 'Bilal Shahid')
    
    //////////////// Type Email
    const emailSelector = '.ContactForm-module--formContainer--36Flj .form-group input[name="email"]'
    await page.waitForSelector(emailSelector)
    await page.type(emailSelector, 'iz-test@invozone.com')
    
    //////////////// Heard about invozone
    const heardAboutIZSelector = ':nth-child(6) > .form-group > .css-2b097c-container > .css-a33x3s-control > .css-1hwfws3'

    //////////////// Heard about invozone value -> Social Media
    const heardAboutIZSocialMedia = ':nth-child(6) > .form-group > .css-2b097c-container .css-1fb3qp1-menu .css-11unzgr div:nth-child(1)'

    //////////////// Heard about Invozone value -> Clutch
    const heardAboutIZClutch = ':nth-child(6) > .form-group > .css-2b097c-container .css-1fb3qp1-menu .css-11unzgr div:nth-child(2)'

    //////////////// Heard about Invozone value -> Google Search
    const heardAboutIZGoogleSearch = ':nth-child(6) > .form-group > .css-2b097c-container .css-1fb3qp1-menu .css-11unzgr div:nth-child(3)'

    //////////////// Heard about Invozone value -> Email from Invozone
    const heardAboutIZEmailFromIZ = ':nth-child(6) > .form-group > .css-2b097c-container .css-1fb3qp1-menu .css-11unzgr div:nth-child(4)'

    //////////////// Heard about Invozone value -> IZ Client
    const heardAboutIZRecIZClient = ':nth-child(6) > .form-group > .css-2b097c-container .css-1fb3qp1-menu .css-11unzgr div:nth-child(5)'

    //////////////// Heard about Invozone value -> Data Scraping
    const heardAboutIZDataScraping = ':nth-child(6) > .form-group > .css-2b097c-container .css-1fb3qp1-menu .css-11unzgr div:nth-child(6)'

    //////////////// Heard about Invozone value -> Other
    const heardAboutIZOther = ':nth-child(6) > .form-group > .css-2b097c-container .css-1fb3qp1-menu .css-11unzgr div:nth-child(7)'

    //////////////// What are you seeking
    const seekingSelector = '.mb-4 > .css-2b097c-container > .css-a33x3s-control > .css-1hwfws3'
    await page.waitForSelector(seekingSelector)
    await page.click(seekingSelector)

    //////////////// Seeking Value -> Customize Solution
    const seekingList = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu'
    await page.$(seekingList)
    const seekingCustomSolution = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(1)'
    await page.$(seekingCustomSolution)
    await page.click(seekingCustomSolution)
    .then(async() => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZSocialMedia)
        await page.click(heardAboutIZSocialMedia)
    })

    //////////////// Phone Number 
    const phNoSelector = '.phoneSelect > input[type="tel"]'
    await page.waitForSelector(phNoSelector)
    await page.type(phNoSelector, '3135874985')
    
    //////////////// Seeking Value -> ERP
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingERP = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(2)'
    await page.$(seekingERP)
    await page.click(seekingERP)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZClutch)
        await page.click(heardAboutIZClutch)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.evaluate( () => document.getElementsByClassName('.phoneSelect > input[type="tel"]').value = "")

    const inputValue = await page.$eval('.phoneSelect > input[type="tel"]', el => el.value);
    // focus on the input field
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
    await page.keyboard.press('Backspace');
    }

    await page.type(phNoSelector, '3186548654')

    //////////////// Seeking Value -> WEB Development
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingWebDev = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(3)'
    await page.$(seekingWebDev)
    await page.click(seekingWebDev)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZGoogleSearch)
        await page.click(heardAboutIZGoogleSearch)
    })
    
    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '323232323232')

    //////////////// Seeking Value -> Staff Augmentation
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingStaffAug = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(4)'
    await page.$(seekingStaffAug)
    await page.click(seekingStaffAug)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZEmailFromIZ)
        await page.click(heardAboutIZEmailFromIZ)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '352484852')

    //////////////// Seeking Value -> Mobile App Dev
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingMobileAppDev = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(5)'
    await page.$(seekingMobileAppDev)
    await page.click(seekingMobileAppDev)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZRecIZClient)
        await page.click(heardAboutIZRecIZClient)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '4854127896')

    //////////////// Seeking Value -> E-Commerce
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingECommerce = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(6)'
    await page.$(seekingECommerce)
    await page.click(seekingECommerce)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZDataScraping)
        await page.click(heardAboutIZDataScraping)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '1578549586')

    //////////////// Seeking Value -> Hospital Management
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingHospitalManagement = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(7)'
    await page.$(seekingHospitalManagement)
    await page.click(seekingHospitalManagement)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZOther)
        await page.click(heardAboutIZOther)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '7410852963')

    //////////////// Seeking Value -> Real Estate
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingRealEstate = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(8)'
    await page.$(seekingRealEstate)
    await page.click(seekingRealEstate)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZSocialMedia)
        await page.click(heardAboutIZSocialMedia)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '7418529630')

    //////////////// Seeking Value -> CRM
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingCRM = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(9)'
    await page.$(seekingCRM)
    await page.click(seekingCRM)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZGoogleSearch)
        await page.click(heardAboutIZGoogleSearch)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '4785912302')

    //////////////// Seeking Value -> Block Chain Dev
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingBlockChainDev = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(10)'
    await page.$(seekingBlockChainDev)
    await page.click(seekingBlockChainDev)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZDataScraping)
        await page.click(heardAboutIZDataScraping)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '3135874985')

    //////////////// Seeking Value -> Game Dev
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingGameDev = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(11)'
    await page.$(seekingGameDev)
    await page.click(seekingGameDev)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZSocialMedia)
        await page.click(heardAboutIZSocialMedia)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '7014578896')

    //////////////// Seeking Value -> App Dev
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingAppDev = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(12)'
    await page.$(seekingAppDev)
    await page.click(seekingAppDev)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZRecIZClient)
        await page.click(heardAboutIZRecIZClient)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '7014578896')

    //////////////// Seeking Value -> IOT
    await page.click(seekingSelector)
    await page.$(seekingList)
    const seekingIOT = '.mb-4 > .css-2b097c-container >  .css-1fb3qp1-menu .css-11unzgr div:nth-child(13)'
    await page.$(seekingIOT)
    await page.click(seekingIOT)
    .then(async () => {
        await page.waitForSelector(heardAboutIZSelector)
        await page.click(heardAboutIZSelector)

        await page.$(heardAboutIZClutch)
        await page.click(heardAboutIZClutch)
    })

    //////////////// Phone Number 
    await page.waitForSelector(phNoSelector)
    await page.click(phNoSelector);
    for (let i = 0; i < inputValue.length; i++) {
        await page.keyboard.press('Backspace');
        }
    await page.type(phNoSelector, '7014578896')


    //////////////// Message
    const typeMessageSelector = '#message'
    await page.waitForSelector(typeMessageSelector)
    await page.type(typeMessageSelector, 'Hello there your BOSS is back.')

    //////////////// Checkbox for Email from Invozone
    const checkEmailSelector = '.col-md-12 > .pl-md-1 > .checkparent > img'
    await page.waitForSelector(checkEmailSelector)
    await page.click(checkEmailSelector)

    //////////////// Checkbox for Terms & Conditions
    const checkTermsAndConditions = ':nth-child(2) > .pl-md-1 > .checkparent > img'
    await page.waitForSelector(checkTermsAndConditions)
    await page.click(checkTermsAndConditions)

    await browser.close()
})
()
