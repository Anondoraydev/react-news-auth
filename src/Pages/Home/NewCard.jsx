
import { Link } from 'react-router-dom';
import { IoBookmarksOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";
import { FaEye } from "react-icons/fa";
const NewCard = ({ news }) => {
    const { title, image_url, details, _id, total_view } = news;

    return (
        <div className="card bg-base-100 shadow-xl px-8 pb-8 gap-4 mb-16">
            <div className="">
                <div className='bg-[#F3F3F3] p-4 my-4 flex justify-between '>
                    <div className='flex items-center gap-5' >
                        <img
                            src={news.author.img} alt='' className="w-[40px] h-[40px] rounded-full object-cover"
                        />
                        <div>
                            <p>{news.author.name}</p>
                            <p>{news.author.published_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoBookmarksOutline />
                        <MdOutlineShare />
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
            <div className='flex justify-between p-6'>
                <div className="rating gap-2">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-400" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-400" defaultChecked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-400" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-400" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-400" />


                    <p className='pl-2 text-[#706F6F]'>{news.rating.number}</p>
                </div>
                <div className='flex items-center gap-2 font-semibold text-[#706F6F]'>
                    <FaEye />
                    <p>{total_view}</p>
                </div>
            </div>

        </div>
    );
};

export default NewCard;