import React from 'react';
import '../styles/PageLoader.scss';
import ncbSeal from '../assets/ncb_seal.png';

const PageLoader = () => {
    return (
        <div className="page-loader-overlay">
            <div className="loader-content">
                <img src={ncbSeal} alt="NCB Seal" className="rotating-seal" />
            </div>
        </div>
    );
};

export default PageLoader;
