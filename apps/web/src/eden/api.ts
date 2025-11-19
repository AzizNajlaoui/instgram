import eden from ".";

export async function getTest() {
  const { data } = await eden.api.test.get();
  return data;
}
