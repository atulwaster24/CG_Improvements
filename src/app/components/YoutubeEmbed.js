import React from 'react'

const YoutubeEmbed = ({videoId}) => {
  return (
    <div className="container mx-auto relative pb-[56.25%] h-0 overflow-auto max-w-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-md"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YoutubeEmbed