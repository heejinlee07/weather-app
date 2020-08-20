export function getFixedNumber(value, fallback, calculate, units) {
  if (!value) return fallback;

  return `${calculate(value)}${units}`;
}

export function getFixedNumberWithDefault(
  value,
  fallback = "0",
  calculate = (_val) => (_val / 10).toFixed(1),
  units = "cm"
) {
  if (!value) return fallback;

  return `${calculate(value)}${units}`;
}

export function getFixedNumberWithDefaultWithoutOrder({
  value,
  fallback = "0",
  calculate = (_val) => (_val / 10).toFixed(1),
  units = "cm",
}) {
  if (!value) return fallback;

  return `${calculate(value)}${units}`;
}

// hourly
// {getFixedNumberWithDefaultWithoutOrder({
//   value: hourly.pop,
//   fallback: "-",
//   calculate: (_val) => (_val * 100).toFixed(),
//   units: "%",
// })}

// CurrentHourlyInfo
//   {getFixedNumberWithDefaultWithoutOrder({
//   value: weathers.daily?.[0].rain,
// })}
