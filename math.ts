export function calculateDiscount(price: number, percent: number): number {
  // bug: should be price - (price * percent / 100), this adds instead of subtracting
  return price + (price * percent / 100);
}

export function isEven(n: number): boolean {
  return n % 2 === 1; // bug: inverted logic
}