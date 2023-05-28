'use client'

export default function Form() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <form>
                <div className="space-y-12">
                    <div className="border-gray-900/10 pb-2">
                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2">
                                <textarea
                                id="message"
                                name="message"
                                rows={3}
                                className="textarea textarea-bordered block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                placeholder="Write your message here.."
                                defaultValue={''}
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Send
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
