import React from 'react'
import Container from '../Container'

const WhatsNew = () => {
    return (
        <>
            <section>
                <Container>
                    <div className="text-center">
                        <h3 className='text-[#1F1F1F] text-2xl font-bold text-center pt-6'>What's new</h3>
                        <div className="">
                            <ul className='flex justify-center gap-x-6 py-3 text-[#696C70]'>
                                <li>Tops</li>
                                <li>Accessories</li>
                                <li>Dress</li>
                                <li>Short</li>
                                <li>Shirt</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default WhatsNew
