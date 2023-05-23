import Navbar from '../components/navbar'
import Message from '../components/message';

export default function Dashboard() {
    return (
        <div className="min-h-full">
            <Navbar headings='Dashboard'/>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Message />
            </main>   
        </div>
    )
}