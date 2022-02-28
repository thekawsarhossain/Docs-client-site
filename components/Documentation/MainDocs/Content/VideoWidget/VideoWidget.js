const VideoWidget = () => {
  return (
    <div>
      <h2>Video Widget</h2>
      <div className="video-desc">
       <h3 className="mt-12">YouTube Video</h3>
      <p className="mt-5 mb-10">Video is an electronic medium for the recording, copying, playback, broadcasting, and display of moving visual media. Video was first developed for mechanical</p>
      <iframe width="100%" height="450px" src="https://www.youtube.com/embed/M9J-JJOuyE0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
     
    </div>
  );
}

export default VideoWidget;