export default function FullScreenLoader() {
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-3xl dark:bg-gray-950/50">
            <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-2 animate-bounce">
                    <div className="h-3 w-3 rounded-full bg-gray-50" />
                    <div className="h-3 w-3 rounded-full bg-gray-50 delay-100" />
                    <div className="h-3 w-3 rounded-full bg-gray-50 delay-200" />
                </div>
            </div>
        </div>
    )
}





