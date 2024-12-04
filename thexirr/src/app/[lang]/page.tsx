async function getDictionary(locale: string) {
  try {
    return (await import(`../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    return (await import(`../../dictionaries/en.json`)).default;
  }
}

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <h1>{dict.home.title}</h1>
      <p>{dict.home.description}</p>
    </main>
  );
}
