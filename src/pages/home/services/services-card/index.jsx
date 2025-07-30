export function ServicesCard({ title, description, image }) {
    return (
        <div className="min:w-1/3 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center w-full">
                <img className="w-full h-full" src={image} alt="" />
            </div>
            <h2 className="text-center font-semibold text-dark-green text-lg">{title}</h2>
            <p className="text-center">{description}</p>
        </div>
    );
}
