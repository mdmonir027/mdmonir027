import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Jumbotron } from './migration';
import ProjectCard from './ProjectCard';

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = 'https://api.github.com';
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    try {
      const repoList = [];
      for (let repoName of specfic) {
        const response = await axios.get(`${specficReposAPI}/${repoName}`);
        repoList.push(response.data);
      }

      const response = await axios.get(allReposAPI);

      let dataLength = length;
      const re = response.data.reduce((acc, cur, i) => {
        let con = true;
        acc.forEach((item) => {
          if (item.name === cur.name) {
            con = false;
            dataLength++;
          }
        });
        if (i < dataLength && con) {
          acc.push(cur);
        }
        return acc;
      }, repoList);

      setProjectsArray(re);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);
  if (projectsArray.length <= 0) return null;
  return (
    <Jumbotron fluid id='projects' className='bg-light m-0'>
      <Container className=''>
        <h2 className='display-4 pb-5 text-center'>{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
