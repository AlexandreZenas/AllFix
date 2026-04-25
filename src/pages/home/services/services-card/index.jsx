export function ServicesCard({ title, description, image }) {
    return (
        <div className="min:w-1/3 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center">
                <img src={image} alt="" />
            </div>
            <h2 className="text-center font-bold text-blue text-xl">{title}</h2>
            <p className="text-center">{description}</p>
        </div>
    );
}
