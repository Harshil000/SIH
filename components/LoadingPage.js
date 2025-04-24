import { Loader } from "lucide-react";

const LoadingPage = ({ message = "Analyzing your crop image..." }) => {
    return (
        <>
            <div className="min-h-screen w-full bg-gradient-to-b from-[#F2FCE2] to-white flex flex-col items-center justify-center p-4">
                <div className="max-w-md w-full text-center space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-800 animate-fade-in">
                        Crop Disease Diagnosis
                    </h1>

                    <div className="relative flex flex-col items-center space-y-4">
                        <Loader className="w-12 h-12 text-green-600 animate-spin" />
                        <p className="text-green-700 text-lg animate-fade-in">
                            {message}
                        </p>
                    </div>

                    <div className="text-sm text-green-600/80 animate-fade-in delay-300">
                        Our AI is carefully examining your crop image
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMyMjk5NjEvMTUiLz48L3N2Zz4=')] opacity-40" />
                </div>
            </div>
        </>
    );
};

export default LoadingPage;