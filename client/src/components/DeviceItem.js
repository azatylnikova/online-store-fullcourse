import React from 'react';
import { useNavigate } from 'react-router-dom';


import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png'

import Col from 'react-bootstrap/Col';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
const history  = useNavigate()

    return (
       <Col md={3} className='mt-3' onClick={()=> history(DEVICE_ROUTE + '/' + device.id)}> 
        <Card style={{width: 150, cursor: 'pointer'}} border='light'>
            <Image width={150} height={150} src={device.img}></Image>
            <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                <div>Samsung...</div>
                 <div className='d-flex align-items-center'>
                    <div>{device.rating}</div>
                    <Image width={18} height={18} src={star}></Image>
                 </div> 
            </div>
            <div>
                    {device.name}
                 </div>
        </Card>
       </Col>
    );
};

export default DeviceItem;