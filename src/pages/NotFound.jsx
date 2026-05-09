import { Button } from 'flowbite-react';
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from 'react-icons/hi';

export default function NotFound() {
    return (
        <section className='bg-gray-900 h-screen'>
            <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Página no encontrada.</p>
                    <p className="mb-4 text-lg font-light text-gray-400">Lo sentimos, no encontramos lo que buscas.</p>
                    <Button to="/" as={Link} color="blue" className='inline-flex'>
                        <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
                        Volver al inicio
                    </Button>
                </div>   
            </div>
        </section>
    )
}