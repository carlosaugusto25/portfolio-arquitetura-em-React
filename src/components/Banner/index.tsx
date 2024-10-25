import './banner.css';

interface BannerProps {
    banner?:string;
    title:string;
}

export function Banner({banner, title}:BannerProps) {
    return(
        <div className="banner d-flex al-end" style={{ backgroundImage: `url(/${banner})` }}>
            <div className='container'>
                <div className='title-panel d-flex al-center jc-center'>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}