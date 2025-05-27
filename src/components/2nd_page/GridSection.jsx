const colors = [
    "#000000", "#2563eb", "#fb923c", "#10b981", "#7c3aed", "#b91c1c",
    "#d97706", "#15803d", "#0369a1", "#6b7280",
    "#92400e", "#f87171", "#3b82f6", "#22c55e", "#ef4444",
    "#f87171", "#4b5563", "#9ca3af", "#f87171", "#f87171",
    "#f87171", "#f87171", "#6b7280", "#9ca3af", "#f87171"
];

const icons = [
    "./images/Vector1.png",
    "./images/Vector2.png",
    "./images/Vector3.png",
    "./images/Vector4.png",
    "./images/Vector5.png",
];

const GridSection = () => {
    return (
        <div className="text-center py-10">
            <h2 className="text-2xl mb-6">Explore The Grid</h2>
            <div className="grid grid-cols-5 gap-2 max-w-96 mx-auto ">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="w-16 h-16 rounded-sm cursor-pointer flex items-center justify-center hover:scale-105"
                        style={{ backgroundColor: color }}
                    >
                        {index < 5 && (
                            <img src={icons[index]} alt={`icon-${index}`} className="w-8 h-8" />
                        )}
                    </div>
                ))}
            </div>
            <button className="mt-6 bg-yellow-400 text-white px-4 py-2 rounded-md font-semibold hover:text-black hover:bg-yellow-500 duration-100">Start Drawing</button>
        </div>
    );
};

export default GridSection;
