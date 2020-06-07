import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({ video }) => {

	
	if(!video) return <div>Loading...</div>
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	console.log('video src', videoSrc)
	return (
		
			<React.Fragment>
			<Paper elevation={6} style={{height: '100%'}}> 
				<iframe width="100%" height="100%" src={videoSrc} allowFullScreen>
				</iframe>
			</Paper>

			<Paper elevation={6} style={{padding: '15px'}} >
				<Typography variant="h4" style={{marginTop: '20px'}}>{video.snippet.title} - {video.snippet.channelTitle}</Typography>
				<Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
				<Typography variant="subtitle2">{video.snippet.description}</Typography>
				
			</Paper>

			</React.Fragment>
		
	)
}

export default VideoDetail