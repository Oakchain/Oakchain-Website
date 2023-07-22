import AuthGuard from "../../Layout/AuthGuard";
import React, { useEffect } from 'react'
import { Trending, Featured } from "../../component/News";
import ft1 from '../../assets/images/feat1.svg'
import ft2 from '../../assets/images/feat2.svg'
import ft3 from '../../assets/images/feat4.svg'



const News = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Use 'smooth' for smooth scrolling, or 'auto' for instant scrolling
        });
    }, [])
    return (
        <AuthGuard>
            <div className="oak-container-fluid">
                <div className="oak-mb">
                    <Trending />
                </div>
                <div className="d-flex align-items-center justify-content-start">
                    <h5 className="oak-section__title oak-mb">Featured News</h5>
                </div>
                <div className="d-flex align-items-center overflow-auto flex-nowrap">
                    <Featured image={ft1} />
                    <Featured image={ft2} />
                    <Featured image={ft3} />
                </div>

            </div>
        </AuthGuard>
    )
}

export default News