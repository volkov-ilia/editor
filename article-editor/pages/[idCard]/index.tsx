import { Application } from "../../ui/components/Application"

const Page = () => {
  return <Application />
}

export async function getServerSideProps() {
  return {
    props: {
      map: {
        value: [],
        form: [],
      },
    },
  }
}

export default Page
