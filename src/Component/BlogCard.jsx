import React from 'react'

const BlogCard = ({ title, date, tags, image }) => (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 overflow-hidden rounded-lg">
  {/* Image Section */}
  <div className="flex-shrink-0">
    <img src={image} alt="frame1" className="w-full h-full" />
  </div>

  {/* Content Section */}
  <div className="flex-1">
    <p className="text-white/50 text-sm">{date}</p>
    <h3 className="text-white text-lg font-medium group-hover:text-white/80 transition-colors">{title}</h3>
    <div className="flex gap-2 flex-wrap mt-1">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-gray-800 text-white/60 text-xs rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* Button Section */}
  <div className="flex-shrink-0">
    <button className="text-black bg-white px-4 py-2 rounded-full text-sm transition-colors">
      Read
    </button>
  </div>
</div>

);

export default BlogCard