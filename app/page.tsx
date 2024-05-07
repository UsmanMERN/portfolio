import Section_1 from '@/components/Home/Section_1'


export default async function Home() {

  async function getContributions(): Promise<number> {
    try {
      const response = await fetch('https://api.github.com/users/UsmanMERN', {
        next: { revalidate: 86400 }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
      const data = await response.json();
      return data.public_repos;
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  }
  const contributions = await getContributions();


  return (
    <>
      <Section_1 contributions={contributions} />
    </>
  )
}
