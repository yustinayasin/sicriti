import Navbar from '../components/navbar'
import FormLogin from '../components/formLogin'

export default function Dashboard() {
    return (
        <div className="min-h-full">
            <Navbar headings='Login'/>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <FormLogin />
            </main>   
        </div>
    )
}