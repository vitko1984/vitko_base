import account from "./additional/account-ru";
import lp from "./additional/lp-ru";
import screener from "./additional/screener-ru";
import brokers from "./additional/brokers-lp-ru";

export default {
  account: account,
  lp: lp,
  screener: screener,
  brokers: brokers,
  searchString: "Поиск компании или символа...",
  buttons: {
    signIn: "Войти",
    registration: "Регистрация"
  },
  footerHeaders: {
    first: "Информация",
    second: "Навигация",
    third: "Загрузить",
    fourth: "Язык",
    five: "Следите за нами в:"
  },
  company: {
    name: "ООО «АйФиник»",
    address: "Пречистенская наб., 17, БЦ «Баркли Плаза», Москва, Россия",
    tel: "Тел.: +7 (499) 651-90-42"
  },
  responsibility:
    "Приведенная на этом сайте информация и мнения составлены на основе публичных источников, которые признаны надежными, однако за достоверность предоставленной информации ООО «АйФиник» ответственности не несёт. ООО «АйФиник» и её аффилированные лица и сотрудники не несут ответственности за прямой или косвенный ущерб, наступивший вследствие использования данной информации, включая данные, котировки и графики, а также за ее достоверность.",
  servicesLinks: {
    privacy: "Политика конфиденциальности",
    terms: "Условия использования"
  },
  menuList: [
    {
      name: "С чего начать",
      path: "/easystart"
    },
    {
      name: "Рынки",
      sublist: [
        {
          name: "Обзор",
          path: "/markets"
        },
        {
          name: "Акции",
          path: "/markets/stocks"
        }
      ]
    },
    {
      name: "Новости",
      sublist: [
        {
          name: "Все новости",
          path: "/news"
        },
        {
          name: "Новостная лента",
          path: "/news/feed/"
        }
      ]
    },
    {
      name: "Портфель",
      path: "/invest"
    },
    {
      name: "Информация",
      sublist: [
        {
          name: "О проекте",
          path: "/about"
        },
        {
          name: "Наши брокеры",
          path: "/brokers"
        },
        {
          name: "Контакты",
          path: "/contacts"
        },
      ]
    },
  ],
  informationList: [
    {
      name: "О проекте",
      path: "/about"
    },
    {
      name: "Наши брокеры",
      path: "/brokers"
    },
    {
      name: "Контакты",
      path: "/contacts"
    },
    {
      name: "Как начать?",
      path: "/easystart"
    }
  ],
  navigationList: [
    {
      name: "Рынки",
      path: "/markets"
    },
    {
      name: "Новости",
      path: "/news"
    }
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
    caption: "Войти в Вит-Ко",
    text:
      "Получите доступ ко всем доступным функциям, таким как списки наблюдения, вкладки, закладки, комментирование и многое другое!",
    label: "У вас еще нет аккаунта? ",
    labelLink: "Регистрация",
    alternative: "Или войдите с помощью",
    button: "Войти",
    signinLink: "войти в систему",
    sms: "Получить sms код",
    smsPlaceholder: "SMS код",
    pswdPlaceholder: "Пароль",
    newPswd: "Новый пароль",
    labelPswd: "Забыли пароль?",
    tabs: [
      {
        name: "Phone",
        text: "По номеру"
      },
      {
        name: "Email",
        text: "По email"
      }
    ]
  },
  Register: {
    enterCode: "Введите код",
    caption: "Регистрация в Вит-Ко",
    text:
      "Получите доступ ко всем доступным функциям, таким как списки наблюдения, вкладки, закладки, комментирование и многое другое!",
    label: "Вы уже зарегистрированы? ",
    labelLink: "Авторизация",
    alternative: "Или войдите с помощью",
    linkGroup: "Регистрируясь, вы принимаете",
    linkTerms: "Условия использования",
    linkPrivacy: "Политику конфиденциальности",
    linkGroup2: "и",
    button: "Регистрация",
    sms: "Получить sms код",
    smsPlaceholder: "SMS код",
    pswdPlaceholder: "Пароль",
    tabs: [
      {
        name: "Phone",
        text: "По номеру"
      },
      {
        name: "Email",
        text: "По номеру"
      }
    ],
    successSms: "SMS отправлено"
  },
  Reset: {
    resetMsg: "Мы отправили инструкцию вам на Email",
    caption: "Сбросить пароль",
    captionChange: "Изменить пароль",
    button: "Сброс",
    changePass: "Изменить"
  },
  Errors: {
    emailRequired: "Email обязателен!",
    emailIncorect: "Email не корректный!",
    pswdRequired: "Пароль обязателен!",
    pswdLength: "Пароль должен содержать минимум 6 символов",
    phoneInvalid: "Номер должен быть в правильном формате",
    codeError: "Код должен быть длиной 6 символов!",
    registeredEmail: "Пользователь с данным e-mail уже существует, вы можете ",
    registeredPhone:
      "Пользователь с данным номером уже существует, вы можете "
  },
  personal: {
    account: "Профиль",
    name: "Полное имя",
    firstName: "Имя",
    lastName: "Фамилия",
    email: "Email",
    creationTime: "Зарегестрирован с ",
    lastSignInTime: "Последний вход в систему",
    registrationType: "Тип регистрации",
    buttonOut: "Выйти",
    phone: "Телефон",
    birth: "День рождения",
    location: "Локация",
    about: "О себе",
    caption: "Персональная информация",
    subcaption: "Эта информация будет доступна пользователям этого сайта",
    editBtn: "Редактировать",
    saveBtn: "Сохранить",
    menuProfile: "Профиль",
    menuSettings: "Настройки",
    menuNotification: "Уведомления",
    avatarChange: "Изменить",
    avatarRemove: "Удалить",
    errDate: "Пажалуйста выберете месяц, год и день"
  },
  acountMenu: {
    profile: "Профиль",
    settings: "Настройки",
    notification: "Уведомления"
  },
  moreBtn: {
    share: "Поделиться",
    addBookmark: "Добавить в закладки"
  },
  MenuSecondary: {
    summary: "Обзор",
    financial: "Показатели",
    news: "Новости"
  },
  chart: {
    title: "График",
    marker: "Показать на графике",
    btnVolume: "Объем",
    btnNews: "Новости",
    changes: "Изменение"
  },
  dividends: {
    title: "Дивиденды",
    marker:
      "Ex date - это дата, на которую вы должны купить акции, чтобы получить дивиденды."
  },
  profile: {
    title: "Профиль компании",
    executives: "Ключевые руководители",
    marker: "Наиболее важные факторы",
    structureTitle: "Структура держателей",
    structureMarker: "Структура предоставлена специальными сервисами",
    labelSector: "Сектор",
    labelIndustry: "Индустрия",
    labelEmployees: "Сотрудники"
  },
  banner: {
    equity: "Акции"
  },
  marketData: {
    title: "Рыночные данные",
    PreviousClose: "Цена закрытия",
    Open: "Цена открытия",
    DaysRange: "Дневной диапазон",
    WRange: "Годовой диапазон (52w)"
  },
  prtflData: {
    title: 'Статистика портфеля',
    consensusPE: 'Консенсус P/E в среднем',
    consensusGrowth: 'Рост консенсуса в среднем',
    epsGrowth: 'Рост EPS',
    dividendYield: 'Дивидендная доходность',
    volatility: 'Волатильность',
    betaTrend: 'Бета Тренд'
  },
  financialTab: {
    title: "Показатели"
  },
  companyCard: {
    update: "Последнее обновление",
    btnWishlist: "Наблюдать",
    btnAlert: "Create Price Alert"
  },
  companyInfo: {
    btnBuy: "Купить",
    btnSell: "Продать",
    closedMark: "Биржа закрыта. Откроется через ",
    dividendYield: "Див. доходность"
  },
  moreBtn: {
    share: "Поделиться",
    addBookmark: "Добавить в закладки"
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
    title: "О проекте",
    description: [
      { text: "iFinik Investments - российская компания." },
      {
        text:
          "Наша цель – построить крупнейшую экосистему для частных инвесторов, сделать её доступной и понятной для всех потенциальных участников."
      },
      {
        text:
          "Все условия для того, чтобы реализовать этот перспективный, многообещающий проект – у нас есть. В том числе – это грамотные, квалифицированные специалисты, готовые к освоению новых вершин."
      },
      {
        text:
          "В нашей стране современный биржевой рынок, по сути, только начинает формироваться и имеет огромные резервы развития. Сейчас – важно их грамотно использовать. Одновременно мы намерены – охватить международный фондовый рынок. Другими словами – сконцентрировать на одной площадке наилучшие возможности для анализа и принятия решений по инвестированию, как в российские, так и в глобальные финансовые инструменты!"
      }
    ],
    team: {
      caption: "Наша команда",
      persons: [
        {
          id: "AlexeyKleutin",
          name: "Алексей Клеутин",
          position: "Основатель",
          info: [
            { text: "Родился в 1984 году." },
            {
              text:
                'Экономист по основному образованию, имеет второй диплом по специализации "Стратегический менеджмент" и степень EMBA. Управленческий опыт более 15 лет. Опыт успешной биржевой торговли более 10 лет. Руководил финансовым блоком (in-house) в компаниях Сбербанк, Мираторг, Симпл. Имеет опыт работы в консалтинге.'
            },
            {
              text:
                "В проекте занимается вопросами стратегического развития и финансирования. Осуществляет взаимодействие с партнерами и выстраивание бизнес-процессов."
            }
          ],
          shortInfo: [
            {
              text:
                'Экономист по основному образованию, имеет второй диплом по специализации "Стратегический менеджмент" и степень EMBA. Управленческий опыт более 15 лет. Опыт успешной биржевой торговли более 10 лет. Руководил финансовым блоком (in-house) в компаниях Сбербанк, Мираторг, Симпл. Имеет опыт работы в консалтинге.'
            },
            {
              text:
                "В проекте занимается вопросами стратегического развития и финансирования. Осуществляет взаимодействие с партнерами и выстраивание бизнес-процессов."
            }
          ]
        },
        {
          id: "AnnaAndronova",
          name: "Анна Андронова",
          position: "Креативный директор",
          info: [
            {
              text:
                "Высшее экономическое образование, степень МВА. Более 15 лет управленческого опыта в корпоративном секторе и руководстве консалтинговыми проектами."
            }
          ],
          shortInfo: [
            {
              text:
                "Высшее экономическое образование, степень МВА. Более 15 лет управленческого опыта в корпоративном секторе и руководстве консалтинговыми проектами. Практика успешной торговли на фондовой бирже с 2015 года."
            },
            {
              text:
                "Со-основатель и идейный вдохновитель iFinik. Занимается административным управлением проекта, а также вопросами маркетинга и PR."
            }
          ]
        },
        {
          id: "IvanKopylov",
          name: "Иван Копылов",
          position: "Аналитик",
          info: [
            { text: "Родился в 1992 году." },
            {
              text:
                "Инженер по основному образованию. Управленческий опыт более 5 лет. Криптовалютный энтузиаст с 2017 года. Работал в финансовой группе БКС. Обладает опытом разработки и развития информационных систем брокерского бизнеса."
            },
            {
              text:
                "В проекте совмещает в себе функции бизнес-аналитика и QA инженера."
            }
          ],
          shortInfo: [
            {
              text:
                "Инженер по основному образованию. Управленческий опыт более 5 лет. Криптовалютный энтузиаст с 2017 года. Работал в финансовой группе БКС. Обладает опытом разработки и развития информационных систем брокерского бизнеса."
            },
            {
              text:
                "В проекте совмещает в себе функции бизнес-аналитика и QA инженера."
            }
          ]
        }
      ]
    }
  },
  newsPage: {
    showMore: "Показать больше...",
    relatedNews: "Похожие новости",
    emptyMsg: "Новостей о компании на данный момент нет",
    mentionedCompanies: "Компании, упомянутые в статье"
  },
  stocksPage: {
    topGainers: "Топ роста дня",
    topLoosers: "Топ падения дня",
    page: "Стр .",
    ticker: "Тикер",
    change: "Изменение",
    changePerc: "% Изменение",
    price: "Цена",
    company: "Компания",
    prefShare: "Акции привилегированные",
    depoRec: "Депозитарная расписка"
  },
  prtflPage: {
    symbol: 'СИМВОЛ',
    company: 'КОМПАНИЯ',
    gty: 'GTY',
    last_price: 'ПОСЛ. ЦЕНА',
    mkt_value: 'ЗНАЧЕНИЕ MKT',
    total_gain: 'ОБЩ. ПРИБЫЛЬ'
    },
  financialPage: {
    title: "Показатели",
    querterly: "Квартальный",
    annual: "Годовой",
    tableNote:
      "все значения в миллионах российских рублей, если не указано иное"
  },
  searchInput: {
    noRes:
      "По вашему запросу ничего не найдено. Проверьте правильность введенного тикера."
  },
  partners: {
    caption: "iFinik Investments является официальным партнером"
  },
  AccountSettings: {
    title: "Настройки аккаунта",
    phoneCaption: "Номер телефона",
    phoneSubcation: "Для уведомлений, напоминаний и авторизации",
    verificationBtn: "Верификация",
    addBtn: "Добавить",
    emailCaption: "Электронная почта",
    emailSubcaption:
      "Для новостей, уведомлений, подписок, напоминаний и входа в систему",
    passwordCaption: "Обновить Пароль",
    passwordSubcaption:
      "Ваш пароль должен содержать не менее 6 символов и содержать буквы, цифры и специальные символы.",
    newPasswordLabel: "Новый пароль",
    hideLabel: "Скрыть",
    confirmLabel: "Подтвердить пароль",
    showLabel: "Показать",
    currentLabel: "Текущий пароль",
    updatePasswordLabel: "Изменить пароль",
    socialCaption: "Социальные сети",
    notConnected: "Не связан",
    connected: "Привязан",
    connectBtn: "Привязать",
    removeBtn: "Отвязать",
    deleteCaption: "Удалить Акаунат",
    deleteSubcaption:
      "Удаление вашей учетной записи приведет к безвозвратному удалению вашей учетной записи и данных. Это действие не может быть отменено.",
    deleteBtn: "Удалить аккаунт",
    cancelBtn: "Отмена",
    enterPassword: "Введите свой пароль"
  },
  AccountNotification: {
    Notifications: "Уведомления",
    Safety: "Безопасность",
    notifedSession: "Получать уведомления при каждом входе в систему",
    notifiedLogin: "Уведомлять при каждом входе",
    confirmSms: "Подтверждение входа одноразовым СМС кодом",
    priceNotification: "Уводомления об изменении цены",
    prefetNotifed:
      "Получать уведомления, по достижению заданной цены актива из избранного",
    notifedEmail: "Получать уведомления по электронной почте",
    notifedSms: "Получать уведомления по СМС",
    notifedBrowser: "Получать уведомления в браузере",
    Subscriptions: "Подписки",
    newsNotifed: "Новости, предложения и сторонняя реклама",
    weeklyDigest: "Еженедельный дайджест по электронной почте",
    Announcements: "Анонсы"
  }
};
