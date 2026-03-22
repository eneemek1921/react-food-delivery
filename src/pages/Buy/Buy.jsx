
import { useForm } from 'react-hook-form'
import styles from './buy.module.css'
import { useState } from 'react'

export default function Buy() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const onSubmit = (data) => {
        reset() 
        setIsSubmitted(true)  
    }

    return (
        <main className={styles.main}>
            <section className={styles.mainContent}>
                <form className={styles.forms} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('Number', {
                            required: 'Fill in the card number',
                            pattern: {
                                value: /^[0-9]{4} ?[0-9]{4} ?[0-9]{4} ?[0-9]{4}$/,
                                message: 'Card number must be 16 digits'
                            }
                        })}
                        placeholder='1234 5678 9012 3456'
                    />
                    {errors.Number && <p className={styles.pError}>{errors.Number.message}</p>}
                    
                    
                    <input
                        {...register('Term', {
                            required: 'Fill in the expiration date',
                            pattern: {
                                value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                                message: 'Expiration date: MM/YY (e.g., 12/25)'
                            }
                        })}
                        placeholder='MM/YY'
                    />
                    {errors.Term && <p className={styles.pError}>{errors.Term.message}</p>}
                    
                    
                    <input
                        {...register('Code', {
                            required: 'Fill in the CVV code',
                            pattern: {
                                value: /^[0-9]{3}$/,
                                message: 'CVV must be 3 digits'
                            }
                        })}
                        placeholder='123'
                    />
                    {errors.Code && <p className={styles.pError}>{errors.Code.message}</p>}
                    {isSubmitted && <p className={styles.pSucces}>Success!</p>}
                    
                    <button type="submit">Pay</button>
                </form>
            </section>
        </main>
    )
}