const Footer = () => {
    return (
        <footer className='footer'>
            <form action='https://formbold.com/s/9kPGz' method='POST'>
                <label>
                    Your email:
                    <input type='email' name='email' />
                </label>
                <label>
                    Your message:
                    <textarea name='message'></textarea>
                </label>
                <button type='submit'>Send</button>
            </form>
        </footer>
    )
}

export default Footer
