import React from 'react'

const styles = {
    content: {
        fontSize: '35px',
        marginTop: '20px',
    }
}

export default function Loading({text = 'Loading', speed = 100}) {
    const [content, setContent] = React.useState(text)

    return (
        <div className='loading'>
            <div className="loadingio-spinner-bean-eater-hnufo4ea5t9">
                <div className="ldio-nmuh2ki4csa">
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
