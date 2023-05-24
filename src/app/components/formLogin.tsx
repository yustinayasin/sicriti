export default function formLogin() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <form>
                <div className="space-y-12">
                    <div className="border-gray-900/10 pb-2">
                        <div className="mt-4">
                            <div>
                                <label htmlFor="price" className="block mb-2 text-large font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <input type="text" placeholder="yustinayasin@gmail.com" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 mt-4 text-large font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <input type="password" placeholder="******" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Login
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
} 