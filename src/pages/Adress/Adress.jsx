
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import styles from './adress.module.css'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAdress } from '../../contexts/AdressContext'


export default function Adress() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const mapContainer = useRef(null)
    const map = useRef(null)

    const {register, handleSubmit, reset, formState: {errors}} = useForm()

    const {addAdress} = useAdress()

    const onSubmit = (data) => {
        reset()
        setIsSubmitted(true)
        addAdress(data)
    }

    useEffect(() => {
        if (map.current) return

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
            center: [86.922623, 27.988056],
            zoom: 4
        })
    }, [])
    return (
        <>
        <header className={styles.header}>
            <section className={styles.headerContent}>
                <div ref={mapContainer} 
                className={styles.map}
                style={{}} />

            </section>
        </header>
        <main className={styles.main}>
            <section className={styles.mainContent}>
                    <form className={styles.forms} onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register('Street', {
                            required: 'Fill in the street',
                            pattern: {
                                value: /^[A-Za-zА-Яа-яЁё\s\-\.]{3,50}$/,
                                message: 'Street name must contain only letters (3-50 chars)'
                            }
                        })}
                            placeholder='Street'                          
                        ></input>
                        {errors.Street && <p className={styles.pError}>{errors.Street.message}</p>}
                        <input
                            {...register('Building', {
                                required: 'Fill in the building',
                                pattern: {
                                    value: /^[A-Za-z0-9А-Яа-яЁё\/\-]{1,20}$/,
                                    message: 'Building number (e.g., 15, 15A, 15/2)'
                                }
                            })}
                            placeholder='Building'
                        ></input>
                        {errors.Building && <p className={styles.pError}>{errors.Building.message}</p>}
                        <input
                            {...register('Number', {
                                required: 'Fill in the number',
                                pattern: {
                                    value: /^[0-9A-Za-zА-Яа-яЁё\-]{1,10}$/,
                                    message: 'Apartment/office number (max 10 chars)'
                                }
                            })}
                            placeholder='Number'
                        ></input>
                        {errors.Number && <p className={styles.pError}>{errors.Number.message}</p>}
                        {isSubmitted && <p className={styles.pSucces}>Success register address!</p>}
                        <button type='submit'>Send</button>
                        <button onClick={() => addAdress(null)}>Clear</button>
                    </form>
            </section>
        </main>
    </>
    )
}