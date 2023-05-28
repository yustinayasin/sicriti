import Layout from "../components/layout";
import Message from '../components/message';

export default function Login() {
    return (
        <Layout headings="Dashboard" isLogin={false}>
            <Message />
        </Layout>
    )
}