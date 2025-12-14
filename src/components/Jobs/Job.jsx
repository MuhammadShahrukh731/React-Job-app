import './job.css';

export default function Job() {
    return (
        <>
            <section class="space-y-8 p-4 main">
                <div>
                    <h2 class="text-2xl font-semibold mb-4">Featured Jobs</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-lg font-semibold">UX Designer</h3>
                            <p class="text-gray-500">Company Name</p>
                            <p class="text-sm text-gray-400">Remote, Full-Time</p>
                            <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded ">Apply Now</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold mb-4">Recommended Jobs</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-lg font-semibold">UI Designer</h3>
                            <p class="text-gray-500">Company Name</p>
                            <p class="text-sm text-gray-400">Remote, Full-Time</p>
                            <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold mb-4">Latest Jobs</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-lg font-semibold">Product Designer</h3>
                            <p class="text-gray-500">Company Name</p>
                            <p class="text-sm text-gray-400">Remote, Full-Time</p>
                            <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
