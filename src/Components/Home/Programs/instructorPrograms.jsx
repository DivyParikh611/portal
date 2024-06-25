import React,{useState,useEffect} from 'react'

export default function InstructorPrograms() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [tiles, setTiles] = useState([
        { title: "Course Title 1", thumbnail: "https://api.learningt.com/wp-content/uploads/2023/07/PA-CPA-Onlive-live.png", hoursTaken: "20" },
        { title: "Course Title 2", thumbnail: "https://api.learningt.com/wp-content/uploads/2023/07/PA-CPA-Onlive-live.png", hoursTaken: "20" },
        { title: "Course Title 3", thumbnail: "https://api.learningt.com/wp-content/uploads/2023/07/PA-CPA-Onlive-live.png", hoursTaken: "20" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === tiles.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [tiles]); // Depend on tiles to reset the interval when tiles change

    const addNewTile = () => {
        const newTile = {
            title: `Course Title ${tiles.length + 1}`,
            thumbnail: "https://api.learningt.com/wp-content/uploads/2023/07/PA-CPA-Onlive-live.png",
            hoursTaken: "20"
        };
        setTiles([...tiles, newTile]);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
        <section className="text-gray-600 body-font">
                <div className="container px-8 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4 slider-container">
                        {tiles.map((item, index) => (
                            <ProgramTile key={index} item={item} image={item.thumbnail} isActive={index === currentSlide} />
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                        {tiles.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-4 h-4 mx-2 cursor-pointer rounded-full ${index === currentSlide ? 'bg-purple-800 w-8' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* <section class="text-gray-600 body-font">
                <div class="container px-12 py-20 mx-auto">
                    <div class="flex flex-wrap -m-4 slider-container">
                        {tiles.map((item, index) => (
                            <ProgramTile key={index} item={item} image={item.thumbnail} />
                        ))}
                    </div>
                </div>
            </section> */}
        </>
    )
}

const ProgramTile = ({ item, image }) => {
    return (
        <div className="p-5 lg:w-1/3 shadow shadow-xl">
            <div className="h-full border border-purple-800 px-2 rounded-md overflow-hidden text-center relative">
                <div className="w-full bg-purple-600">
                    <img src={image} alt="" className="w-full h-auto" />
                </div>
                <hr />
                <h1 className="px-3 py-4 text-xl text-start font-semibold text-black">{item.title}</h1>
                <div className="justify-between flex px-4">
                    <div className="p-3 flex justify-between items-center w-1/2">
                        <div className="bg-red-200 h-12 w-12 rounded-lg"></div>
                        <div className="flex flex-col text-start">
                            <div className='text-md text-start'>Duration</div>
                            <div className='text-sm text-end'>{item.hoursTaken} hours</div>
                        </div>
                    </div>
                    <div className="p-3 flex justify-between items-center w-1/2">
                        <div className="bg-red-200 h-12 w-12 rounded-lg"></div>
                        <div>Text</div>
                    </div>
                </div>
                <hr />
                <div className="flex py-4">
                    <div>INR</div>
                    <div>(Exclusive of 18% GST)</div>
                </div>
            </div>
        </div>
    );
};
