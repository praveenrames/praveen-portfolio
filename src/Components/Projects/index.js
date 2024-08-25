import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButton, Divider, ToggleButtonGroup } from './ProjectsStyle.js';
import ProjectCard from '../Cards/ProjectCards.jsx';
import data from '../../data/constants.json';

const Projects = ({openModal, setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>
                    {toggle === 'all' ? 
                        <ToggleButton active value='all' onClick={() => setToggle('all')}>All</ToggleButton>
                        :
                        <ToggleButton value='all' onClick={() => setToggle('all')}>All</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'web' ? 
                       <ToggleButton active value='Web' onClick={() => setToggle('Web')}>WEB</ToggleButton>
                       :
                       <ToggleButton value='Web' onClick={() => setToggle('Web')}>WEB</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'Deep Learning' ?
                       <ToggleButton active value='Deep Learning' onClick={() => setToggle('Deep Learning')}>DEEP LEARNING</ToggleButton>
                       :
                       <ToggleButton value='Deep Learning' onClick={() => setToggle('Deep Learning')}>DEEP LEARNING</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'Machine Learning' ? 
                      <ToggleButton active value='Machine Learning' onClick={() => setToggle('Machine Learning')}>MACHINE LEARNING</ToggleButton>
                      :
                      <ToggleButton value='Machine Learning' onClick={() => setToggle('Machine Learning')}>MACHINE LEARNING</ToggleButton>
                    }
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' && data.projects
                      .map((project) => (
                           <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                      ))}
                    {data.projects
                      .filter((item) => item.category == toggle)
                      .map((project) => (
                           <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                      ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;