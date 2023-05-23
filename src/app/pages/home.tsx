import Navbar from '../components/navbar'
import Form from '../components/form'
import Title from '../components/title'

export default function Home() {
    return (
        <div className="min-h-full">
            <Navbar headings='Home'/>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Title/>
                <Form/>
            </main>   
        </div>
    )
}