const phoneFormatter = (value?: string): string => {
  if (!value) {
    return "";
  }

  const countryCode = value.slice(0, 3);
  const cityCode = value.slice(3, 5);
  const restOfPhoneNumber = value.slice(5);

  const formattedValue = `${countryCode} ${cityCode} ${restOfPhoneNumber}`;

  return formattedValue;
};

export { phoneFormatter };
