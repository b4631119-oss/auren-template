export const CURRENCIES = ["KGS", "USD", "RUB"] as const

export type Currency = (typeof CURRENCIES)[number]

// Prices in lib/data.ts are the base values in KGS. These are approximate
// template rates (no real business behind the store): how many KGS one unit
// of the currency is worth.
export const EXCHANGE_RATES: Record<Currency, number> = {
  KGS: 1,
  USD: 89, // 1 USD = 89 KGS
  RUB: 0.95, // 1 RUB = 0.95 KGS
}

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  KGS: "сом",
  USD: "$",
  RUB: "₽",
}

export function convertPrice(priceInKGS: number, currency: Currency): number {
  return priceInKGS / EXCHANGE_RATES[currency]
}

export function isCurrency(value: unknown): value is Currency {
  return typeof value === "string" && (CURRENCIES as readonly string[]).includes(value)
}

// Converts a base KGS price into the selected currency and formats it with
// the right symbol. KGS is shown as a whole number ("684 сом"), USD and RUB
// keep two decimals ("$7.69", "₽720.00").
export function formatPrice(priceInKGS: number, currency: Currency): string {
  const amount = convertPrice(priceInKGS, currency)
  const symbol = CURRENCY_SYMBOLS[currency]

  if (currency === "KGS") {
    return `${Math.round(amount)} ${symbol}`
  }
  return `${symbol}${amount.toFixed(2)}`
}
