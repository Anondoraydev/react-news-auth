
import { Link } from 'react-router-dom';
import { IoBookmarksOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";
const NewCard = ({ news }) => {
    const { title, image_url, details, _id } = news;

    return (
        <div className="card bg-base-100 shadow-xl px-8 pb-8 gap-4 mb-16">
            <div className="">
                <div className='bg-[#F3F3F3] p-4 my-4 flex justify-between '>
                    <div className='flex items-center gap-5' >
                        <img
                            src={news.author.img}alt='' className="w-[40px] h-[40px] rounded-full object-cover"
                        />
                        <div>
                            <p>{news.author.name}</p>
                            <p>{news.author.published_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoBookmarksOutline/>
                        <MdOutlineShare/>
                    </div>
                </div>
                <h2 className="card-title">{title}</h2>
            </div>
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            {
                details.length > 200
                    ? <p>{details.slice(0, 200)} <Link
                        to={`/news/${_id}`} className='text-[#FF8C47]'> Read More.....</Link></p>
                    : <p>{details}</p>

            }
        </div>
    );
};

export default NewCard;