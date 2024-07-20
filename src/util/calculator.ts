// calculator.ts

interface InvestmentResultsInput {
  initialInvestment: number;
  monthlyInvestment: number;
  expectedReturn: number;
  duration: number;
}

interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  monthlyInvestment: number;
}

export function calculateInvestmentResults({
  initialInvestment,
  monthlyInvestment,
  expectedReturn,
  duration,
}: InvestmentResultsInput): AnnualData[] {
  const annualData: AnnualData[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);

    investmentValue += interestEarnedInYear + monthlyInvestment * 12;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      monthlyInvestment: monthlyInvestment * 12,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
