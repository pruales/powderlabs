/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import CSS from 'csstype'

type ProjectCardProps = {
    link: string
    title: string
    children: React.ReactNode
    bg: string
}

const imageStyle: CSS.Properties = {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    boxShadow: '0px 3px 6px rgba(0,0,0,0.5)',
    float: 'right',
    marginBottom: '10%'
}

const cardStyle = (bg: string) => {
    return {
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 4,
        py: [4, 5],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
            color: `white !important`,
            transform: `translateY(-5px)`,
            boxShadow: `xl`,
        }
    }
}

export default class ProjectCard extends React.Component<ProjectCardProps> {
    public render () {
        const { link, title, children, bg } = this.props;
        const [ pictureLink, websiteUrl ] = link.split(' ');
        return <a
            target="_blank"
            rel="noreferrer noopener"
            sx={cardStyle(bg)}
            href={websiteUrl}
        >

            <div id="headshot">
                <img src={pictureLink}
                    alt=""
                    style={imageStyle} />
            </div>

            <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
                {children}
            </div>
            <div sx={{
                textTransform: `uppercase`,
                letterSpacing: `wide`,
                pt: 4,
                fontSize: [4, 5],
                fontWeight: `medium`,
                lineHeight: 1,
                }}
            >
            {title}
        </div>
        </a>
    }
}

// const ProjectCard = ({ link, title, children, bg, picture }: ProjectCardProps) => (
//     <a
//         target="_blank"
//         rel="noreferrer noopener"
//         sx={{
//             width: `100%`,
//             boxShadow: `lg`,
//             position: `relative`,
//             textDecoration: `none`,
//             borderRadius: `lg`,
//             px: 4,
//             py: [4, 5],
//             color: `white`,
//             background: bg || `none`,
//             transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
//             "&:hover": {
//                 color: `white !important`,
//                 transform: `translateY(-5px)`,
//                 boxShadow: `xl`,
//             }
//         }}
//     >
//         <div id="headshot">
//             <img src={picture}
//             alt=""
//             style={imageStyle} />
//         </div>

//         <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
//         <div
//             sx={{
//                 textTransform: `uppercase`,
//                 letterSpacing: `wide`,
//                 pt: 4,
//                 fontSize: [4, 5],
//                 fontWeight: `medium`,
//                 lineHeight: 1,
//             }}
//         >
//             {title}
//         </div>
//     </a>
// )

// export default ProjectCard
