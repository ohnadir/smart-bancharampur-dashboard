import React from 'react'
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';

const Banner: React.FC = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <Title children={"Banner"} />

                <Button className='px-3 py-1 rounded-md bg-blue-300' children='Add Banner' />
            </div>
        </div>
    )
}

export default Banner;