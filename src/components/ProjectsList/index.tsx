import './projectslist.css';
import like from '../../assets/like.svg';
// import likeFilled from '../../assets/like-filled.svg';

export function ProjectsList() {
    return(
        <div className='projects-section'>
            <div className='projects-hero text-center'>
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className='projects-grid'>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>RN, Brazil</p>
                    <img src={like} alt="Like" height='20px' />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>RN, Brazil</p>
                    <img src={like} alt="Like" height='20px' />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>RN, Brazil</p>
                    <img src={like} alt="Like" height='20px' />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>RN, Brazil</p>
                    <img src={like} alt="Like" height='20px' />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>RN, Brazil</p>
                    <img src={like} alt="Like" height='20px' />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>RN, Brazil</p>
                    <img src={like} alt="Like" height='20px' />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>RN, Brazil</p>
                    <img src={like} alt="Like" height='20px' />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>RN, Brazil</p>
                    <img src={like} alt="Like" height='20px' />
                </div>
            </div>
        </div>
    )
}