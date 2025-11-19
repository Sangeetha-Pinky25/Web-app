
export async function getServerSideProps({ params }) {
  // simple redirect placeholder
  return {
    redirect: {
      destination: "https://example.com",
      permanent: false
    }
  }
}
export default function Page(){ return null }
