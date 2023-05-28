import FormLogin from "../components/formLogin";
import Layout from "../components/layout";

export default function Login() {
    return (
        <Layout headings="Login" isLogin={false}>
            <FormLogin />
        </Layout>
    )
}