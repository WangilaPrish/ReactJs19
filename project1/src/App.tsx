import Card from './components/Card';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card
                    title="Sample Title"
                    description="This is a sample description."
                    imageUrl="https://via.placeholder.com/150"
                    link="https://example.com"
                />
                <Card
                    title="Another Title"
                    description="This is another sample description."
                    imageUrl="https://via.placeholder.com/150"
                    link="https://example.com/another"
                />
                <Card
                    title="Third Title"
                    description="This is yet another sample description."
                    imageUrl="https://via.placeholder.com/150"
                    link="https://example.com/third"
                />
                <Card
                    title="Fourth Title"
                    description="This is a fourth sample description."
                    imageUrl="https://via.placeholder.com/150"
                    link="https://example.com/fourth"
                />
            </div>
        </div>

    )
}

export default App
