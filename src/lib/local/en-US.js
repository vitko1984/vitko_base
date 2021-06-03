import account from "./additional/account-en";
import lp from "./additional/lp-en";
import screener from "./additional/screener-en";
import brokers from "./additional/brokers-lp-en";

export default {
  account: account,
  lp: lp,
  screener: screener,
  brokers: brokers,
  searchString: "Search for a company or symbol...",
  buttons: {
    signIn: "Sign In",
    registration: "Register"
  },
  footerHeaders: {
    first: "Information",
    second: "Navigation",
    third: "Download",
    fourth: "Language",
    five: "Follow us on:"
  },
  company: {
    name: "iFinik, LLC",
    address: "17 Prechistinskaia nab., BC “Barkley Plaza”, Moscow, Russia",
    tel: "Tel.: +7 (499) 651-90-42"
  },
  responsibility:
    "The information and opinions provided on this site are based on public sources that are deemed reliable, however, iFinik LLC is not responsible for the accuracy of the information provided. LLC “iFinik” and its affiliates and employees are not liable for direct or indirect damage resulting from the use of this information, including data, quotes and charts, as well as for its accuracy.",
  servicesLinks: {
    privacy: "Privacy policy",
    terms: "Terms of use"
  },
  menuList: [
    {
      name: "How to start",
      path: "/easystart"
    },
    {
      name: "Markets",
      sublist: [
        {
          name: "Review",
          path: "/markets"
        },
        {
          name: "Stocks",
          path: "/markets/stocks"
        }
      ]
    },
    {
      name: "News",
      sublist: [
        {
          name: "All news",
          path: "/news"
        },
        {
          name: "News Feed",
          path: "/news/feed/"
        }
      ]
    },
    {
      name: "Portfolio",
      path: "/invest"
    },
    {
      name: "Information",
      sublist: [
        {
          name: "About",
          path: "/about"
        },
        {
          name: "Our brokers",
          path: "/brokers"
        },
        {
          name: "Contacts",
          path: "/contacts"
        },
        
      ]
    },
  ],
  informationList: [
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Our brokers",
      path: '/brokers',
    },
    {
      name: "Contacts",
      path: "/contacts"
    },
    {
      name: "How to start?",
      path: "/easystart"
    },
  ],
  navigationList: [
    {
      name: "Markets",
      path: "/markets"
    },
    {
      name: "News",
      path: "/news"
    },
  ],
  Downoloads: [
    {
      name: "iOS app",
      path: "",
      blank: true
    },
    {
      name: "Android app",
      path: "",
      blank: true
    }
  ],
  Auth: {
    caption: "Sign In to iFinik",
    text:
      "Get access to all available features, such as Watchlists, Holdings, Bookmarks, Commenting and more!",
    label: "Don’t have an account yet? ",
    labelLink: "Register",
    alternative: "Or enter with",
    button: "Sign In",
    signinLink: "войти в систему",
    sms: "Get sms Code",
    smsPlaceholder: "SMS code",
    pswdPlaceholder: "Password",
    newPswd: "New password",
    labelPswd: "Forgot password?",
    tabs: [
      {
        name: "Phone",
        text: "By phone number"
      },
      {
        name: "Email",
        text: "By email"
      }
    ]
  },
  Register: {
    enterCode: "Enter the code",
    caption: "Register to iFinik",
    text:
      "Get access to all available features, such as Watchlists, Holdings, Bookmarks, Commenting and more!",
    label: "Already registered? ",
    labelLink: "Sign In",
    alternative: "Or enter with",
    linkGroup: "By signing up you accept",
    linkTerms: "Terms of Use",
    linkPrivacy: "Privacy Policy",
    linkGroup2: "and",
    sms: "Get sms Code",
    smsPlaceholder: "SMS code",
    pswdPlaceholder: "Password",
    button: "Register",
    tabs: [
      {
        name: "Phone",
        text: "By phone number"
      },
      {
        name: "Email",
        text: "By email"
      }
    ],
    successSms: "SMS was sent"
  },
  Reset: {
    resetMsg: "We send instruction to you Email",
    caption: "Reset password",
    captionChange: "Change password",
    button: "Reset",
    changePass: "Change"
  },
  Errors: {
    emailRequired: "Email is required!",
    emailIncorect: "Email is incorrect!",
    pswdRequired: "Password is required!",
    pswdLength: "Password must be 6 charachters!",
    phoneInvalid: "The phone must be in the correct format",
    codeError: "Code must be 6 charachters!",
    registeredEmail: "Пользователь с данным e-mail уже существует, вы можете войти в систему ",
    registeredPhone: "Пользователь с данным телефоном уже существует, вы можете войти в систему ",
  },
  personal: {
    account: "Profile",
    name: "Full name",
    firstName: 'First name',
    lastName: 'Last Name',
    email: "Email",
    creationTime: "Member sinse ",
    lastSignInTime: "Last signIn time",
    registrationType: "Registration type",
    buttonOut: "Log Out",
    phone: "Phone",
    about: "About",
    birth: "Date of Birth",
    location: "location",
    caption: "Personal info",
    subcaption: "This information will be seen to the users at this website",
    editBtn: "Edit",
    saveBtn: "Save",
    menuProfile: "Profile",
    menuSettings: "Settings",
    menuNotification: "Notification",
    avatarChange: "Change",
    avatarRemove: "Remove",
    errDate: "Please select the month, year, and day"
  },
  acountMenu: {
      profile: "Profile",
      settings: "Settings",
      notification: "Notifications"
  },
  moreBtn: {
    share: "Share",
    addBookmark: "Add to bookmarks"
  },
  MenuSecondary: {
      summary: "Summary",
      financial: "Financials",
      news: "News",
  },
  dividends: {
    title: "Dividends",
    marker:
      "Ex date is the date you should buy stocks in order to get dividends payout."
  },
  profile: {
    title: "Company Profile",
    executives: "Key Executives",
    marker: "The most important influencers",
    structureTitle: "Holders Structure",
    structureMarker: "Structure provided by the special services",
    labelSector: "Sector",
    labelIndustry: "Industry",
    labelEmployees: "Employees"
  },
  companyCard: {
    update: "Last Updated",
    btnWishlist: "Add to Watchlist",
    btnAlert: "Включить оповещение"
  },
  companyInfo: {
    btnBuy: "Buy",
    btnSell: "Sell",
    closedMark: "Market Closed. Will open in ",
    dividendYield: "Dividend Yield"
  },
  chart: {
    title: "Chart",
    marker: "Show on chart",
    btnVolume: "Volume",
    btnNews: "News",
    changes: 'Changes'
  },
  dividends: {
    title: "Dividends",
    marker:
      "Ex date is the date you should buy stocks in order to get dividends payout."
  },
  profile: {
    title: "Company Profile",
    executives: "Key Executives",
    marker: "The most important influencers",
    structureTitle: "Holders Structure",
    structureMarker: "Structure provided by the special services",
    labelSector: "Sector",
    labelIndustry: "Industry",
    labelEmployees: "Employees"
  },
  banner: {
    equity: 'Equity'
  },
  marketData: {
    title: "Market Data",
    PreviousClose: "Previous close",
    Open: "Open",
    DaysRange: "Day’s range",
    WRange: "52W Range"
  },
  prtflData: {
    title: 'Portfolio Statistics',
    consensusPE: 'Avg. consensus P/E',
    consensusGrowth: 'Avg. consensus growth',
    epsGrowth: 'EPS Growth',
    dividendYield: 'Dividend Yield',
    volatility: 'Volatility',
    betaTrend: 'Beta Trend'
  },
  financialTab: {
    title: 'Financials'
  },
  companyCard: {
    update: "Last Updated",
    btnWishlist: "Add to Watchlist",
    btnAlert: "Включить оповещение"
  },
  policy: {
    header: "Политика конфиденциальности",
    description:
      "Используя данное приложение, Пользователь выражает согласие с тем, что IFinik имеет право осуществлять сбор личной и технической информации Пользователя, хранение такой информации и, в предусмотренных настоящими правилами случаях, её распространение. В случае возникновения вопросов или претензий по поводу нашей политики и правил конфиденциальности, пожалуйста, обращайтесь по адресу ifinik@ifinik.com",
    firstItem: {
      caption: "1. ТЕРМИНЫ",
      items: [
        {
          item:
            "1.1. Программа – сайт, расположенный в сети Интернет по адресу www.ifinik.com или мобильное приложение, размещенное в Appstore."
        },
        { item: "1.2. Пользователь — лицо использующее Программу." },
        {
          item:
            "1.3. Законодательство — действующее законодательство Российской Федерации."
        },
        {
          item:
            "1.4. Персональные данные — персональные данные Пользователя, которые Пользователь предоставляет о себе самостоятельно при Регистрации или в процессе использования функционала Программы."
        },
        {
          item:
            "1.5. Данные — иные данные о Пользователе (не входящие в понятие Персональных данных)."
        }
      ]
    },
    secondItem: {
      caption: "2. ПОРЯДОК ОБРАБОТКИ ПЕРСОНАЛЬНЫХ И ИНЫХ ДАННЫХ",
      items: [
        {
          item:
            "2.1. IFinik обязуется использовать Персональные данные в соответствии с Федеральным Законом «О персональных данных» № 152-ФЗ от 27 июля 2006 г. и внутренними документами IFinik."
        },
        {
          item:
            "2.2. В отношении Персональных данных и иных Данных Пользователя сохраняется их конфиденциальность, кроме случаев, когда указанные данные являются общедоступными."
        },
        {
          item:
            "2.3. IFinik имеет право сохранять архивную копию Персональных данных и Данных, в том числе после удаления аккаунта Пользователя."
        },
        {
          item:
            "2.4. IFinik имеет право передавать Персональные данные и Данные Пользователя без согласия Пользователя следующим лицам:"
        },
        {
          item:
            "2.4.1 государственным органам, в том числе органам дознания и следствия, и органам местного самоуправления по их мотивированному запросу;"
        },
        { item: "2.4.2 партнерам IFinik;" },
        {
          item:
            "2.4.3 в иных случаях, прямо предусмотренных действующим законодательством РФ."
        },
        {
          item:
            "2.5. IFinik имеет право передавать Персональные данные и Данные третьим лицам, не указанным в п. 3.4. настоящей Политики конфиденциальности, в следующих случаях:"
        },
        { item: "2.5.1 Пользователь выразил свое согласие на такие действия;" },
        {
          item:
            "2.5.2 передача необходима в рамках использования Пользователем Программы или оказания Услуг Пользователю;"
        },
        {
          item:
            "2.5.3 передача происходит в рамках продажи или иной передачи бизнеса (полностью или в части), при этом к приобретателю переходят все обязательства по соблюдению условий настоящей Политики."
        },
        {
          item:
            "2.6. IFinik осуществляет автоматизированную обработку Персональных данных и Данных."
        }
      ]
    },
    thirdItem: {
      caption: "3. ИЗМЕНЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ",
      items: [
        {
          item:
            "3.1. Пользователь может в любой момент изменить (обновить, дополнить) Персональные данные посредством Личного кабинета либо путем направления письменного заявления IFinik."
        },
        {
          item:
            "3.2. Пользователь в любой момент имеет право удалить Персональные данные."
        },
        {
          item:
            "3.3. Пользователь гарантирует, что все Персональные данные являются актуальными и не относятся к третьим лицам."
        }
      ]
    },
    fourthItem: {
      caption: "4. ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ",
      items: [
        {
          item:
            "4.1. IFinik осуществляет надлежащую защиту Персональных и иных данных в соответствии с Законодательством и принимает необходимые и достаточные организационные и технические меры для защиты Персональных данных."
        },
        {
          item:
            "4.2. Применяемые меры защиты в том числе позволяют защитить Персональные данные от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий с ними третьих лиц."
        }
      ]
    },
    fifthItem: {
      caption: "5. ПЕРСОНАЛЬНЫЕ ДАННЫЕ ТРЕТЬХ ЛИЦ ИСПОЛЬЗУЕМЫЕ ПОЛЬЗОВАТЕЛЯМИ",
      items: [
        {
          item:
            "5.1. Используя Программу Пользователь имеет право заносить данные третьих лиц для последующего использования."
        },
        {
          item:
            "5.2. Пользователь обязуется получить согласие субъекта персональных данных на использование посредством Программы."
        },
        {
          item:
            "5.3. IFinik не использует персональные данные третьих лиц занесенные Пользователем."
        },
        {
          item:
            "5.4. IFinik обязуется предпринять необходимые меры для обеспечения сохранности персональных данных третьих лиц, занесенных Пользователем."
        }
      ]
    },
    sixthItem: {
      caption: "6. ИНЫЕ ПОЛОЖЕНИЯ",
      items: [
        {
          item:
            "6.1. К настоящей Политике конфиденциальности и отношениям между Пользователем и IFinik, возникающим в связи с применением Политики конфиденциальности, подлежит применению право Российской Федерации."
        },
        {
          item:
            "6.2. Все возможные споры, вытекающие из настоящего Соглашения, подлежат разрешению в соответствии с действующим законодательством по месту регистрации IFinik.Перед обращением в суд Пользователь должен соблюсти обязательный досудебный порядок и направить IFinik соответствующую претензию в письменном виде. Срок ответа на претензию составляет 30 (тридцать) рабочих дней."
        },
        {
          item:
            "6.3. Если по тем или иным причинам одно или несколько положений Политики конфиденциальности будут признаны недействительными или не имеющими юридической силы, это не оказывает влияния на действительность или применимость остальных положений Политики конфиденциальности."
        },
        {
          item:
            "6.4. IFinik имеет право в любой момент изменять Политику конфиденциальности (полностью или в части) в одностороннем порядке без предварительного согласования с Пользователем. Все изменения вступают в силу на следующий день после размещения в Программе."
        },
        {
          item:
            "6.5. Пользователь обязуется самостоятельно следить за изменениями Политики конфиденциальности путем ознакомления с актуальной редакцией."
        }
      ]
    },
    seventhItem: {
      caption: "7. КОНТАКТНАЯ ИНФОРМАЦИЯ IFinik",
      items: [
        { item: "7.1. Телефон: +7 (499) 651-90-42" },
        { item: "7.2. E-mail: ifinik@ifinik.com" },
        {
          item:
            "7.3. Адрес: г. Москва, ул. Пречистенская наб., 17, ДЦ «Barkley Plaza»"
        }
      ]
    }
  },
  aboutPage: {
    title: "About",
    description: [
      { text: "iFinik Investments is a Russian company." },
      {
        text:
          "Our goal is to build the largest ecosystem for private investors, to make it accessible and understandable to all potential participants."
      },
      {
        text:
          "We have all the conditions in order to implement this promising, promising project. Including - these are competent, qualified specialists, ready to master new peaks."
      },
      {
        text:
          "In our country, the modern stock market, in fact, is only just beginning to take shape and has enormous development reserves. Now - it is important to use them wisely. At the same time, we intend to cover the international stock market. In other words, to concentrate on one platform the best opportunities for analysis and decision-making on investments in both Russian and global financial instruments!"
      }
    ],
    team: {
      caption: "Our team",
      persons: [
        {
          id: "AlexeyKleutin",
          name: "Alexey Kleutin",
          position: "Founder",
          info: [
            { text: "Born in 1984." },
            {
              text:
                "An economist in basic education, holds a second degree in strategic management and an EMBA degree. Management experience over 15 years. Experience in successful stock trading for over 10 years. He led the financial unit (in-house) in the companies Sberbank, Miratorg, Simple. He has experience in consulting."
            },
            {
              text:
                "The project deals with strategic development and financing. It interacts with partners and builds business processes."
            }
          ],
          shortInfo: [
            {
              text:
                "An economist in basic education, holds a second degree in strategic management and an EMBA degree. Management experience over 15 years. Experience in successful stock trading for over 10 years. He led the financial unit (in-house) in the companies Sberbank, Miratorg, Simple. He has experience in consulting."
            },
            {
              text:
                "The project deals with strategic development and financing. It interacts with partners and builds business processes."
            }
          ]
        },
        {
          id: "AnnaAndronova",
          name: "Anna Andronova",
          position: "Creative Director",
          info: [
            {
              text:
                "High economic education, MBA degree. Over 15 years of managerial experience in the corporate sector and management of consulting projects. The practice of successful trading on the stock exchange since 2015."
            },
            {
              text:
                "Co-founder and ideological inspirer of iFinik. Responsible for administration of the project, marketing and PR."
            }
          ],
          shortInfo: [
            {
              text: "High economic education, MBA degree. Over 15 years of managerial experience in the corporate sector and management of consulting projects. The practice of successful trading on the stock exchange since 2015."
            },
            {
              text:"Co-founder and ideological inspirer of iFinik. Responsible for administration of the project, marketing and PR."
            }
          ]
        },
        {
          id: "IvanKopylov",
          name: "Ivan Kopylov",
          position: "Analyst",
          info: [
            { text: "Born in 1992." },
            {
              text:
                "Education: engineer.Management experience: more than 5 years."
            },
            {
              text:
                "Professional experience: cryptocurrency enthusiast since 2017, work in BCS financial group, experienced in design and development of brokerage business information systems."
            }
          ],
          shortInfo: [
            {
              text:
                "Education: engineer.Management experience: more than 5 years."
            },
            {
              text:
                "Professional experience: cryptocurrency enthusiast since 2017, work in BCS financial group, experienced in design and development of brokerage business information systems."
            }
          ]
        }
      ]
    }
  },
  newsPage: {
    showMore: "Show more...",
    relatedNews: "Related News",
    emptyMsg: 'News items about company not exist on this time',
    mentionedCompanies: 'Companies mentioned in the article'
  },
  stocksPage: {
    topGainers: "Top Gainers",
    topLoosers: "Top Loosers",
    page: 'Page',
    ticker: 'Ticker',
    change: 'Change',
    changePerc: '% Change',
    price: 'Price',
    company: 'Company',
    prefShare: 'Preferred share',
    depoRec: 'Depositary receipt',
    },
  prtflPage: {
    symbol: 'SYMBOL',
    company: 'COMPANY',
    gty: 'GTY',
    last_price: 'LAST PRICE',
    mkt_value: 'MKT VALUE',
    total_gain: 'TOTAL GAIN'
    },
    breadcrumbs: {
        first: 'Markets',
        second: 'Stocks'
    },
    financialPage: {
        title: 'Financials',
        querterly: 'Querterly',
        annual: 'Annual',
        tableNote: 'all numbers in millions Rubbles, except otherwise noted',
    },
    searchInput: {
      noRes: "No results were found for your request"
    },
    partners: {
        caption: 'iFinik Investments is an official partner of'
    },
    AccountSettings: {
        title: 'Account settings',
        phoneCaption: 'Phone Number',
        phoneSubcation: 'For notifications, reminders, and logging in',
        verificationBtn: 'Verification',
        addBtn: 'ADD',
        emailCaption: 'Email address',
        emailSubcaption: 'For news, notifications, subscriptions, reminders, and logging in',
        passwordCaption: 'Update Password',
        passwordSubcaption: 'We were unable to validate your phone number. Please try again.',
        newPasswordLabel: 'New password',
        hideLabel: 'Hide',
        confirmLabel: 'Confirm password',
        showLabel: 'Show',
        currentLabel: 'Current password',
        updatePasswordLabel: 'Update Password',
        socialCaption: 'Social accounts',
        notConnected: 'Not connected',
        connected: 'Connected',
        connectBtn: 'Connect',
        removeBtn: 'Remove',
        deleteCaption: 'Delete Account',
        deleteSubcaption: 'Deleting your account will permanently delete your account and data. This action cannot be undone.',
        deleteBtn: 'Delete Account',
        cancelBtn: 'Cancel',
        enterPassword: 'Enter your password'
    },
    AccountNotification: {
        Notifications: 'Notifications',
        Safety :'Safety',
        notifedSession: 'How do you want to be notified under each log in session.',
        notifiedLogin: 'Notify me every time I log in',
        confirmSms: 'Confirm log in with a temporary SMS code',
        priceNotification: 'Price change notifications',
        prefetNotifed: 'How you prefer get notified when price to subscribed instrument acheived',
        notifedEmail: 'Receive notifications by Email',
        notifedSms: 'Receive notifications by SMS',
        notifedBrowser: 'Receive notifications in Browser',
        Subscriptions: 'Subscriptions',
        newsNotifed: 'News, offers & third-party advertisings',
        weeklyDigest: 'Weekly Digest Emails',
        Announcements: 'Announcements'
    }
};
