import './projectslist.css';
import like from '../../assets/like.svg';
import likeFilled from '../../assets/like-filed.svg';
import { ProjectsProps } from '../../@types/interfaces';
import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { useTexts } from '../../context/AppContext';

export function ProjectsList() {

    const [projects, setProjects] = useState<ProjectsProps[]>([]);
    const [favoriteProjects, setFavoriteProjects] = useState<string[]>([]);

    const { language, languages } = useTexts();

    useEffect(() => {
        const loadData = async () => {
            await api.get('/projects').then(response => {
                setProjects(response.data);
            }).catch(error => {
                alert(error)
            })
        }

        loadData();
    }, [])

    const handleSavedFavoriteProjects = (id: string) => {
        setFavoriteProjects((prevState) => {
            if (prevState.includes(id)) {
                const filteredArray = prevState.filter((project) => project !== id)
                sessionStorage.setItem('favoriteProjects', JSON.stringify(filteredArray));
                return prevState.filter((project) => project !== id)
            } else {
                sessionStorage.setItem('favoriteProjects', JSON.stringify([...prevState, id]));
                return [...prevState, id]
            }
        })
    }

    useEffect(() => {
        const savedFavoriteProjects = sessionStorage.getItem('favoriteProjects');
        const savedFavoriteProjectsArray = savedFavoriteProjects ? JSON.parse(savedFavoriteProjects) : [];
        if (savedFavoriteProjectsArray) {
            setFavoriteProjects(savedFavoriteProjectsArray);
        }
    }, [])

    return (
        <div className='projects-section'>
            <div className='projects-hero text-center'>
                <h2>{languages[language]?.projects?.title}</h2>
                <p>{languages[language]?.projects?.subtitle}</p>
            </div>
            <div className='projects-grid'>
                {
                    projects?.map(project => (
                        <div key={project.id} className='project-card d-flex jc-center al-center fd-column'>
                            <div className='thumb' style={{ backgroundImage: `url(${project.thumb})` }}></div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <img src={favoriteProjects.includes(project.id) ? likeFilled : like} alt="Like" height='20px' onClick={() => handleSavedFavoriteProjects(project.id)} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}