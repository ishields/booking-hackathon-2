import React from 'react'

// import layoutStyles from "../styles/Layout.module.css"
// import {Image} from "react-native-web";
// import {Header} from "../stories/Header";
// import {Button} from "../stories/Button";
// import Link from 'next/link'
type Props = {
};

export default function Navbar({}: Props) {
    return (
        <div>
            <div className='grid grid-flow-col auto-cols-auto'>
                Navbar
                {/*<Link href="/" replace>*/}
                {/*    <a>*/}
                {/*        <Image source='https://hotels.demo.techspian.com/assets/images/tripscout-logo.svg' style={{width: '122px', height: 26}}/>*/}
                {/*    </a>*/}
                {/*</Link>*/}

                {/*<div className='grid grid-flow-col auto-cols-auto justify-end'>*/}
                {/*    <Button label={'Sign In'} variant={'primary'} className={'mr-4'}/>*/}

                {/*    <Button label={'Log out'} variant={'secondary'}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}