// For Tier list, Pro - Interprise - No Tier

export function CheckTier(numReqs: number, tier?: string) {
  if (tier === "pro") {
    return numReqs * 0.01;
  }

  if (tier === "enterprise") {
    return numReqs * 0.03;
  }

  return numReqs * 0.1;
}

console.log(CheckTier(5, "pro"));
console.log(CheckTier(2, "enterprise"));
console.log(CheckTier(6));
