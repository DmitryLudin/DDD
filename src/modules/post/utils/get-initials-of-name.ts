export function getInitialsOfName(name: string) {
  const nameSplitted = name.split(" ");
  const initialOfFirstName = nameSplitted[0][0].toUpperCase();
  const initialOfLastName = nameSplitted[1][0].toUpperCase();

  return initialOfFirstName + initialOfLastName;
}
