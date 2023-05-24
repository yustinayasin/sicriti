export default function Message() {
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Your Message</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-wide">Delete</button>
                </div>
            </div>
        </div>
    )
}