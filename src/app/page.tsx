import Form from "./components/form";
import Layout from "./components/layout";
import Title from "./components/title";

export default function Page() {
    return (
      <Layout headings="Home" isLogin={true}>
          <Title/>
          <Form/> 
      </Layout>
    )
}

