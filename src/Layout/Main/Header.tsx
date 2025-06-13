import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div>
            <Link to="/profile" className=''>
                <img
                    style={{
                        width: 60,
                        height: 60
                    }}
                    src={"https://play-lh.googleusercontent.com/va-SZATY08R3TmopXeQzLNeSXGMWmwh0CHjCuMOrLOWblN8FS6GqyS9J-Hpm4MUPLGQ=w240-h480-rw"}
                    alt="person-male--v2"
                />
            </Link>
        </div>
    )
}

export default Header