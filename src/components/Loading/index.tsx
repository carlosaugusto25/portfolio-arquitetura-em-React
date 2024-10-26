import loading from '../../assets/loading.gif';
import './loading.css';

export function Loading() {
    return (
        <div className="d-flex al-center jc-center loading-overlay">
            <img src={loading}  alt="Loading" height={'80px'} />
        </div>
    )
}