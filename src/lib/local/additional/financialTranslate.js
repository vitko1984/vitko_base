export default  {
    ru: {
        tableTitles: ['Отчет о совокупном доходе', 'Отчет о движении денежных средств', 'Баланс', 'Мультипликаторы', 'Custom ratios & Multipliers'],
        titlesIncomeArray: [ 'Выручка', 'Чистая прибыль', 'EBITDA'],
        titlesCashArray: [ 'Деньги от операционной деятельности', 'Остаток денег на конец периода'],
        titlesBalanceArray: ['Всего активов', 'Всего обязательств', 'Всего капитал'],
        titlesEbitda: ['Чистая прибыль до налогов', 'Амортизация', 'Проценты к уплате, нетто'],
        titlesAssets: ['Оборотные активы', 'Внеооборотные активы', 'Долгосрочные кредиты и займы', 'Краткосрочные кредиты и займы', 'Прочие обязательства'],
        titlesRatiosArray: [{label: 'Долг / EBITDA', tooltip: '(Short term debt + Long term debt) / EBITDA'}, {label: 'Чистый долг / EBITDA', tooltip: ' (Short term debt + Long term debt - Cash) / EBITDA'}/*, 'P/S (Price to Sales)', 'P/E (Price to Earnings)', 'EV / EBITDA'*/],
        titlesCustomRatiosArray: ['Ratio1', 'Ratio2', 'Ratio3'],
    },
    en: {
        tableTitles: ['Income statement', 'Cash Flow', 'Balance sheet', 'Ratios', 'Custom ratios & Multipliers'],
        titlesIncomeArray: [ 'Total Revenue', 'Net Income', 'EBITDA'],
        titlesCashArray: [ 'Net Cash from Operating Activities', 'Cash at the End of the Period'],
        titlesBalanceArray: ['Total Assets', 'Total Liabilities', 'Total Equity'],
        titlesEbitda: ['Net Income Before Taxes', 'Depreciation / Amortization', 'Interest Expenses'],
        titlesAssets: ['Current Assets', 'Non-current Assets', 'Long Term Debt', 'Short Term Debt', 'Other Liabilities'],
        titlesRatiosArray: [{label: 'Debt / EBITDA', tooltip: '(Short term debt + Long term debt) / EBITDA'}, {label: 'Net Debt / EBITDA', tooltip: ' (Short term debt + Long term debt - Cash) / EBITDA'}/*, 'P/S (Price to Sales)', 'P/E (Price to Earnings)', 'EV / EBITDA'*/],
        titlesCustomRatiosArray: ['Ratio1', 'Ratio2', 'Ratio3'],
    }
}
