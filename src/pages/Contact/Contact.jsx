import { useState } from 'react'
import styles from './contact.module.css'
import { useForm } from 'react-hook-form'

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const onSubmit = (data) => {       
        reset()                 
        setIsSubmitted(true)
        console.log(data.Email, data.Text)  
    }
    
    return (
        <main className={styles.main}>
            <section className={styles.mainContent} onSubmit={handleSubmit(onSubmit)}>
                <form className={styles.forms} onSubmit={handleSubmit(onSubmit)}>
                    
                    <input
                        {...register('Email', {
                            required: 'Fill in the email',
                            pattern: {
                                value: /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/,
                                message: 'Invalid email format (e.g., name@example.com)'
                            }
                        })}
                        placeholder='Email'
                        type='email'
                    />
                    {errors.Email && <p className={styles.pError}>{errors.Email.message}</p>}

                    
                    <input
                        {...register('Text', {
                            required: 'Fill in the message',
                            minLength: {
                                value: 10,
                                message: 'Message must be at least 10 characters'
                            },
                            maxLength: {
                                value: 500,
                                message: 'Message must not exceed 500 characters'
                            }
                        })}
                        placeholder='Your message'
                    />
                    {errors.Text && <p className={styles.pError}>{errors.Text.message}</p>}
                    {isSubmitted === true && <p className={styles.pSucces}>Succes!</p>}

                    <button type="submit">Send message</button>
                </form>
            </section>
        </main>
    )
}